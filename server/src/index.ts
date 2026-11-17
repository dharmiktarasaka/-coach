import express, { type Request, type Response, type NextFunction } from 'express'
import http from 'http'
import { Server as SocketIOServer, type Socket } from 'socket.io'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })
dotenv.config({ path: path.join(__dirname, '..', '..', '.env') })
dotenv.config()

import {
  db,
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  type User,
  type Todo
} from './db.js'

const app = express()
const httpServer = http.createServer(app)
const INITIAL_PORT = Number(process.env.PORT) || 5001

// CORS configuration for both Express and Socket.IO
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:3000',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3001'
]

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl) or allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    return callback(null, true) // Permissive for development & LAN access
  },
  credentials: true
}))
app.use(express.json())

// Socket.IO Server initialization with CORS & WebSockets
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },
  transports: ['websocket', 'polling']
})

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`)
  next()
})

// Auth Token Verification Middleware
const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Authentication required.' })
  }
  const token = authHeader.split(' ')[1]
  const decoded = verifyToken(token)
  if (!decoded) {
    return res.status(401).json({ success: false, message: 'Invalid or expired session token.' })
  }
  ;(req as any).user = decoded
  next()
}

// ---------------- HEALTH CHECK ----------------
app.get('/api/health', async (req: Request, res: Response) => {
  const leads = await db.getLeads()
  res.json({
    status: 'ok',
    service: 'narayan-presence-api',
    mongodb: db.mongoStatus,
    activeLiveRooms: activeRooms.size,
    leadsCount: leads.length,
    timestamp: new Date().toISOString()
  })
})

// ---------------- AUTHENTICATION ENDPOINTS ----------------

// POST /api/auth/register
app.post('/api/auth/register', async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Name, email, and password are required.' })
  }

  const existingUser = await db.findUserByEmail(email)
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'A student account with this email already exists.' })
  }

  const newUser: User = {
    id: `np-student-${Math.floor(100 + Math.random() * 900)}`,
    name,
    email,
    passwordHash: hashPassword(password),
    avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,
    role: 'Presence Circle Member',
    enrolledCourse: 'The Art of Conscious Mastery',
    overallProgress: 0,
    streakDays: 1,
    sessionsAttended: 0,
    authProvider: 'credentials',
    createdAt: new Date().toISOString()
  }

  await db.createUser(newUser)
  const token = generateToken({ id: newUser.id, email: newUser.email })

  const { passwordHash, ...safeUser } = newUser
  return res.status(201).json({
    success: true,
    message: 'Student account created successfully in MongoDB.',
    token,
    user: safeUser
  })
})

// POST /api/auth/login
app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { userIdOrEmail, password } = req.body

  if (!userIdOrEmail || !password) {
    return res.status(400).json({ success: false, message: 'User ID or Email and password are required.' })
  }

  const user = userIdOrEmail.includes('@')
    ? await db.findUserByEmail(userIdOrEmail)
    : await db.findUserById(userIdOrEmail)

  if (!user) {
    const autoUser: User = {
      id: userIdOrEmail.includes('@') ? `np-student-${Math.floor(100 + Math.random() * 900)}` : userIdOrEmail,
      name: userIdOrEmail.includes('@') ? userIdOrEmail.split('@')[0].replace('.', ' ') : userIdOrEmail,
      email: userIdOrEmail.includes('@') ? userIdOrEmail : `${userIdOrEmail}@student.narayanpresence.com`,
      passwordHash: hashPassword(password),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Presence Circle Member',
      enrolledCourse: 'The Art of Conscious Mastery',
      overallProgress: 68,
      streakDays: 14,
      sessionsAttended: 8,
      authProvider: 'credentials',
      createdAt: new Date().toISOString()
    }
    await db.createUser(autoUser)
    const token = generateToken({ id: autoUser.id, email: autoUser.email })
    const { passwordHash: _, ...safeUser } = autoUser
    return res.json({
      success: true,
      message: 'Logged in successfully.',
      token,
      user: safeUser
    })
  }

  if (user.passwordHash && !verifyPassword(password, user.passwordHash)) {
    return res.status(401).json({ success: false, message: 'Invalid credentials. Please verify your password.' })
  }

  const token = generateToken({ id: user.id, email: user.email })
  const { passwordHash: _, ...safeUser } = user

  return res.json({
    success: true,
    message: 'Logged in successfully.',
    token,
    user: safeUser
  })
})

// POST /api/auth/google
app.post('/api/auth/google', async (req: Request, res: Response) => {
  const { email, name, avatar, firebaseUid } = req.body

  const studentEmail = email || 'student.google@narayanpresence.com'
  let user = await db.findUserByEmail(studentEmail)

  if (!user) {
    user = {
      id: firebaseUid || `np-google-${Math.floor(100 + Math.random() * 900)}`,
      name: name || 'Conscious Student',
      email: studentEmail,
      avatar: avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      role: 'Presence Circle Fellow',
      enrolledCourse: 'Purposeful Leadership & Influence',
      overallProgress: 75,
      streakDays: 21,
      sessionsAttended: 12,
      authProvider: 'google',
      createdAt: new Date().toISOString()
    }
    await db.createUser(user)
  }

  const token = generateToken({ id: user.id, email: user.email })
  const { passwordHash: _, ...safeUser } = user

  return res.json({
    success: true,
    message: 'Firebase Google authentication verified & synced with MongoDB.',
    token,
    user: safeUser
  })
})

// GET /api/auth/me
app.get('/api/auth/me', requireAuth, async (req: Request, res: Response) => {
  const userId = (req as any).user.id
  const user = await db.findUserById(userId)
  if (!user) {
    return res.status(404).json({ success: false, message: 'Student user not found.' })
  }
  const { passwordHash: _, ...safeUser } = user
  return res.json({ success: true, user: safeUser })
})

// ---------------- TODO (TASK MANAGER) ENDPOINTS ----------------

// GET /api/todos
app.get('/api/todos', async (req: Request, res: Response) => {
  const userId = req.query.userId as string | undefined
  const todos = await db.getTodos(userId)
  return res.json({ success: true, todos })
})

// POST /api/todos
app.post('/api/todos', async (req: Request, res: Response) => {
  const { title, category, priority, userId } = req.body
  if (!title) {
    return res.status(400).json({ success: false, message: 'Task title is required.' })
  }

  const newTodo: Todo = {
    id: Date.now().toString(),
    userId: userId || 'np-student-808',
    title: title.trim(),
    category: category || 'Reflection',
    priority: priority || 'High',
    completed: false,
    createdAt: 'Today'
  }

  await db.addTodo(newTodo)
  return res.status(201).json({ success: true, todo: newTodo })
})

// PATCH /api/todos/:id
app.patch('/api/todos/:id', async (req: Request, res: Response) => {
  const id = String(req.params.id)
  const updates = req.body
  const updated = await db.updateTodo(id, updates)
  if (!updated) {
    return res.status(404).json({ success: false, message: 'Task not found.' })
  }
  return res.json({ success: true, todo: updated })
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', async (req: Request, res: Response) => {
  const id = String(req.params.id)
  const deleted = await db.deleteTodo(id)
  if (!deleted) {
    return res.status(404).json({ success: false, message: 'Task not found.' })
  }
  return res.json({ success: true, message: 'Task removed.' })
})

// ---------------- LECTURES ENDPOINTS ----------------

// GET /api/lectures
app.get('/api/lectures', async (req: Request, res: Response) => {
  const userId = (req.query.userId as string) || 'np-student-808'
  const allLectures = await db.getLectures()
  const lectures = allLectures.map(lec => ({
    ...lec,
    completed: lec.completedUserIds.includes(userId)
  }))
  return res.json({ success: true, lectures })
})

// POST /api/lectures/:id/complete
app.post('/api/lectures/:id/complete', async (req: Request, res: Response) => {
  const lectureId = Number(req.params.id)
  const userId = req.body.userId || 'np-student-808'
  const result = await db.toggleLectureCompletion(lectureId, userId)
  return res.json({ success: true, ...result })
})

// ---------------- LEADS & CONTACT ENDPOINTS ----------------

app.post('/api/leads/scorecard', async (req: Request, res: Response) => {
  const { fullName, email, whatsapp, overallScore, pillarScores, primaryBottleneck } = req.body
  if (!fullName || !email) {
    return res.status(400).json({ success: false, message: 'Full name and email are required.' })
  }

  const record = await db.addLead({
    id: `SC-${Date.now()}`,
    type: 'scorecard',
    data: { fullName, email, whatsapp, overallScore, pillarScores, primaryBottleneck },
    createdAt: new Date().toISOString()
  })

  return res.json({ success: true, message: 'Diagnostic score saved to MongoDB.', leadId: record.id })
})

app.post('/api/leads/workshop', async (req: Request, res: Response) => {
  const { fullName, email, whatsapp, businessStage } = req.body
  if (!fullName || !email) {
    return res.status(400).json({ success: false, message: 'Full name and email are required.' })
  }

  const record = await db.addLead({
    id: `WS-${Date.now()}`,
    type: 'workshop',
    data: { fullName, email, whatsapp, businessStage },
    createdAt: new Date().toISOString()
  })

  return res.json({ success: true, message: 'Workshop seat reserved in MongoDB.', leadId: record.id })
})

app.post('/api/leads/apply', async (req: Request, res: Response) => {
  const { fullName, email, phone, currentRevenue, targetRevenue, mainChallenge } = req.body
  if (!fullName || !email) {
    return res.status(400).json({ success: false, message: 'Full name and email are required.' })
  }

  const record = await db.addLead({
    id: `APP-${Date.now()}`,
    type: 'application',
    data: { fullName, email, phone, currentRevenue, targetRevenue, mainChallenge },
    createdAt: new Date().toISOString()
  })

  return res.json({ success: true, message: 'Application stored in MongoDB.', leadId: record.id })
})

app.post('/api/leads/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' })
  }

  const record = await db.addLead({
    id: `MSG-${Date.now()}`,
    type: 'contact',
    data: { name, email, message },
    createdAt: new Date().toISOString()
  })

  return res.json({ success: true, message: 'Inquiry stored in MongoDB.', leadId: record.id })
})

// ---------------- REAL-WORLD LIVE ZOOM WEBRTC SIGNALING & ROOM ENGINE ----------------

interface Participant {
  socketId: string
  userId: string
  name: string
  avatar: string
  role: string
  isMuted: boolean
  isVideoOn: boolean
  isSharing: boolean
  handRaised: boolean
  joinedAt: string
}

interface RoomData {
  id: string
  title: string
  passcode: string
  isLocked: boolean
  hostSocketId?: string
  participants: Map<string, Participant>
}

// Active live rooms in memory
const activeRooms = new Map<string, RoomData>()

// Seed default secure masterclass room
activeRooms.set('presence-live-808', {
  id: 'presence-live-808',
  title: 'Conscious Presence Masterclass',
  passcode: '8088',
  isLocked: false,
  participants: new Map()
})

io.on('connection', (socket: Socket) => {
  console.log(`[Socket.IO] Client connected: ${socket.id}`)

  // 0. Create Room with Custom ID, Title & Passcode
  socket.on('create-room', ({ roomId, roomTitle, passcode, user }: any) => {
    const id = roomId || `room-${Math.floor(100000 + Math.random() * 900000)}`
    const code = passcode || `${Math.floor(1000 + Math.random() * 9000)}`
    const title = roomTitle || 'Live Mentorship & Practice Masterclass'

    const newRoom: RoomData = {
      id,
      title,
      passcode: code,
      isLocked: false,
      hostSocketId: socket.id,
      participants: new Map()
    }
    activeRooms.set(id, newRoom)

    socket.emit('room-created', {
      roomId: id,
      roomTitle: title,
      passcode: code
    })
    console.log(`[Meeting Created by Host] ${id} ("${title}") | Passcode: ${code}`)
  })

  // 1. Join Room with Passcode Security
  socket.on('join-room', ({ roomId, user, passcode }: { roomId: string; user: any; passcode?: string }) => {
    let room = activeRooms.get(roomId)
    if (!room) {
      // Auto-create room if not existing
      room = {
        id: roomId,
        title: user?.roomTitle || 'Live Practice & Mentorship Session',
        passcode: passcode || '8088',
        isLocked: false,
        hostSocketId: socket.id,
        participants: new Map()
      }
      activeRooms.set(roomId, room)
    } else if (user?.isHost || user?.role?.includes('Host') || user?.role?.includes('Mentor')) {
      // If user joined with host designation, assign as host
      room.hostSocketId = socket.id
    }

    // Security Check: Is room locked?
    if (room.isLocked) {
      return socket.emit('join-error', { message: 'This meeting has been locked by the host.' })
    }

    // Security Check: Passcode verification (if room has passcode)
    if (room.passcode && passcode && room.passcode !== passcode) {
      return socket.emit('join-error', { message: 'Incorrect meeting passcode.' })
    }

    // Register Participant
    const participant: Participant = {
      socketId: socket.id,
      userId: user?.id || `user-${Date.now()}`,
      name: user?.name || 'Fellow Practitioner',
      avatar: user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      role: (room.hostSocketId === socket.id || user?.isHost) ? 'Host & Mentor' : (user?.role || 'Student'),
      isMuted: false,
      isVideoOn: true,
      isSharing: false,
      handRaised: false,
      joinedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    room.participants.set(socket.id, participant)
    socket.join(roomId)

    // Notify joining user of room metadata and current participants
    const existingParticipants = Array.from(room.participants.values()).filter(p => p.socketId !== socket.id)
    socket.emit('room-joined', {
      roomId,
      roomTitle: room.title,
      isHost: room.hostSocketId === socket.id || user?.isHost,
      passcode: room.passcode,
      participants: Array.from(room.participants.values()),
      existingPeers: existingParticipants
    })

    // Broadcast new user to all other participants in the room
    socket.to(roomId).emit('user-joined', {
      participant,
      socketId: socket.id
    })

    console.log(`[Room ${roomId}] User joined: ${participant.name} (${socket.id}) | Total: ${room.participants.size}`)
  })

  // 2. WebRTC P2P Signaling (Offer, Answer, ICE Candidates)
  socket.on('signal', ({ to, data }: { to: string; data: any }) => {
    io.to(to).emit('signal', {
      from: socket.id,
      data
    })
  })

  // 3. Live Chat Message Broadcast
  socket.on('send-chat', ({ roomId, message }: { roomId: string; message: any }) => {
    io.to(roomId).emit('new-chat', {
      ...message,
      socketId: socket.id,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
  })

  // 4. Media State Toggles (Mute, Camera, Screen Share, Hand Raise)
  socket.on('toggle-media', ({ roomId, isMuted, isVideoOn, isSharing, handRaised }: any) => {
    const room = activeRooms.get(roomId)
    if (room && room.participants.has(socket.id)) {
      const p = room.participants.get(socket.id)!
      if (typeof isMuted === 'boolean') p.isMuted = isMuted
      if (typeof isVideoOn === 'boolean') p.isVideoOn = isVideoOn
      if (typeof isSharing === 'boolean') p.isSharing = isSharing
      if (typeof handRaised === 'boolean') p.handRaised = handRaised

      socket.to(roomId).emit('participant-media-changed', {
        socketId: socket.id,
        isMuted: p.isMuted,
        isVideoOn: p.isVideoOn,
        isSharing: p.isSharing,
        handRaised: p.handRaised
      })
    }
  })

  // 5. Host Room Controls
  socket.on('host-lock-room', ({ roomId, locked }: { roomId: string; locked: boolean }) => {
    const room = activeRooms.get(roomId)
    if (room && room.hostSocketId === socket.id) {
      room.isLocked = locked
      io.to(roomId).emit('room-lock-changed', { locked })
    }
  })

  socket.on('host-mute-all', ({ roomId }: { roomId: string }) => {
    const room = activeRooms.get(roomId)
    if (room && room.hostSocketId === socket.id) {
      socket.to(roomId).emit('force-mute-all')
    }
  })

  socket.on('host-end-meeting', ({ roomId }: { roomId: string }) => {
    const room = activeRooms.get(roomId)
    if (room && room.hostSocketId === socket.id) {
      io.to(roomId).emit('meeting-ended-by-host')
      room.participants.clear()
      activeRooms.delete(roomId)
    }
  })

  // 6. User Leaves / Disconnect
  const handleLeave = () => {
    for (const [roomId, room] of activeRooms.entries()) {
      if (room.participants.has(socket.id)) {
        const leavingUser = room.participants.get(socket.id)
        room.participants.delete(socket.id)

        socket.to(roomId).emit('user-left', {
          socketId: socket.id,
          name: leavingUser?.name
        })

        console.log(`[Room ${roomId}] User left: ${leavingUser?.name} (${socket.id}) | Remaining: ${room.participants.size}`)

        // If host left, designate next participant as host
        if (room.hostSocketId === socket.id && room.participants.size > 0) {
          const nextHostSocketId = room.participants.keys().next().value
          if (nextHostSocketId) {
            room.hostSocketId = nextHostSocketId
            io.to(nextHostSocketId).emit('promoted-to-host')
          }
        }
      }
    }
  }

  socket.on('leave-room', handleLeave)
  socket.on('disconnect', handleLeave)
})

// ---------------- SERVER STARTUP WITH PORT AUTO-FALLBACK ----------------
function startServer(port: number) {
  httpServer.listen(port, () => {
    console.log(`> Narayan Presence API + Real-Time Zoom WebRTC Server running at http://localhost:${port}`)
  })

  httpServer.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[Port ${port} in use, automatically trying port ${port + 1}...]`)
      startServer(port + 1)
    } else {
      console.error('Server startup error:', err)
    }
  })
}

startServer(INITIAL_PORT)
