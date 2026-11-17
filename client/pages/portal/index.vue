<template>
  <div class="min-h-screen bg-[#FAFAFA] text-[#0D1431] pt-24 pb-16">
    <UiContainer size="xl">
      <!-- Portal Top Navigation & Student Header -->
      <div class="bg-white border border-[#EAE2D4] rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#EAE2D4]/70">
          <div class="flex items-center gap-4">
            <div class="relative">
              <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#171844] shadow-sm bg-[#171844]">
                <img :src="student.avatar" :alt="student.name" class="w-full h-full object-cover" />
              </div>
              <span class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#35D9B0] border-2 border-white"></span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h1 class="text-xl sm:text-2xl font-extrabold text-[#171844]">{{ student.name }}</h1>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#171844] text-[#F8D78B] border border-[#F8D78B]/30">
                  {{ student.role }}
                </span>
              </div>
              <p class="text-xs text-[#8C6D57] mt-0.5 font-mono">
                Student ID: {{ student.id }} • {{ student.enrolledCourse }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <NuxtLink
              to="/courses"
              class="px-4 py-2 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-xs font-bold text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors"
            >
              Browse Library
            </NuxtLink>
            <button
              type="button"
              class="px-4 py-2 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-xs font-bold text-[#8C6D57] hover:text-[#171844] hover:border-[#171844] transition-colors"
              @click="handleSignOut"
            >
              Sign Out
            </button>
          </div>
        </div>

        <!-- 4 Core Navigation Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pt-6">
          <button
            type="button"
            :class="[
              'px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer',
              activeTab === 'dashboard'
                ? 'bg-[#171844] text-[#F8D78B] shadow-sm'
                : 'bg-[#FAFAFA] text-[#8C6D57] hover:text-[#171844] hover:bg-[#EAE2D4]/50'
            ]"
            @click="activeTab = 'dashboard'"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>1. Dashboard</span>
          </button>

          <button
            type="button"
            :class="[
              'px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer',
              activeTab === 'live'
                ? 'bg-[#171844] text-[#F8D78B] shadow-sm'
                : 'bg-[#FAFAFA] text-[#8C6D57] hover:text-[#171844] hover:bg-[#EAE2D4]/50'
            ]"
            @click="activeTab = 'live'"
          >
            <span class="w-2 h-2 rounded-full bg-[#35D9B0] animate-pulse"></span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>2. Live Zoom Session</span>
          </button>

          <button
            type="button"
            :class="[
              'px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer',
              activeTab === 'lectures'
                ? 'bg-[#171844] text-[#F8D78B] shadow-sm'
                : 'bg-[#FAFAFA] text-[#8C6D57] hover:text-[#171844] hover:bg-[#EAE2D4]/50'
            ]"
            @click="activeTab = 'lectures'"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>3. Video Lecture Vault</span>
          </button>

          <button
            type="button"
            :class="[
              'px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer',
              activeTab === 'todo'
                ? 'bg-[#171844] text-[#F8D78B] shadow-sm'
                : 'bg-[#FAFAFA] text-[#8C6D57] hover:text-[#171844] hover:bg-[#EAE2D4]/50'
            ]"
            @click="activeTab = 'todo'"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span>4. Real Task Manager (Todo)</span>
            <span class="px-1.5 py-0.2 rounded-full text-[10px] bg-[#35D9B0] text-[#171844] font-bold">
              {{ pendingTasksCount }}
            </span>
          </button>
        </div>
      </div>

      <!-- ================= TAB 1: DASHBOARD ================= -->
      <div v-if="activeTab === 'dashboard'" class="space-y-8 animate-fadeIn">
        <!-- Progress Summary Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div class="p-6 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#8C6D57]">Overall Course Progress</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-[#171844]">{{ studentProgress }}%</span>
              <span class="text-xs text-[#35D9B0] font-semibold">On Track</span>
            </div>
            <!-- Progress Bar -->
            <div class="w-full h-2 rounded-full bg-[#FAFAFA] border border-[#EAE2D4] overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#171844] via-[#242658] to-[#35D9B0]" :style="{ width: `${studentProgress}%` }"></div>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#8C6D57]">Daily Practice Streak</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-[#171844]">14 Days</span>
              <span class="text-xs text-[#F8D78B]">🔥 Active</span>
            </div>
            <p class="text-xs text-[#352D47]">Consistent morning presence protocol</p>
          </div>

          <div class="p-6 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#8C6D57]">Live Sessions Attended</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-[#171844]">8 / 10</span>
              <span class="text-xs text-[#8C6D57]">Masterclasses</span>
            </div>
            <p class="text-xs text-[#352D47]">Next session: Tomorrow, 6:00 PM</p>
          </div>

          <div class="p-6 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#8C6D57]">Pending Daily Tasks</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-[#171844]">{{ pendingTasksCount }}</span>
              <span class="text-xs text-[#8C6D57]">In Todo</span>
            </div>
            <button
              type="button"
              class="text-xs font-bold text-[#171844] hover:text-[#8C6D57] underline"
              @click="activeTab = 'todo'"
            >
              View Todo List &rarr;
            </button>
          </div>
        </div>

        <!-- Next Up & Quick Action Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Next Live Meeting Card -->
          <div class="lg:col-span-7 bg-[#171844] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#F8D78B]/30 space-y-6">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full bg-[#35D9B0]/20 text-[#35D9B0] text-xs font-bold uppercase tracking-wider">
                ● Live Video Session Ready
              </span>
              <span class="text-xs font-mono text-[#F8D78B]">Meeting ID: 894-3291</span>
            </div>

            <div class="space-y-2">
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
                Live Cohort Masterclass & Q&A
              </h3>
              <p class="text-sm text-[#EAE2D4] leading-relaxed">
                Hosted by Narayan. Dive into real-time case studies on overcoming cognitive fatigue and leading with quiet authority.
              </p>
            </div>

            <div class="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                class="px-6 py-3.5 rounded-xl bg-[#F8D78B] hover:bg-white text-[#171844] font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                @click="activeTab = 'live'"
              >
                <span>Enter Live Zoom Room</span>
                <span>&rarr;</span>
              </button>
              <button
                type="button"
                class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                @click="activeTab = 'lectures'"
              >
                View Past Recordings
              </button>
            </div>
          </div>

          <!-- Quick Daily Practice Card -->
          <div class="lg:col-span-5 bg-white border border-[#EAE2D4] rounded-3xl p-8 shadow-sm space-y-6">
            <div class="flex items-center justify-between pb-3 border-b border-[#EAE2D4]">
              <h3 class="text-base font-bold text-[#171844]">Today's Focus Protocol</h3>
              <span class="text-xs font-mono text-[#8C6D57]">Day 14</span>
            </div>

            <div class="space-y-3">
              <div
                v-for="item in dailyRituals"
                :key="item.id"
                class="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#EAE2D4]/70 flex items-center justify-between"
              >
                <div class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    :checked="item.completed"
                    class="rounded accent-[#171844]"
                    @change="item.completed = !item.completed"
                  />
                  <div>
                    <div class="text-xs font-bold text-[#171844]" :class="{ 'line-through opacity-50': item.completed }">
                      {{ item.title }}
                    </div>
                    <div class="text-[11px] text-[#8C6D57]">{{ item.time }}</div>
                  </div>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAE2D4]/60 text-[#171844]">
                  {{ item.tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= TAB 2: LIVE ZOOM SESSION ================= -->
      <div v-if="activeTab === 'live'" class="space-y-6 animate-fadeIn">
        <!-- 1. PRE-MEETING LOBBY & SECURITY CHECK (When not yet in meeting) -->
        <div v-if="!isInMeeting" class="bg-[#0A0D1F] border border-[#171844] rounded-3xl overflow-hidden shadow-2xl text-white p-6 sm:p-10">
          <div class="max-w-4xl mx-auto space-y-6">
            <!-- Header -->
            <div class="text-center space-y-2 border-b border-white/10 pb-6">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8D78B]/20 text-[#F8D78B] text-xs font-bold uppercase tracking-wider mb-2">
                🔒 Secure Live Video Portal
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white">
                Live Cohort Mentorship & Practice Room
              </h2>
              <p class="text-sm text-[#EAE2D4]/70 max-w-xl mx-auto">
                Real-time WebRTC multi-peer masterclass with camera, microphone, screen sharing, and end-to-end encrypted chat.
              </p>
            </div>

            <!-- Direct URL Invite Notification Banner -->
            <div v-if="hasInviteFromUrl" class="p-4 rounded-2xl bg-gradient-to-r from-[#242658] via-[#171844] to-[#242658] border-2 border-[#F8D78B]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div class="flex items-center gap-3">
                <span class="text-3xl">🎟️</span>
                <div>
                  <div class="text-xs font-extrabold text-[#F8D78B] uppercase tracking-wider">Live Masterclass Invitation Detected</div>
                  <div class="text-xs text-white/90">
                    You've been invited to room <span class="font-mono font-bold text-[#35D9B0]">{{ joinRoomId }}</span>. Your room details are pre-filled below!
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="px-4 py-2 rounded-xl bg-[#F8D78B] hover:bg-white text-[#171844] font-extrabold text-xs uppercase tracking-wider transition-colors shadow whitespace-nowrap cursor-pointer"
                @click="handleJoinMeeting"
              >
                Quick Join Now &rarr;
              </button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <!-- Left: Camera & Microphone Preview -->
              <div class="lg:col-span-6 space-y-4">
                <div class="relative w-full h-64 sm:h-72 rounded-2xl bg-[#171844] border-2 border-[#F8D78B]/30 overflow-hidden flex items-center justify-center shadow-lg">
                  <!-- Live Webcam Video Preview -->
                  <video
                    v-show="isPreJoinCamOn && preJoinPreviewStream"
                    :ref="(el) => bindVideoElement(el, preJoinPreviewStream)"
                    autoplay
                    playsinline
                    muted
                    class="w-full h-full object-cover"
                  ></video>

                  <!-- Camera Off Avatar Placeholder -->
                  <div v-if="!isPreJoinCamOn || !preJoinPreviewStream" class="text-center space-y-3 p-4">
                    <div class="w-20 h-20 rounded-full bg-[#242658] border-2 border-[#F8D78B] text-[#F8D78B] flex items-center justify-center font-bold text-2xl mx-auto shadow-md">
                      {{ getInitial(student?.name, 'U') }}
                    </div>
                    <div class="text-xs text-white/70">
                      {{ !isPreJoinCamOn ? 'Camera Turned Off' : 'Starting Camera Preview...' }}
                    </div>
                  </div>

                  <!-- Floating Device Controls on Preview -->
                  <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md text-xs">
                    <span class="text-white/80 font-medium">Device Preview</span>
                    <div class="flex items-center gap-2">
                      <button
                        type="button"
                        :class="['p-2 rounded-lg transition-colors cursor-pointer', isPreJoinMicMuted ? 'bg-red-500/30 text-red-400' : 'bg-white/10 text-white hover:bg-white/20']"
                        :title="isPreJoinMicMuted ? 'Unmute Mic' : 'Mute Mic'"
                        @click="togglePreJoinMic"
                      >
                        <svg v-if="!isPreJoinMicMuted" class="w-4 h-4 text-[#35D9B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        <svg v-else class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        :class="['p-2 rounded-lg transition-colors cursor-pointer', !isPreJoinCamOn ? 'bg-red-500/30 text-red-400' : 'bg-white/10 text-white hover:bg-white/20']"
                        :title="isPreJoinCamOn ? 'Stop Camera' : 'Start Camera'"
                        @click="togglePreJoinCam"
                      >
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-[#EAE2D4]">
                  <span class="text-lg">🛡️</span>
                  <div>
                    <span class="font-bold text-white">Encrypted Direct WebRTC:</span>
                    <span class="text-white/70 ml-1">Peer-to-peer audio, video, screen share, and instant chat.</span>
                  </div>
                </div>
              </div>

              <!-- Right: 2 Tabs for "Join Meeting" vs "Host / Create Meeting" -->
              <div class="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                <!-- Segmented Tab Switcher -->
                <div class="grid grid-cols-2 gap-2 p-1 rounded-xl bg-black/40 border border-white/10 text-xs font-bold">
                  <button
                    type="button"
                    :class="[
                      'py-2 px-3 rounded-lg transition-all text-center cursor-pointer',
                      lobbyTab === 'join' ? 'bg-[#F8D78B] text-[#171844] shadow' : 'text-white/70 hover:text-white'
                    ]"
                    @click="lobbyTab = 'join'"
                  >
                    Join Existing Meeting
                  </button>
                  <button
                    type="button"
                    :class="[
                      'py-2 px-3 rounded-lg transition-all text-center cursor-pointer',
                      lobbyTab === 'create' ? 'bg-[#F8D78B] text-[#171844] shadow' : 'text-white/70 hover:text-white'
                    ]"
                    @click="lobbyTab = 'create'"
                  >
                    + Host / Create Meeting
                  </button>
                </div>

                <div v-if="errorMessage" class="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold">
                  ⚠️ {{ errorMessage }}
                </div>

                <!-- FORM A: JOIN EXISTING MEETING -->
                <form v-if="lobbyTab === 'join'" class="space-y-4" @submit.prevent="handleJoinMeeting">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-[#F8D78B] mb-1.5">
                      Meeting Room ID
                    </label>
                    <input
                      v-model="joinRoomId"
                      type="text"
                      required
                      placeholder="e.g. presence-live-808"
                      class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white font-mono text-sm placeholder:text-white/30 focus:outline-none focus:border-[#F8D78B]"
                    />
                    <span class="text-[11px] text-white/50 mt-1 block">Default Room: presence-live-808</span>
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-[#F8D78B] mb-1.5">
                      Security Passcode
                    </label>
                    <div class="relative">
                      <input
                        v-model="joinPasscode"
                        :type="showPasscode ? 'text' : 'password'"
                        required
                        placeholder="Default: 8088"
                        class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white font-mono text-sm placeholder:text-white/30 focus:outline-none focus:border-[#F8D78B]"
                      />
                      <button
                        type="button"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/60 hover:text-white cursor-pointer"
                        @click="showPasscode = !showPasscode"
                      >
                        {{ showPasscode ? 'Hide' : 'Show' }}
                      </button>
                    </div>
                    <span class="text-[11px] text-white/50 mt-1 block">Meeting Passcode: 8088</span>
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-[#F8D78B] mb-1.5">
                      Your Identity & Role
                    </label>
                    <div class="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        :class="['py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer', joinRole === 'Student' ? 'bg-[#F8D78B] text-[#171844] border-[#F8D78B]' : 'bg-black/30 text-white/70 border-white/10 hover:border-white/30']"
                        @click="joinRole = 'Student'"
                      >
                        Student / Attendee
                      </button>
                      <button
                        type="button"
                        :class="['py-2 px-3 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer', joinRole === 'Host' ? 'bg-[#F8D78B] text-[#171844] border-[#F8D78B]' : 'bg-black/30 text-white/70 border-white/10 hover:border-white/30']"
                        @click="joinRole = 'Host'"
                      >
                        Host / Mentor
                      </button>
                    </div>
                  </div>

                  <div class="pt-2">
                    <button
                      type="submit"
                      :disabled="isJoiningMeeting"
                      class="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F8D78B] to-[#EAE2D4] hover:from-white hover:to-white text-[#171844] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <svg v-if="isJoiningMeeting" class="animate-spin w-4 h-4 text-[#171844]" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{{ isJoiningMeeting ? 'Connecting to Room...' : 'Join Secure Live Zoom Session &rarr;' }}</span>
                    </button>
                  </div>
                </form>

                <!-- FORM B: HOST / CREATE NEW MEETING -->
                <form v-else class="space-y-4" @submit.prevent="handleCreateMeeting">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-[#F8D78B] mb-1.5">
                      Meeting Topic / Title
                    </label>
                    <input
                      v-model="newMeetingTitle"
                      type="text"
                      required
                      placeholder="e.g. Masterclass: Overcoming Cognitive Fatigue"
                      class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#F8D78B]"
                    />
                  </div>

                  <div>
                    <div class="flex items-center justify-between mb-1.5">
                      <label class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">
                        Custom Room ID
                      </label>
                      <button
                        type="button"
                        class="text-[11px] text-[#35D9B0] hover:underline cursor-pointer flex items-center gap-1"
                        @click="generateRandomRoomId"
                      >
                        <span>🎲 Generate New ID</span>
                      </button>
                    </div>
                    <input
                      v-model="newMeetingRoomId"
                      type="text"
                      required
                      placeholder="e.g. presence-9402"
                      class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white font-mono text-sm placeholder:text-white/30 focus:outline-none focus:border-[#F8D78B]"
                    />
                  </div>

                  <div>
                    <div class="flex items-center justify-between mb-1.5">
                      <label class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">
                        Security Passcode
                      </label>
                      <button
                        type="button"
                        class="text-[11px] text-[#35D9B0] hover:underline cursor-pointer flex items-center gap-1"
                        @click="generateRandomPasscode"
                      >
                        <span>🎲 Generate Random</span>
                      </button>
                    </div>
                    <input
                      v-model="newMeetingPasscode"
                      type="text"
                      required
                      placeholder="e.g. 8088"
                      class="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white font-mono text-sm placeholder:text-white/30 focus:outline-none focus:border-[#F8D78B]"
                    />
                  </div>

                  <div class="p-3 rounded-xl bg-[#F8D78B]/10 border border-[#F8D78B]/20 text-xs text-[#EAE2D4] space-y-1">
                    <div class="font-bold text-[#F8D78B]">👑 Host Privileges:</div>
                    <p class="text-[11px] text-white/70">
                      You will have Host Moderation rights to lock the room, mute participants, and generate instant shareable links for attendees.
                    </p>
                  </div>

                  <div class="pt-2">
                    <button
                      type="submit"
                      :disabled="isCreatingMeeting"
                      class="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F8D78B] to-[#35D9B0] hover:from-white hover:to-white text-[#171844] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <svg v-if="isCreatingMeeting" class="animate-spin w-4 h-4 text-[#171844]" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{{ isCreatingMeeting ? 'Creating Room & Launching...' : 'Create & Launch Live Room as Host &rarr;' }}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. IN-MEETING LIVE ZOOM ROOM (When joined) -->
        <div v-else class="bg-[#0A0D1F] border border-[#171844] rounded-3xl overflow-hidden shadow-2xl text-white">
          <!-- Top Zoom Bar -->
          <div class="px-4 sm:px-6 py-3.5 bg-[#171844] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <!-- Left Info -->
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-2 bg-red-500/20 px-2 py-0.5 rounded-full border border-red-500/40">
                <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span class="font-bold text-red-300 uppercase tracking-wider text-[10px]">LIVE REC</span>
              </div>
              <span class="font-bold text-[#F8D78B] truncate max-w-[200px] sm:max-w-xs">{{ currentRoomTitle }}</span>
              <span class="text-white/40 hidden sm:inline">|</span>
              <span class="text-white/60 font-mono hidden md:inline">ID: {{ currentRoomId }}</span>
              <span class="text-[#35D9B0] font-mono hidden md:inline">Passcode: {{ currentPasscode }}</span>
            </div>

            <!-- Right Info & Host Controls -->
            <div class="flex items-center gap-2.5">
              <!-- Shareable Link Modal Button -->
              <button
                type="button"
                class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#F8D78B] to-[#EAE2D4] hover:from-white hover:to-white text-[#171844] font-extrabold text-[11px] flex items-center gap-1.5 transition-all shadow cursor-pointer"
                @click="showShareModal = true"
              >
                <span>🔗</span>
                <span>Share Meeting Link</span>
              </button>

              <!-- Copy Quick Invite Button -->
              <button
                type="button"
                class="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-white/90 flex items-center gap-1 transition-colors cursor-pointer"
                @click="copyMeetingInvite"
              >
                <span>{{ inviteCopied ? '✓ Copied!' : '📋 Copy Invite' }}</span>
              </button>

              <!-- Duration Counter -->
              <span class="font-mono text-xs px-2.5 py-1 rounded bg-black/40 text-white/80 border border-white/10">
                {{ formattedDuration }}
              </span>

              <!-- Host Room Lock Badge -->
              <div v-if="isHost" class="flex items-center gap-1.5">
                <button
                  type="button"
                  :class="['px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1', isMeetingLocked ? 'bg-red-500/30 text-red-300 border border-red-500/50' : 'bg-[#35D9B0]/20 text-[#35D9B0] border border-[#35D9B0]/40']"
                  :title="isMeetingLocked ? 'Click to Unlock Meeting' : 'Click to Lock Meeting'"
                  @click="lockMeeting(!isMeetingLocked)"
                >
                  <span>{{ isMeetingLocked ? '🔒 Locked' : '🔓 Open' }}</span>
                </button>
              </div>

              <!-- Encryption Pill -->
              <span class="hidden sm:inline-flex px-2 py-0.5 rounded bg-[#35D9B0]/20 text-[#35D9B0] text-[10px] font-bold">
                256-Bit Encrypted
              </span>
            </div>
          </div>

          <!-- Main Zoom Stage (Video Stage + Gallery Grid + Interactive Sidebar) -->
          <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            <!-- Left Stage & Video Grid (8 cols) -->
            <div class="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between relative bg-gradient-to-b from-[#12142E] to-[#0A0D1F] space-y-4">
              <!-- Primary Screen Share or Stage Speaker -->
              <div class="relative w-full h-[320px] sm:h-[400px] rounded-2xl bg-[#0F1126] border border-white/10 overflow-hidden flex items-center justify-center shadow-inner">
                <!-- Case A: Current User is Screen Sharing -->
                <div v-if="isScreenSharing && screenStream" class="w-full h-full relative">
                  <video
                    :ref="(el) => bindVideoElement(el, screenStream)"
                    autoplay
                    playsinline
                    muted
                    class="w-full h-full object-contain bg-black"
                  ></video>
                  <div class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#35D9B0] text-[#171844] font-bold text-xs shadow-md flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#171844] animate-ping"></span>
                    <span>You are presenting your screen</span>
                  </div>
                </div>

                <!-- Case B: A Remote Participant is Screen Sharing -->
                <div v-else-if="sharingPeer && sharingPeer.stream" class="w-full h-full relative">
                  <video
                    :ref="(el) => bindVideoElement(el, sharingPeer.stream)"
                    autoplay
                    playsinline
                    class="w-full h-full object-contain bg-black"
                  ></video>
                  <div class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#F8D78B] text-[#171844] font-bold text-xs shadow-md">
                    <span>{{ sharingPeer.name }} is presenting</span>
                  </div>
                </div>

                <!-- Case C: Active Stage View (When No Screen Share) -->
                <div v-else class="w-full h-full flex items-center justify-center relative p-6">
                  <!-- If There are Remote Participants: Show the first participant or active speaker on stage -->
                  <div v-if="participants.length > 0" class="w-full h-full relative rounded-xl overflow-hidden bg-[#171844] flex items-center justify-center">
                    <video
                      v-show="participants[0]?.isVideoOn && participants[0]?.stream"
                      :ref="(el) => bindVideoElement(el, participants[0]?.stream)"
                      autoplay
                      playsinline
                      class="w-full h-full object-cover"
                    ></video>

                    <div v-if="!participants[0]?.isVideoOn || !participants[0]?.stream" class="text-center space-y-3">
                      <div class="w-24 h-24 rounded-full bg-[#242658] border-2 border-[#F8D78B] text-[#F8D78B] flex items-center justify-center text-3xl font-extrabold mx-auto shadow-xl">
                        {{ getInitial(participants[0]?.name, 'P') }}
                      </div>
                      <div>
                        <h4 class="text-lg font-bold text-white">{{ participants[0]?.name || 'Participant' }}</h4>
                        <span class="text-xs text-[#F8D78B]">{{ participants[0]?.role || 'Student' }}</span>
                      </div>
                    </div>

                    <!-- Stage Participant Tag -->
                    <div class="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-medium text-white flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full" :class="participants[0]?.isMuted ? 'bg-red-400' : 'bg-[#35D9B0]'"></span>
                      <span>{{ participants[0]?.name || 'Participant' }} ({{ participants[0]?.isMuted ? 'Muted' : 'Speaking' }})</span>
                    </div>
                  </div>

                  <!-- If Alone in Meeting: Elegant Waiting Prompt -->
                  <div v-else class="text-center space-y-4 max-w-md">
                    <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#171844] to-[#242658] border-2 border-[#F8D78B] p-1 flex items-center justify-center mx-auto shadow-xl">
                      <img
                        :src="student.avatar"
                        alt="You"
                        class="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-white">{{ student.name }}</h4>
                      <p class="text-xs text-[#F8D78B] mt-0.5">{{ isHost ? 'Cohort Host & Lead Practitioner' : 'Student Practitioner' }}</p>
                      <p class="text-xs text-[#EAE2D4]/70 mt-3 leading-relaxed">
                        You have entered the live room. Share the Room ID <span class="font-mono text-[#F8D78B] font-bold">{{ currentRoomId }}</span> and Passcode <span class="font-mono text-[#F8D78B] font-bold">{{ joinPasscode || '8088' }}</span> with peers or open this portal in another browser window to test live multi-user streaming!
                      </p>
                    </div>
                    <button
                      type="button"
                      class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                      @click="copyMeetingInvite"
                    >
                      <span>{{ inviteCopied ? '✓ Copied Invitation!' : '📋 Copy Invitation Details' }}</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Participant Video Gallery Carousel / Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <!-- User's Local Camera Tile -->
                <div class="h-24 sm:h-28 rounded-2xl bg-[#171844] border-2 border-[#F8D78B]/50 relative overflow-hidden flex items-center justify-center shadow-md">
                  <video
                    v-show="isVideoOn && localStream"
                    :ref="(el) => bindVideoElement(el, localStream)"
                    autoplay
                    playsinline
                    muted
                    class="w-full h-full object-cover"
                  ></video>

                  <div v-if="!isVideoOn || !localStream" class="text-center">
                    <div class="w-10 h-10 rounded-full bg-[#242658] text-[#F8D78B] flex items-center justify-center font-bold text-sm mx-auto">
                      {{ getInitial(student?.name, 'U') }}
                    </div>
                    <span class="text-[9px] text-white/50 block mt-1">Camera Off</span>
                  </div>

                  <!-- Tag: You -->
                  <div class="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between px-2 py-0.5 rounded bg-black/60 text-[10px] text-white">
                    <span class="truncate font-semibold max-w-[70px]">You {{ isHost ? '(Host)' : '' }}</span>
                    <span :class="isMuted ? 'text-red-400' : 'text-[#35D9B0]'">
                      {{ isMuted ? '🔇' : '🎤' }}
                    </span>
                  </div>

                  <!-- Hand Raised Emoji Badge -->
                  <span v-if="handRaised" class="absolute top-1.5 right-1.5 text-base">✋</span>
                </div>

                <!-- Remote Connected Participants Tiles -->
                <div
                  v-for="peer in participants"
                  :key="peer.socketId"
                  class="h-24 sm:h-28 rounded-2xl bg-[#1D1E4F] border border-white/20 relative overflow-hidden flex items-center justify-center shadow-md"
                >
                  <video
                    v-show="peer.isVideoOn && peer.stream"
                    :ref="(el) => bindVideoElement(el, peer.stream)"
                    autoplay
                    playsinline
                    class="w-full h-full object-cover"
                  ></video>

                  <div v-if="!peer.isVideoOn || !peer.stream" class="text-center">
                    <div class="w-10 h-10 rounded-full bg-[#242658] text-[#F8D78B] flex items-center justify-center font-bold text-sm mx-auto">
                      {{ getInitial(peer?.name, 'P') }}
                    </div>
                    <span class="text-[9px] text-white/50 block mt-1">Camera Off</span>
                  </div>

                  <!-- Tag: Remote Peer -->
                  <div class="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between px-2 py-0.5 rounded bg-black/60 text-[10px] text-white">
                    <span class="truncate font-semibold max-w-[70px]">{{ peer?.name || 'Participant' }}</span>
                    <span :class="peer.isMuted ? 'text-red-400' : 'text-[#35D9B0]'">
                      {{ peer.isMuted ? '🔇' : '🎤' }}
                    </span>
                  </div>

                  <span v-if="peer.handRaised" class="absolute top-1.5 right-1.5 text-base">✋</span>
                </div>
              </div>
            </div>

            <!-- Right Interactive Sidebar: Chat & Participants (4 cols) -->
            <div class="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0E1126] flex flex-col justify-between h-[540px]">
              <!-- Tab Header -->
              <div class="flex items-center border-b border-white/10 text-xs font-bold">
                <button
                  type="button"
                  :class="['flex-1 py-3 text-center transition-colors cursor-pointer', zoomSidebarTab === 'chat' ? 'text-[#F8D78B] border-b-2 border-[#F8D78B] bg-white/5' : 'text-white/60 hover:text-white']"
                  @click="zoomSidebarTab = 'chat'"
                >
                  Meeting Chat ({{ chatMessages.length }})
                </button>
                <button
                  type="button"
                  :class="['flex-1 py-3 text-center transition-colors cursor-pointer', zoomSidebarTab === 'participants' ? 'text-[#F8D78B] border-b-2 border-[#F8D78B] bg-white/5' : 'text-white/60 hover:text-white']"
                  @click="zoomSidebarTab = 'participants'"
                >
                  Participants ({{ participants.length + 1 }})
                </button>
              </div>

              <!-- VIEW 1: Live Chat -->
              <div v-if="zoomSidebarTab === 'chat'" class="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
                <div v-if="chatMessages.length === 0" class="text-center py-12 text-white/40 space-y-2">
                  <span class="text-2xl block">💬</span>
                  <p>In-Meeting Chat is active.</p>
                  <p class="text-[11px] text-white/30">Send a greeting to all connected participants below!</p>
                </div>

                <div
                  v-for="msg in chatMessages"
                  :key="msg.id"
                  :class="['space-y-1', msg.isSelf ? 'text-right' : 'text-left']"
                >
                  <div class="flex items-center gap-1.5" :class="msg.isSelf ? 'justify-end' : 'justify-start'">
                    <span class="font-bold text-[#F8D78B]">{{ msg.sender }}</span>
                    <span class="text-[10px] text-white/40">{{ msg.time }}</span>
                  </div>
                  <div
                    :class="[
                      'inline-block p-2.5 rounded-2xl max-w-[85%] text-left break-words',
                      msg.isSelf ? 'bg-[#242658] border border-[#F8D78B]/30 text-white' : 'bg-white/10 border border-white/5 text-white/90'
                    ]"
                  >
                    {{ msg.text }}
                  </div>
                </div>
              </div>

              <!-- VIEW 2: Participants List -->
              <div v-else class="flex-1 overflow-y-auto p-4 space-y-2.5 text-xs">
                <!-- Host Actions if you are Host -->
                <div v-if="isHost" class="p-3 rounded-xl bg-[#F8D78B]/10 border border-[#F8D78B]/30 mb-3 space-y-2">
                  <span class="text-[11px] font-bold text-[#F8D78B] uppercase tracking-wider block">Host Moderation Actions</span>
                  <div class="flex items-center gap-2">
                    <button
                      type="button"
                      class="flex-1 py-1.5 px-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 font-bold text-[10px] uppercase border border-red-500/40 transition-colors cursor-pointer"
                      @click="muteAllParticipants"
                    >
                      🔇 Mute All
                    </button>
                    <button
                      type="button"
                      class="flex-1 py-1.5 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] uppercase border border-white/20 transition-colors cursor-pointer"
                      @click="lockMeeting(!isMeetingLocked)"
                    >
                      {{ isMeetingLocked ? '🔓 Unlock' : '🔒 Lock Room' }}
                    </button>
                  </div>
                </div>

                <!-- Self Item -->
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-full bg-[#F8D78B] text-[#171844] flex items-center justify-center font-bold text-xs">
                      {{ getInitial(student?.name, 'U') }}
                    </div>
                    <div>
                      <div class="font-bold text-white">{{ student?.name || 'Student' }} (You)</div>
                      <span class="text-[10px] text-[#F8D78B]">{{ isHost ? 'Host' : 'Student' }}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span v-if="handRaised">✋</span>
                    <span>{{ isMuted ? '🔇' : '🎤' }}</span>
                    <span>{{ isVideoOn ? '📹' : '🚫' }}</span>
                  </div>
                </div>

                <!-- Remote Peers Items -->
                <div
                  v-for="peer in participants"
                  :key="peer.socketId"
                  class="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                >
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-full bg-[#242658] text-[#F8D78B] flex items-center justify-center font-bold text-xs">
                      {{ getInitial(peer?.name, 'P') }}
                    </div>
                    <div>
                      <div class="font-bold text-white">{{ peer?.name || 'Participant' }}</div>
                      <span class="text-[10px] text-white/50">{{ peer?.role || 'Student' }}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <span v-if="peer.handRaised">✋</span>
                    <span>{{ peer.isMuted ? '🔇' : '🎤' }}</span>
                    <span>{{ peer.isVideoOn ? '📹' : '🚫' }}</span>
                  </div>
                </div>
              </div>

              <!-- Chat Input Bar -->
              <div v-if="zoomSidebarTab === 'chat'" class="p-3 border-t border-white/10 bg-black/30">
                <form class="flex items-center gap-2" @submit.prevent="handleSendMeetingChat">
                  <input
                    v-model="meetingChatInput"
                    type="text"
                    placeholder="Type message to room..."
                    class="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-[#F8D78B]"
                  />
                  <button
                    type="submit"
                    class="px-4 py-2.5 rounded-xl bg-[#F8D78B] hover:bg-white text-[#171844] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!-- Bottom Authentic Zoom Control Bar -->
          <div class="px-6 py-4 bg-[#171844] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <!-- Left Controls: Mic & Camera Toggles -->
            <div class="flex items-center gap-3">
              <!-- Mute / Unmute Button -->
              <button
                type="button"
                :class="[
                  'px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm',
                  isMuted ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'bg-white/10 hover:bg-white/20 text-white'
                ]"
                @click="toggleAudio"
              >
                <svg v-if="!isMuted" class="w-4 h-4 text-[#35D9B0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                <svg v-else class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <span>{{ isMuted ? 'Unmute' : 'Mute' }}</span>
              </button>

              <!-- Video Camera Toggle Button -->
              <button
                type="button"
                :class="[
                  'px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm',
                  !isVideoOn ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'bg-white/10 hover:bg-white/20 text-white'
                ]"
                @click="toggleVideo"
              >
                <svg class="w-4 h-4" :class="isVideoOn ? 'text-[#35D9B0]' : 'text-red-400'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{{ isVideoOn ? 'Stop Video' : 'Start Video' }}</span>
              </button>
            </div>

            <!-- Center Controls: Screen Sharing & Hand Raise -->
            <div class="flex items-center gap-2.5">
              <button
                type="button"
                :class="[
                  'px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm',
                  isScreenSharing ? 'bg-[#35D9B0] text-[#171844] font-bold' : 'bg-white/10 hover:bg-white/20 text-white'
                ]"
                @click="toggleScreenShare"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{{ isScreenSharing ? 'Stop Screen Share' : 'Share Screen' }}</span>
              </button>

              <button
                type="button"
                :class="[
                  'px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm',
                  handRaised ? 'bg-[#F8D78B] text-[#171844] font-bold' : 'bg-white/10 hover:bg-white/20 text-white'
                ]"
                @click="toggleHandRaise"
              >
                <span>✋</span>
                <span>{{ handRaised ? 'Hand Raised' : 'Raise Hand' }}</span>
              </button>
            </div>

            <!-- Right Controls: Leave & End Meeting -->
            <div class="flex items-center gap-2">
              <button
                v-if="isHost"
                type="button"
                class="px-4 py-2 rounded-xl bg-red-700/80 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                title="End meeting for everyone"
                @click="handleEndMeetingForAll"
              >
                End Meeting for All
              </button>

              <button
                type="button"
                class="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                @click="handleLeaveMeeting"
              >
                Leave Meeting
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= TAB 3: VIDEO LECTURE VAULT ================= -->
      <div v-if="activeTab === 'lectures'" class="space-y-8 animate-fadeIn">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Main Selected Video Player -->
          <div class="lg:col-span-8 space-y-6">
            <div class="bg-white border border-[#EAE2D4] rounded-3xl p-6 shadow-sm space-y-4">
              <!-- Video Player Screen -->
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-[#171844] to-[#242658] relative overflow-hidden flex items-center justify-center border border-[#171844]">
                <!-- Video Screen Content -->
                <div class="text-center space-y-3 px-6">
                  <div class="w-16 h-16 rounded-full bg-[#F8D78B] text-[#171844] flex items-center justify-center mx-auto shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <svg class="w-7 h-7 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">Selected Lecture</span>
                    <h3 class="text-lg sm:text-xl font-bold text-white mt-1">{{ currentLecture.title }}</h3>
                    <p class="text-xs text-[#EAE2D4]/70 mt-0.5 font-mono">Duration: {{ currentLecture.duration }}</p>
                  </div>
                </div>

                <!-- Player Bottom Control Strip -->
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-xs text-white">
                  <div class="flex items-center gap-3">
                    <span class="font-mono text-[11px]">04:15 / {{ currentLecture.duration }}</span>
                    <span class="px-2 py-0.5 rounded bg-white/20 text-[10px] font-bold">1080p HD</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <button
                      type="button"
                      class="px-2.5 py-1 rounded bg-[#F8D78B] text-[#171844] font-bold text-[10px] uppercase cursor-pointer"
                      @click="markLectureCompleted(currentLecture.id)"
                    >
                      ✓ {{ currentLecture.completed ? 'Completed' : 'Mark as Done' }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- Lecture Description & Resources -->
              <div class="space-y-3 pt-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold uppercase tracking-wider text-[#8C6D57]">Module: {{ currentLecture.module }}</span>
                  <span class="text-xs font-semibold text-[#35D9B0]">Official Curriculum</span>
                </div>
                <h2 class="text-2xl font-bold text-[#171844]">{{ currentLecture.title }}</h2>
                <p class="text-sm text-[#352D47] leading-relaxed">{{ currentLecture.description }}</p>

                <!-- Downloadable Notes -->
                <div class="pt-4 border-t border-[#EAE2D4] flex flex-wrap gap-3">
                  <a
                    href="#download"
                    class="px-4 py-2 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-xs font-bold text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors flex items-center gap-2"
                  >
                    <span>📄 Download Lecture PDF Summary</span>
                  </a>
                  <a
                    href="#audio"
                    class="px-4 py-2 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-xs font-bold text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors flex items-center gap-2"
                  >
                    <span>🎧 Audio Companion (MP3)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Video Playlist List (All Recorded Lectures) -->
          <div class="lg:col-span-4 bg-white border border-[#EAE2D4] rounded-3xl p-6 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-[#EAE2D4]">
              <h3 class="text-base font-bold text-[#171844]">Curriculum Playlist</h3>
              <span class="text-xs font-mono text-[#8C6D57]">{{ lecturesList.length }} Lessons</span>
            </div>

            <div class="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
              <div
                v-for="lec in lecturesList"
                :key="lec.id"
                :class="[
                  'p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3',
                  currentLecture.id === lec.id
                    ? 'bg-[#171844] text-white border-[#171844]'
                    : 'bg-[#FAFAFA] text-[#171844] border-[#EAE2D4]/70 hover:border-[#171844]'
                ]"
                @click="currentLecture = lec"
              >
                <div class="flex items-center gap-3">
                  <span
                    :class="[
                      'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0',
                      lec.completed ? 'bg-[#35D9B0] text-[#171844]' : 'bg-[#EAE2D4] text-[#171844]'
                    ]"
                  >
                    {{ lec.completed ? '✓' : lec.index }}
                  </span>
                  <div>
                    <div class="text-xs font-bold leading-tight" :class="currentLecture.id === lec.id ? 'text-white' : 'text-[#171844]'">
                      {{ lec.title }}
                    </div>
                    <div class="text-[10px]" :class="currentLecture.id === lec.id ? 'text-[#F8D78B]' : 'text-[#8C6D57]'">
                      {{ lec.duration }} • {{ lec.module }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= TAB 4: REAL TODO APP ================= -->
      <div v-if="activeTab === 'todo'" class="space-y-8 animate-fadeIn max-w-4xl mx-auto">
        <!-- Todo Header Card -->
        <div class="bg-white border border-[#EAE2D4] rounded-3xl p-8 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE2D4]">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30 mb-2">
                Student Task Manager
              </div>
              <h2 class="text-2xl font-bold text-[#171844]">Personal Mastery Todo List</h2>
              <p class="text-xs sm:text-sm text-[#352D47] mt-0.5">
                Add, manage, and check off your assignments, daily reflections, and study goals. Saved automatically!
              </p>
            </div>
            <div class="text-left sm:text-right">
              <div class="text-2xl font-extrabold text-[#171844]">{{ completedTasksCount }} / {{ todos.length }}</div>
              <div class="text-xs text-[#35D9B0] font-semibold">Tasks Completed</div>
            </div>
          </div>

          <!-- Add Task Form -->
          <form class="space-y-3" @submit.prevent="addTodo">
            <div class="flex flex-col sm:flex-row gap-3">
              <input
                v-model="newTaskTitle"
                type="text"
                required
                placeholder="What task would you like to achieve today?"
                class="flex-1 px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-sm text-[#171844] focus:outline-none focus:border-[#171844]"
              />
              <div class="flex gap-2">
                <select
                  v-model="newTaskCategory"
                  class="px-3 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-xs font-bold text-[#171844] focus:outline-none"
                >
                  <option value="Reflection">Reflection</option>
                  <option value="Reading">Reading</option>
                  <option value="Meditation">Meditation</option>
                  <option value="Coursework">Coursework</option>
                </select>

                <select
                  v-model="newTaskPriority"
                  class="px-3 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-xs font-bold text-[#171844] focus:outline-none"
                >
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium</option>
                  <option value="Normal">Normal</option>
                </select>

                <button
                  type="submit"
                  class="px-6 py-3 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                >
                  + Add Task
                </button>
              </div>
            </div>
          </form>

          <!-- Filters -->
          <div class="flex items-center justify-between pt-2 border-t border-[#EAE2D4]/70 text-xs">
            <div class="flex items-center gap-2">
              <button
                type="button"
                :class="['px-3 py-1.5 rounded-lg font-bold transition-colors', todoFilter === 'all' ? 'bg-[#171844] text-white' : 'text-[#8C6D57] hover:text-[#171844]']"
                @click="todoFilter = 'all'"
              >
                All ({{ todos.length }})
              </button>
              <button
                type="button"
                :class="['px-3 py-1.5 rounded-lg font-bold transition-colors', todoFilter === 'active' ? 'bg-[#171844] text-white' : 'text-[#8C6D57] hover:text-[#171844]']"
                @click="todoFilter = 'active'"
              >
                Pending ({{ pendingTasksCount }})
              </button>
              <button
                type="button"
                :class="['px-3 py-1.5 rounded-lg font-bold transition-colors', todoFilter === 'completed' ? 'bg-[#171844] text-white' : 'text-[#8C6D57] hover:text-[#171844]']"
                @click="todoFilter = 'completed'"
              >
                Done ({{ completedTasksCount }})
              </button>
            </div>

            <button
              v-if="completedTasksCount > 0"
              type="button"
              class="text-[#8C6D57] hover:text-red-600 underline font-medium"
              @click="clearCompletedTodos"
            >
              Clear Completed
            </button>
          </div>

          <!-- Todo Items List -->
          <div class="space-y-2.5 pt-2">
            <div
              v-for="task in filteredTodos"
              :key="task.id"
              class="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EAE2D4] flex items-center justify-between gap-4 transition-all hover:border-[#171844]/50"
            >
              <div class="flex items-center gap-3.5 flex-1 min-w-0">
                <input
                  type="checkbox"
                  :checked="task.completed"
                  class="w-5 h-5 rounded accent-[#171844] cursor-pointer"
                  @change="toggleTodo(task.id)"
                />
                <div class="flex-1 min-w-0">
                  <div
                    class="text-sm font-semibold text-[#171844] truncate"
                    :class="{ 'line-through text-gray-400': task.completed }"
                  >
                    {{ task.title }}
                  </div>
                  <div class="flex items-center gap-2 mt-0.5 text-[11px] text-[#8C6D57]">
                    <span class="px-2 py-0.2 rounded-full bg-[#EAE2D4]/70 text-[#171844] font-medium">{{ task.category }}</span>
                    <span>•</span>
                    <span :class="task.priority === 'High' ? 'text-red-500 font-bold' : 'text-[#8C6D57] font-medium'">
                      {{ task.priority }}
                    </span>
                    <span>•</span>
                    <span>Created: {{ task.createdAt }}</span>
                  </div>
                </div>
              </div>

              <!-- Delete Task Button -->
              <button
                type="button"
                class="p-2 rounded-lg text-[#8C6D57] hover:text-red-600 hover:bg-red-50 transition-colors"
                title="Delete task"
                @click="deleteTodo(task.id)"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            <div v-if="filteredTodos.length === 0" class="text-center py-10 text-xs text-[#8C6D57]">
              No tasks in this view. Keep your mind clear and focused!
            </div>
          </div>
        </div>
      </div>
    </UiContainer>

    <!-- SHAREABLE MEETING INVITATION MODAL -->
    <Teleport to="body">
      <div
        v-if="showShareModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      >
        <div class="bg-[#171844] border-2 border-[#F8D78B]/50 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl relative space-y-6">
          <!-- Close Button -->
          <button
            type="button"
            class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
            @click="showShareModal = false"
          >
            ✕
          </button>

          <div class="space-y-1">
            <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#35D9B0]/20 text-[#35D9B0] text-[11px] font-bold uppercase tracking-wider">
              <span class="w-2 h-2 rounded-full bg-[#35D9B0] animate-pulse"></span>
              <span>Share Live Masterclass</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-[#F8D78B]">{{ currentRoomTitle }}</h3>
            <p class="text-xs text-[#EAE2D4]/70">
              Anyone with this shareable link can enter directly with the pre-filled Room ID and Passcode.
            </p>
          </div>

          <!-- Share Link Box with 1-Click Copy -->
          <div class="space-y-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-[#F8D78B]">
              Direct Shareable Join Link
            </label>
            <div class="flex items-center gap-2">
              <input
                type="text"
                readonly
                :value="shareableMeetingUrl"
                class="flex-1 px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/20 text-[#35D9B0] font-mono text-xs focus:outline-none"
              />
              <button
                type="button"
                class="px-4 py-2.5 rounded-xl bg-[#F8D78B] hover:bg-white text-[#171844] font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-md"
                @click="copyDirectMeetingLink"
              >
                {{ linkCopied ? '✓ Copied!' : 'Copy Link' }}
              </button>
            </div>
          </div>

          <!-- Room ID & Passcode Badges with Copy Buttons -->
          <div class="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/10">
            <div class="space-y-1">
              <span class="text-[10px] text-white/50 uppercase tracking-wider block">Meeting Room ID</span>
              <div class="flex items-center justify-between">
                <span class="font-mono text-sm font-bold text-white">{{ currentRoomId }}</span>
                <button
                  type="button"
                  class="text-[11px] text-[#F8D78B] hover:underline cursor-pointer"
                  @click="copyToClipboard(currentRoomId, 'Room ID copied!')"
                >
                  Copy
                </button>
              </div>
            </div>
            <div class="space-y-1 border-l border-white/10 pl-3">
              <span class="text-[10px] text-white/50 uppercase tracking-wider block">Security Passcode</span>
              <div class="flex items-center justify-between">
                <span class="font-mono text-sm font-bold text-[#35D9B0]">{{ currentPasscode }}</span>
                <button
                  type="button"
                  class="text-[11px] text-[#F8D78B] hover:underline cursor-pointer"
                  @click="copyToClipboard(currentPasscode, 'Passcode copied!')"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Share Buttons: WhatsApp & Email -->
          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-white/70 block">
              Instant Share Channels
            </span>
            <div class="grid grid-cols-2 gap-3">
              <a
                :href="whatsappShareUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="py-2.5 px-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>💬</span>
                <span>Share via WhatsApp</span>
              </a>

              <a
                :href="emailShareUrl"
                class="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>✉️</span>
                <span>Share via Email</span>
              </a>
            </div>
          </div>

          <div class="pt-2 flex items-center justify-between">
            <span class="text-xs text-[#35D9B0] font-mono">{{ copyNotification }}</span>
            <button
              type="button"
              class="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
              @click="showShareModal = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

const { currentUser, logout } = useAuth()

// Fallback student if not logged in
const defaultStudent = {
  id: 'np-student-808',
  name: 'Arjun Sharma',
  email: 'arjun.sharma@example.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  role: 'Presence Circle Member',
  enrolledCourse: 'The Art of Conscious Mastery',
  overallProgress: 68,
  streakDays: 14,
  sessionsAttended: 8
}

const student = computed(() => currentUser.value || defaultStudent)
const studentProgress = ref(68)

const activeTab = ref<'dashboard' | 'live' | 'lectures' | 'todo'>('dashboard')

const handleSignOut = () => {
  logout()
  navigateTo('/login')
}

const getInitial = (name?: string | null, fallback = 'P') => {
  if (!name || typeof name !== 'string') return fallback
  const trimmed = name.trim()
  return trimmed.length > 0 ? trimmed.charAt(0).toUpperCase() : fallback
}

// ---------------- REAL ZOOM WEBRTC SESSION STATE ----------------
const route = useRoute()
const zoom = useZoomMeeting()

const {
  isInMeeting,
  isHost,
  isMeetingLocked,
  isMuted,
  isVideoOn,
  isScreenSharing,
  handRaised,
  localStream,
  screenStream,
  participants,
  chatMessages,
  formattedDuration,
  currentRoomId,
  currentRoomTitle,
  currentPasscode,
  errorMessage,
  toggleAudio,
  toggleVideo,
  toggleScreenShare,
  toggleHandRaise,
  lockMeeting,
  muteAllParticipants,
  endMeetingForAll,
  createMeeting,
  joinMeeting,
  leaveMeeting,
  sendChatMessage,
  bindVideoElement
} = zoom

// Lobby Mode: 'join' or 'create'
const lobbyTab = ref<'join' | 'create'>('join')

// Joining Existing Meeting State
const joinRoomId = ref((route.query.room as string) || 'presence-live-808')
const joinPasscode = ref((route.query.passcode as string) || '8088')
const joinRole = ref<'Student' | 'Host'>('Student')
const showPasscode = ref(false)
const isJoiningMeeting = ref(false)

// Creating New Meeting State
const newMeetingTitle = ref('Conscious Presence Masterclass')
const newMeetingRoomId = ref(`presence-${Math.floor(100 + Math.random() * 900)}`)
const newMeetingPasscode = ref('8088')
const isCreatingMeeting = ref(false)

// Share Modal & Links
const showShareModal = ref(false)
const linkCopied = ref(false)
const inviteCopied = ref(false)
const copyNotification = ref('')
const zoomSidebarTab = ref<'chat' | 'participants'>('chat')
const meetingChatInput = ref('')

const hasInviteFromUrl = computed(() => !!route.query.room)

const generateRandomRoomId = () => {
  newMeetingRoomId.value = `presence-${Math.floor(1000 + Math.random() * 9000)}`
}

const generateRandomPasscode = () => {
  newMeetingPasscode.value = String(Math.floor(1000 + Math.random() * 9000))
}

const shareableMeetingUrl = computed(() => {
  if (typeof window === 'undefined') return ''
  const origin = window.location.origin
  const room = currentRoomId.value || joinRoomId.value || 'presence-live-808'
  const code = currentPasscode.value || joinPasscode.value || '8088'
  return `${origin}/portal?room=${encodeURIComponent(room)}&passcode=${encodeURIComponent(code)}`
})

const whatsappShareUrl = computed(() => {
  const room = currentRoomId.value || joinRoomId.value
  const code = currentPasscode.value || joinPasscode.value || '8088'
  const text = `Join my live masterclass: "${currentRoomTitle.value}"\n\nRoom ID: ${room}\nPasscode: ${code}\nDirect Link: ${shareableMeetingUrl.value}`
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
})

const emailShareUrl = computed(() => {
  const room = currentRoomId.value || joinRoomId.value
  const code = currentPasscode.value || joinPasscode.value || '8088'
  const subject = `Invitation: ${currentRoomTitle.value}`
  const body = `You are invited to join our Live Masterclass: "${currentRoomTitle.value}".\n\nRoom ID: ${room}\nPasscode: ${code}\n\nDirect Join Link: ${shareableMeetingUrl.value}`
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

const copyToClipboard = async (text: string, notification = 'Copied to clipboard!') => {
  if (typeof window === 'undefined') return
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
    } else {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    copyNotification.value = notification
    setTimeout(() => { copyNotification.value = '' }, 2500)
  } catch (e) {
    console.warn('Clipboard write failed:', e)
  }
}

const copyDirectMeetingLink = async () => {
  await copyToClipboard(shareableMeetingUrl.value, 'Direct join link copied!')
  linkCopied.value = true
  setTimeout(() => { linkCopied.value = false }, 2500)
}

// Pre-join Preview State
const preJoinPreviewStream = ref<MediaStream | null>(null)
const isPreJoinCamOn = ref(true)
const isPreJoinMicMuted = ref(false)

const startPreJoinPreview = async () => {
  if (typeof window === 'undefined' || !navigator.mediaDevices) return
  if (preJoinPreviewStream.value) return
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    preJoinPreviewStream.value = stream
  } catch (err) {
    console.warn('[PreJoin Preview Notice]:', err)
  }
}

const stopPreJoinPreview = () => {
  if (preJoinPreviewStream.value) {
    preJoinPreviewStream.value.getTracks().forEach(t => t.stop())
    preJoinPreviewStream.value = null
  }
}

const togglePreJoinCam = () => {
  if (preJoinPreviewStream.value) {
    const tracks = preJoinPreviewStream.value.getVideoTracks()
    if (tracks.length > 0) {
      tracks[0].enabled = !tracks[0].enabled
      isPreJoinCamOn.value = tracks[0].enabled
    }
  } else {
    isPreJoinCamOn.value = !isPreJoinCamOn.value
  }
}

const togglePreJoinMic = () => {
  if (preJoinPreviewStream.value) {
    const tracks = preJoinPreviewStream.value.getAudioTracks()
    if (tracks.length > 0) {
      tracks[0].enabled = !tracks[0].enabled
      isPreJoinMicMuted.value = !tracks[0].enabled
    }
  } else {
    isPreJoinMicMuted.value = !isPreJoinMicMuted.value
  }
}

const handleJoinMeeting = async () => {
  isJoiningMeeting.value = true
  try {
    stopPreJoinPreview()
    await joinMeeting(
      joinRoomId.value.trim() || 'presence-live-808',
      {
        id: student.value.id,
        name: student.value.name,
        avatar: student.value.avatar,
        role: joinRole.value === 'Host' ? 'Mentor (Host)' : student.value.role
      },
      joinPasscode.value.trim() || '8088'
    )
  } catch (err: any) {
    console.error('Error joining meeting:', err)
  } finally {
    isJoiningMeeting.value = false
  }
}

const handleCreateMeeting = async () => {
  isCreatingMeeting.value = true
  try {
    stopPreJoinPreview()
    await createMeeting(
      newMeetingTitle.value.trim() || 'Conscious Presence Masterclass',
      newMeetingPasscode.value.trim() || '8088',
      {
        id: student.value.id,
        name: student.value.name,
        avatar: student.value.avatar,
        role: 'Mentor (Host)'
      },
      newMeetingRoomId.value.trim()
    )
    showShareModal.value = true
  } catch (err: any) {
    console.error('Error creating meeting:', err)
  } finally {
    isCreatingMeeting.value = false
  }
}

const handleLeaveMeeting = () => {
  leaveMeeting()
  activeTab.value = 'dashboard'
}

const handleEndMeetingForAll = () => {
  if (confirm('Are you sure you want to end this live session for all participants?')) {
    endMeetingForAll()
    activeTab.value = 'dashboard'
  }
}

const handleSendMeetingChat = () => {
  if (!meetingChatInput.value.trim()) return
  sendChatMessage(meetingChatInput.value, student.value.name, student.value.avatar)
  meetingChatInput.value = ''
}

const copyMeetingInvite = async () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const code = currentPasscode.value || joinPasscode.value || '8088'
  const inviteText = `Narayan Presence Live Masterclass\nTopic: ${currentRoomTitle.value}\nRoom ID: ${currentRoomId.value}\nPasscode: ${code}\nDirect Join Link: ${origin}/portal?room=${encodeURIComponent(currentRoomId.value)}&passcode=${encodeURIComponent(code)}`
  await copyToClipboard(inviteText, 'Meeting invitation copied!')
  inviteCopied.value = true
  setTimeout(() => { inviteCopied.value = false }, 2500)
}

const sharingPeer = computed(() => participants.value.find(p => p.isSharing))

watch(activeTab, (newTab) => {
  if (newTab === 'live' && !isInMeeting.value) {
    startPreJoinPreview()
  } else if (newTab !== 'live' && preJoinPreviewStream.value) {
    stopPreJoinPreview()
  }
})

// ---------------- VIDEO LECTURE VAULT STATE ----------------
const lecturesList = ref([
  {
    id: 1,
    index: 1,
    title: 'Lesson 1: The Anatomy of Stillness',
    module: 'Module 1: Grounding',
    duration: '24 min',
    completed: true,
    description: 'Understanding internal vs external stimuli and resetting the central nervous system.'
  },
  {
    id: 2,
    index: 2,
    title: 'Lesson 2: Guarding Your Attention Diet',
    module: 'Module 1: Grounding',
    duration: '31 min',
    completed: true,
    description: 'Eliminating unconscious digital dopamine loops and rebuilding deep cognitive endurance.'
  },
  {
    id: 3,
    index: 3,
    title: 'Lesson 3: Emotional Friction as an Asset',
    module: 'Module 2: Resilience',
    duration: '28 min',
    completed: false,
    description: 'Transforming tension, criticism, and uncertainty into unwavering grounded presence.'
  },
  {
    id: 4,
    index: 4,
    title: 'Lesson 4: Quiet Leadership Presence',
    module: 'Module 3: Leadership',
    duration: '38 min',
    completed: false,
    description: 'How to enter rooms, conduct meetings, and lead organizations with authentic depth.'
  }
])

const currentLecture = ref(lecturesList.value[2])

const markLectureCompleted = (id: number) => {
  const lec = lecturesList.value.find(l => l.id === id)
  if (lec) {
    lec.completed = !lec.completed
    // Recalculate progress percentage
    const completedCount = lecturesList.value.filter(l => l.completed).length
    studentProgress.value = Math.round((completedCount / lecturesList.value.length) * 100)
  }
}

// ---------------- REAL TODO APP STATE ----------------
interface TodoItem {
  id: string
  title: string
  category: string
  priority: string
  completed: boolean
  createdAt: string
}

const TODO_STORAGE_KEY = 'narayan_presence_student_todos'

const newTaskTitle = ref('')
const newTaskCategory = ref('Reflection')
const newTaskPriority = ref('High')
const todoFilter = ref<'all' | 'active' | 'completed'>('all')

const todos = ref<TodoItem[]>([
  { id: '1', title: 'Complete 20-minute morning breathwork protocol', category: 'Meditation', priority: 'High', completed: true, createdAt: 'Today' },
  { id: '2', title: 'Review Lesson 3 lecture notes and submit worksheet', category: 'Coursework', priority: 'High', completed: false, createdAt: 'Today' },
  { id: '3', title: 'Read Chapter 4 of "The Grounded Mind"', category: 'Reading', priority: 'Medium', completed: false, createdAt: 'Yesterday' },
  { id: '4', title: 'Evening reflection journal: 3 moments of conscious choice', category: 'Reflection', priority: 'Normal', completed: false, createdAt: 'Today' }
])

onMounted(() => {
  if (typeof window !== 'undefined') {
    // 1. Restore Todo items
    const saved = localStorage.getItem(TODO_STORAGE_KEY)
    if (saved) {
      try {
        todos.value = JSON.parse(saved)
      } catch {
        // use default
      }
    }

    // 2. Handle direct invitation query params (e.g. ?room=xyz&passcode=1234)
    if (route.query.room) {
      activeTab.value = 'live'
      joinRoomId.value = String(route.query.room)
      if (route.query.passcode) {
        joinPasscode.value = String(route.query.passcode)
      }
    }
  }
})

const saveTodos = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos.value))
  }
}

const addTodo = () => {
  if (!newTaskTitle.value.trim()) return
  todos.value.unshift({
    id: Date.now().toString(),
    title: newTaskTitle.value.trim(),
    category: newTaskCategory.value,
    priority: newTaskPriority.value,
    completed: false,
    createdAt: 'Today'
  })
  newTaskTitle.value = ''
  saveTodos()
}

const toggleTodo = (id: string) => {
  const item = todos.value.find(t => t.id === id)
  if (item) {
    item.completed = !item.completed
    saveTodos()
  }
}

const deleteTodo = (id: string) => {
  todos.value = todos.value.filter(t => t.id !== id)
  saveTodos()
}

const clearCompletedTodos = () => {
  todos.value = todos.value.filter(t => !t.completed)
  saveTodos()
}

const pendingTasksCount = computed(() => todos.value.filter(t => !t.completed).length)
const completedTasksCount = computed(() => todos.value.filter(t => t.completed).length)

const filteredTodos = computed(() => {
  if (todoFilter.value === 'active') return todos.value.filter(t => !t.completed)
  if (todoFilter.value === 'completed') return todos.value.filter(t => t.completed)
  return todos.value
})

const dailyRituals = ref([
  { id: 1, title: 'Morning Grounding Protocol', time: '15 mins', tag: 'Presence', completed: true },
  { id: 2, title: 'Attention Diet Review', time: '10 mins', tag: 'Focus', completed: true },
  { id: 3, title: 'Evening Contemplation', time: '20 mins', tag: 'Reflection', completed: false }
])

useSeoMeta({
  title: 'Student Portal — Narayan Presence',
  description: 'Access live Zoom masterclasses, recorded video vault, progress dashboard, and real task manager.'
})
</script>
