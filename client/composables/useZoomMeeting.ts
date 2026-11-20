import { ref, computed, onUnmounted } from 'vue'

export interface RemoteParticipant {
  socketId: string
  userId: string
  name: string
  avatar: string
  role: string
  isMuted: boolean
  isVideoOn: boolean
  isSharing: boolean
  handRaised: boolean
  stream?: MediaStream
}

export interface ChatMessage {
  id: string
  sender: string
  avatar?: string
  text: string
  time: string
  isSelf: boolean
}

const getSocketServerUrl = () => {
  if (typeof window !== 'undefined') {
    try {
      const config = useRuntimeConfig()
      if (config?.public?.apiUrl) {
        return config.public.apiUrl.replace(/\/api\/?$/, '')
      }
    } catch {
      // outside Nuxt setup context
    }
    const host = window.location.hostname || 'localhost'
    return `http://${host}:5001`
  }
  return 'http://localhost:5001'
}

const ICE_SERVERS = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' }
  ]
}

export const useZoomMeeting = () => {
  const socket = ref<any>(null)
  const isConnected = ref(false)
  const isInMeeting = ref(false)
  const isHost = ref(false)
  const isMeetingLocked = ref(false)
  const errorMessage = ref<string | null>(null)

  // Media state
  const localStream = ref<MediaStream | null>(null)
  const screenStream = ref<MediaStream | null>(null)
  const isMuted = ref(false)
  const isVideoOn = ref(true)
  const isScreenSharing = ref(false)
  const handRaised = ref(false)

  // Room & Participants
  const currentRoomId = ref('presence-live-808')
  const currentRoomTitle = ref('Conscious Presence Masterclass')
  const currentPasscode = ref('8088')
  const participants = ref<RemoteParticipant[]>([])
  const peerConnections = new Map<string, RTCPeerConnection>()

  // Chat
  const chatMessages = ref<ChatMessage[]>([])
  const unreadChatCount = ref(0)

  // Timer
  const durationSeconds = ref(0)
  let timerInterval: any = null

  // 1. Initialize Local Camera and Microphone
  const startLocalMedia = async () => {
    if (typeof window === 'undefined' || !navigator.mediaDevices) return null

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: true
      })
      localStream.value = stream
      isVideoOn.value = true
      isMuted.value = false
      return stream
    } catch (err: any) {
      console.warn('[Camera/Mic Warning]: Could not open webcam hardware directly:', err.message)
      // If user denied camera or running in headless/no-device mode, create a simulated black canvas stream
      const canvas = document.createElement('canvas')
      canvas.width = 640
      canvas.height = 480
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#171844'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      const fakeStream = canvas.captureStream(10)
      localStream.value = fakeStream
      return fakeStream
    }
  }

  // 2. Connect to Real-time Socket.IO Server
  const connectSocket = async () => {
    if (socket.value) return socket.value

    try {
      // Bundled locally via socket.io-client (no external CDN dependency, zero connection timeouts)
      const { io } = await import('socket.io-client')

      const serverUrl = getSocketServerUrl()
      console.log('[Zoom WebRTC] Connecting to signaling server:', serverUrl)

      const s = io(serverUrl, {
        transports: ['websocket', 'polling'],
        reconnectionAttempts: 5,
        timeout: 10000
      })

      socket.value = s

      s.on('connect', () => {
        isConnected.value = true
        errorMessage.value = null
        console.log('[Zoom WebRTC] Connected to signaling server:', s.id)
      })

      s.on('connect_error', (err: any) => {
        console.warn('[Zoom WebRTC] Socket connection warning:', err?.message || err)
        errorMessage.value = `Unable to reach signaling server at ${serverUrl}. Please ensure the backend server is running.`
      })

      s.on('disconnect', () => {
        isConnected.value = false
        console.log('[Zoom WebRTC] Disconnected from signaling server.')
      })

      // Room Joined Confirmation
      s.on('room-joined', async ({ roomId, roomTitle, isHost: hostStatus, passcode, existingPeers }: any) => {
        isInMeeting.value = true
        isHost.value = hostStatus
        currentRoomId.value = roomId
        currentRoomTitle.value = roomTitle || 'Conscious Masterclass'
        if (passcode) currentPasscode.value = passcode
        errorMessage.value = null

        startTimer()

        // Create WebRTC Offer for each existing peer in the room
        for (const peer of existingPeers) {
          addParticipant(peer)
          await createPeerOffer(peer.socketId)
        }
      })

      // Another user joined our room
      s.on('user-joined', ({ participant, socketId }: any) => {
        const p = participant || {}
        console.log('[Zoom WebRTC] User joined room:', p.name || 'Participant', socketId)
        addParticipant({ ...p, socketId })
        // If we have an active screen share or camera, announce it
        broadcastMediaState()
      })

      // Incoming WebRTC Signal (Offer / Answer / ICE)
      s.on('signal', async ({ from, data }: any) => {
        await handleIncomingSignal(from, data)
      })

      // Participant toggled mic, camera, screen, or hand
      s.on('participant-media-changed', ({ socketId, isMuted: muted, isVideoOn: video, isSharing, handRaised: hand }: any) => {
        const p = participants.value.find(item => item.socketId === socketId)
        if (p) {
          if (typeof muted === 'boolean') p.isMuted = muted
          if (typeof video === 'boolean') p.isVideoOn = video
          if (typeof isSharing === 'boolean') p.isSharing = isSharing
          if (typeof hand === 'boolean') p.handRaised = hand
        }
      })

      // Participant left
      s.on('user-left', ({ socketId }: any) => {
        closePeerConnection(socketId)
        participants.value = participants.value.filter(p => p.socketId !== socketId)
      })

      // New Chat Message
      s.on('new-chat', (msg: any) => {
        chatMessages.value.push({
          id: msg.id || Date.now().toString(),
          sender: msg.sender,
          avatar: msg.avatar,
          text: msg.text,
          time: msg.time,
          isSelf: msg.socketId === s.id
        })
      })

      // Host room lock changed
      s.on('room-lock-changed', ({ locked }: any) => {
        isMeetingLocked.value = locked
      })

      // Force mute from host
      s.on('force-mute-all', () => {
        if (!isHost.value) {
          muteAudio()
        }
      })

      // Individual force mute from host
      s.on('force-mute-by-host', () => {
        muteAudio()
        alert('You have been muted by the host.')
      })

      // Kicked from meeting by host
      s.on('kicked-by-host', ({ reason }: any) => {
        leaveMeeting()
        alert(reason || 'You have been removed from the session by the host.')
      })

      // Host ended meeting
      s.on('meeting-ended-by-host', () => {
        leaveMeeting()
        alert('The host has ended this live session.')
      })

      s.on('join-error', ({ message }: any) => {
        errorMessage.value = message
        alert(message || 'Could not join meeting.')
      })

      return s
    } catch (err) {
      console.error('[Zoom WebRTC Socket Error]:', err)
      return null
    }
  }

  // 3. WebRTC Mesh Signaling Logic
  const createPeerConnection = (targetSocketId: string): RTCPeerConnection => {
    if (peerConnections.has(targetSocketId)) {
      return peerConnections.get(targetSocketId)!
    }

    const pc = new RTCPeerConnection(ICE_SERVERS)

    // Add local media tracks to peer connection
    if (localStream.value) {
      localStream.value.getTracks().forEach(track => {
        pc.addTrack(track, localStream.value!)
      })
    }

    // Send ICE candidates via signaling server
    pc.onicecandidate = (event) => {
      if (event.candidate && socket.value) {
        socket.value.emit('signal', {
          to: targetSocketId,
          data: { type: 'candidate', candidate: event.candidate }
        })
      }
    }

    // Receive remote media track
    pc.ontrack = (event) => {
      console.log('[WebRTC Remote Track Received]:', event.streams[0])
      const p = participants.value.find(item => item.socketId === targetSocketId)
      if (p) {
        p.stream = event.streams[0]
        participants.value = [...participants.value]
      }
    }

    peerConnections.set(targetSocketId, pc)
    return pc
  }

  const createPeerOffer = async (targetSocketId: string) => {
    const pc = createPeerConnection(targetSocketId)
    try {
      const offer = await pc.createOffer()
      await pc.setLocalDescription(offer)
      if (socket.value) {
        socket.value.emit('signal', {
          to: targetSocketId,
          data: { type: 'offer', sdp: pc.localDescription }
        })
      }
    } catch (err) {
      console.error('[WebRTC Offer Error]:', err)
    }
  }

  const handleIncomingSignal = async (fromSocketId: string, data: any) => {
    const pc = createPeerConnection(fromSocketId)

    try {
      if (data.type === 'offer') {
        await pc.setRemoteDescription(new RTCSessionDescription(data.sdp))
        const answer = await pc.createAnswer()
        await pc.setLocalDescription(answer)
        if (socket.value) {
          socket.value.emit('signal', {
            to: fromSocketId,
            data: { type: 'answer', sdp: pc.localDescription }
          })
        }
      } else if (data.type === 'answer') {
        await pc.setRemoteDescription(new RTCSessionDescription(data.sdp))
      } else if (data.type === 'candidate') {
        await pc.addIceCandidate(new RTCIceCandidate(data.candidate))
      }
    } catch (err) {
      console.error('[WebRTC Signal Handling Error]:', err)
    }
  }

  const closePeerConnection = (socketId: string) => {
    if (peerConnections.has(socketId)) {
      const pc = peerConnections.get(socketId)!
      pc.close()
      peerConnections.delete(socketId)
    }
  }

  const addParticipant = (p: any) => {
    if (!p || !p.socketId) return
    if (!participants.value.some(item => item.socketId === p.socketId)) {
      participants.value.push({
        socketId: p.socketId,
        userId: p.userId || `user-${Date.now()}`,
        name: p.name || 'Participant',
        avatar: p.avatar || '',
        role: p.role || 'Student',
        isMuted: p.isMuted || false,
        isVideoOn: p.isVideoOn !== false,
        isSharing: p.isSharing || false,
        handRaised: p.handRaised || false
      })
    }
  }

  // 4. Create, Join & Leave Meeting
  const createMeeting = async (title: string, passcode?: string, hostUser?: any, customRoomId?: string) => {
    errorMessage.value = null
    const code = passcode?.trim() || `${Math.floor(1000 + Math.random() * 9000)}`
    const id = customRoomId?.trim() || `room-${Math.floor(100000 + Math.random() * 900000)}`
    const roomTitle = title?.trim() || 'Live Conscious Presence Masterclass'

    currentRoomId.value = id
    currentRoomTitle.value = roomTitle
    currentPasscode.value = code
    isHost.value = true

    await startLocalMedia()
    const s = await connectSocket()

    if (s) {
      s.emit('create-room', {
        roomId: id,
        roomTitle,
        passcode: code,
        user: {
          id: hostUser?.id,
          name: hostUser?.name,
          avatar: hostUser?.avatar,
          role: 'Host & Mentor',
          isHost: true
        }
      })

      // Immediately enter the created room as host
      s.emit('join-room', {
        roomId: id,
        user: {
          id: hostUser?.id,
          name: hostUser?.name,
          avatar: hostUser?.avatar,
          role: 'Host & Mentor',
          isHost: true
        },
        passcode: code
      })
    }

    return { roomId: id, passcode: code, title: roomTitle }
  }

  const joinMeeting = async (roomId: string, user: any, passcode: string = '8088') => {
    errorMessage.value = null
    await startLocalMedia()
    const s = await connectSocket()

    if (s) {
      s.emit('join-room', {
        roomId: roomId || 'presence-live-808',
        user: {
          id: user?.id,
          name: user?.name,
          avatar: user?.avatar,
          role: user?.role
        },
        passcode
      })
    }
  }

  const leaveMeeting = () => {
    if (socket.value) {
      socket.value.emit('leave-room')
    }

    // Stop all local media tracks
    if (localStream.value) {
      localStream.value.getTracks().forEach(track => track.stop())
      localStream.value = null
    }

    if (screenStream.value) {
      screenStream.value.getTracks().forEach(track => track.stop())
      screenStream.value = null
    }

    // Close all WebRTC peers
    peerConnections.forEach(pc => pc.close())
    peerConnections.clear()

    participants.value = []
    chatMessages.value = []
    isInMeeting.value = false
    isScreenSharing.value = false
    durationSeconds.value = 0

    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }

  // 5. Real Media Controls
  const toggleAudio = async () => {
    if (!localStream.value) {
      await startLocalMedia()
    }
    if (localStream.value) {
      const audioTracks = localStream.value.getAudioTracks()
      if (audioTracks.length > 0) {
        audioTracks[0].enabled = !audioTracks[0].enabled
        isMuted.value = !audioTracks[0].enabled
      } else {
        isMuted.value = !isMuted.value
      }
    } else {
      isMuted.value = !isMuted.value
    }
    broadcastMediaState()
  }

  const muteAudio = () => {
    if (localStream.value) {
      localStream.value.getAudioTracks().forEach(t => (t.enabled = false))
    }
    isMuted.value = true
    broadcastMediaState()
  }

  const toggleVideo = async () => {
    if (!localStream.value) {
      await startLocalMedia()
    }
    if (localStream.value) {
      const videoTracks = localStream.value.getVideoTracks()
      if (videoTracks.length > 0) {
        videoTracks[0].enabled = !videoTracks[0].enabled
        isVideoOn.value = videoTracks[0].enabled
      } else {
        isVideoOn.value = !isVideoOn.value
      }
    } else {
      isVideoOn.value = !isVideoOn.value
    }
    broadcastMediaState()
  }

  // 6. Real Screen Sharing (Desktop, App, or Browser Tab)
  const toggleScreenShare = async () => {
    if (isScreenSharing.value) {
      // Stop screen sharing
      if (screenStream.value) {
        screenStream.value.getTracks().forEach(t => t.stop())
        screenStream.value = null
      }
      isScreenSharing.value = false

      // Switch peer video back to camera track
      if (localStream.value) {
        const cameraTrack = localStream.value.getVideoTracks()[0]
        if (cameraTrack) {
          peerConnections.forEach(pc => {
            const sender = pc.getSenders().find(s => s.track && s.track.kind === 'video')
            if (sender) sender.replaceTrack(cameraTrack).catch(err => console.warn('replaceTrack camera error:', err))
          })
        }
      }
      broadcastMediaState()
    } else {
      // Start screen sharing via getDisplayMedia
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true
        })

        screenStream.value = stream
        isScreenSharing.value = true

        // Swap track in peer connections to the screen share track
        const screenTrack = stream.getVideoTracks()[0]
        if (screenTrack) {
          peerConnections.forEach(pc => {
            const sender = pc.getSenders().find(s => s.track && s.track.kind === 'video')
            if (sender) sender.replaceTrack(screenTrack).catch(err => console.warn('replaceTrack screen error:', err))
          })
        }

        broadcastMediaState()

        // Handle when user stops sharing via browser floating bar
        screenTrack.onended = () => {
          isScreenSharing.value = false
          screenStream.value = null
          if (localStream.value) {
            const cameraTrack = localStream.value.getVideoTracks()[0]
            if (cameraTrack) {
              peerConnections.forEach(pc => {
                const sender = pc.getSenders().find(s => s.track && s.track.kind === 'video')
                if (sender) sender.replaceTrack(cameraTrack).catch(err => console.warn('replaceTrack back to camera:', err))
              })
            }
          }
          broadcastMediaState()
        }
      } catch (err) {
        console.warn('[Screen Share Cancelled / Denied]:', err)
      }
    }
  }

  // Helper to bind MediaStream to an HTMLVideoElement safely without errors or flicker
  const bindVideoElement = (el: HTMLVideoElement | any, stream: any) => {
    if (!el) return

    // If stream is falsy, unbind cleanly
    if (!stream) {
      if (el.srcObject) el.srcObject = null
      return
    }

    // Safely unwrap if a Vue ref was passed
    const rawStream = (stream && typeof stream === 'object' && 'value' in stream)
      ? stream.value
      : stream

    // If unwrapped stream is falsy, unbind
    if (!rawStream) {
      if (el.srcObject) el.srcObject = null
      return
    }

    // Verify it's a valid browser MediaStream or MediaSource before assigning
    const isMediaStream = typeof MediaStream !== 'undefined' && rawStream instanceof MediaStream
    const isMediaSource = typeof MediaSource !== 'undefined' && rawStream instanceof MediaSource

    if (!isMediaStream && !isMediaSource) {
      return
    }

    if (el.srcObject !== rawStream) {
      el.srcObject = rawStream
      el.play().catch((_e: any) => {
        // Autoplay handled if muted or requires user interaction
      })
    }
  }

  const toggleHandRaise = () => {
    handRaised.value = !handRaised.value
    broadcastMediaState()
  }

  const broadcastMediaState = () => {
    if (socket.value) {
      socket.value.emit('toggle-media', {
        roomId: currentRoomId.value,
        isMuted: isMuted.value,
        isVideoOn: isVideoOn.value,
        isSharing: isScreenSharing.value,
        handRaised: handRaised.value
      })
    }
  }

  // 7. Live Chat Messages
  const sendChatMessage = (text: string, senderName: string, avatar?: string) => {
    if (!text.trim() || !socket.value) return

    const msg = {
      id: Date.now().toString(),
      sender: senderName || 'Student',
      avatar,
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    socket.value.emit('send-chat', {
      roomId: currentRoomId.value,
      message: msg
    })
  }

  // 8. Host Controls
  const lockMeeting = (locked: boolean) => {
    if (socket.value && isHost.value) {
      socket.value.emit('host-lock-room', {
        roomId: currentRoomId.value,
        locked
      })
    }
  }

  const muteAllParticipants = () => {
    if (socket.value && isHost.value) {
      socket.value.emit('host-mute-all', {
        roomId: currentRoomId.value
      })
    }
  }

  const muteParticipant = (targetSocketId: string) => {
    if (socket.value && isHost.value && targetSocketId) {
      socket.value.emit('host-mute-participant', {
        roomId: currentRoomId.value,
        targetSocketId
      })
    }
  }

  const kickParticipant = (targetSocketId: string, participantName?: string) => {
    if (socket.value && isHost.value && targetSocketId) {
      const confirmKick = confirm(`Are you sure you want to remove ${participantName || 'this participant'} from the meeting?`)
      if (confirmKick) {
        socket.value.emit('host-kick-participant', {
          roomId: currentRoomId.value,
          targetSocketId,
          reason: 'You were removed from the session by the host.'
        })
      }
    }
  }

  const endMeetingForAll = () => {
    if (socket.value && isHost.value) {
      socket.value.emit('host-end-meeting', {
        roomId: currentRoomId.value
      })
    }
  }

  const startTimer = () => {
    if (timerInterval) clearInterval(timerInterval)
    durationSeconds.value = 0
    timerInterval = setInterval(() => {
      durationSeconds.value++
    }, 1000)
  }

  const formattedDuration = computed(() => {
    const hrs = Math.floor(durationSeconds.value / 3600)
    const mins = Math.floor((durationSeconds.value % 3600) / 60)
    const secs = durationSeconds.value % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  })

  onUnmounted(() => {
    leaveMeeting()
  })

  return {
    socket,
    isConnected,
    isInMeeting,
    isHost,
    isMeetingLocked,
    errorMessage,
    currentRoomId,
    currentRoomTitle,
    currentPasscode,
    participants,
    localStream,
    screenStream,
    isMuted,
    isVideoOn,
    isScreenSharing,
    handRaised,
    chatMessages,
    formattedDuration,
    startLocalMedia,
    createMeeting,
    joinMeeting,
    leaveMeeting,
    toggleAudio,
    toggleVideo,
    toggleScreenShare,
    toggleHandRaise,
    sendChatMessage,
    lockMeeting,
    muteAllParticipants,
    muteParticipant,
    kickParticipant,
    endMeetingForAll,
    bindVideoElement
  }
}
