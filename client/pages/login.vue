<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431] flex items-center justify-center px-4">
    <div class="w-full max-w-md space-y-8">
      <!-- Brand Logo & Header -->
      <div class="text-center space-y-3">
        <NuxtLink to="/" class="inline-flex items-center gap-3 group">
          <img src="/logo.png" alt="Narayan Presence" class="h-12 w-auto object-contain mx-auto" />
        </NuxtLink>
        <h1 class="font-display font-extrabold text-2xl sm:text-3xl text-[#171844] tracking-tight">
          Student Portal Login
        </h1>
        <p class="text-xs sm:text-sm text-[#352D47]">
          Access your live sessions, recorded vault, dashboard, and daily tasks.
        </p>
      </div>

      <!-- If already logged in banner -->
      <div v-if="currentUser" class="p-6 bg-white border border-[#EAE2D4] rounded-3xl shadow-sm space-y-4 text-center">
        <div class="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-[#F8D78B]">
          <img :src="currentUser.avatar" :alt="currentUser.name" class="w-full h-full object-cover" />
        </div>
        <div>
          <div class="text-base font-bold text-[#171844]">{{ currentUser.name }}</div>
          <div class="text-xs text-[#8C6D57]">{{ currentUser.email }}</div>
          <div class="text-[11px] font-semibold text-[#35D9B0] mt-1">{{ currentUser.role }}</div>
        </div>
        <div class="pt-2 flex flex-col gap-2">
          <NuxtLink
            to="/portal"
            class="w-full py-3 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm text-center"
          >
            Go to Student Portal &rarr;
          </NuxtLink>
          <button
            type="button"
            class="text-xs text-[#8C6D57] hover:text-[#171844] underline font-medium"
            @click="logout"
          >
            Log Out & Switch Account
          </button>
        </div>
      </div>

      <!-- Main Login & Register Card -->
      <div v-else class="bg-white border border-[#EAE2D4] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <!-- Auth Mode Switcher: Sign In vs Create Account -->
        <div class="grid grid-cols-2 gap-1 p-1 bg-[#FAFAFA] border border-[#EAE2D4] rounded-2xl text-xs font-bold">
          <button
            type="button"
            :class="[
              'py-2.5 rounded-xl transition-all cursor-pointer text-center',
              authMode === 'login' ? 'bg-[#171844] text-[#F8D78B] shadow-sm' : 'text-[#8C6D57] hover:text-[#171844]'
            ]"
            @click="authMode = 'login'; errorMessage = ''"
          >
            Sign In
          </button>
          <button
            type="button"
            :class="[
              'py-2.5 rounded-xl transition-all cursor-pointer text-center',
              authMode === 'register' ? 'bg-[#171844] text-[#F8D78B] shadow-sm' : 'text-[#8C6D57] hover:text-[#171844]'
            ]"
            @click="authMode = 'register'; errorMessage = ''"
          >
            Create Account
          </button>
        </div>

        <!-- Error Alert -->
        <div v-if="errorMessage" class="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
          <span>⚠️</span>
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Google Authentication Button (Firebase Auth) -->
        <div>
          <button
            type="button"
            :disabled="isAuthLoading"
            class="w-full py-3.5 px-4 rounded-xl border border-[#EAE2D4] bg-white hover:bg-[#FAFAFA] text-[#171844] font-semibold text-xs sm:text-sm flex items-center justify-center gap-3 transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
            @click="handleGoogleLogin"
          >
            <!-- Google Multi-Color SVG -->
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
          
          <div class="flex items-center gap-1.5 justify-center mt-2 text-[10px] text-[#8C6D57]">
            <span class="w-1.5 h-1.5 rounded-full bg-[#35D9B0]"></span>
            <span>Secured with Firebase Authentication</span>
          </div>
        </div>

        <!-- Divider -->
        <div class="relative flex items-center justify-center">
          <div class="border-t border-[#EAE2D4] w-full"></div>
          <span class="bg-white px-3 text-[11px] uppercase font-bold text-[#8C6D57] tracking-wider absolute">
            {{ authMode === 'login' ? 'or sign in with credentials' : 'or create separate account' }}
          </span>
        </div>

        <!-- FORM A: SIGN IN -->
        <form v-if="authMode === 'login'" class="space-y-4" @submit.prevent="handleManualLogin">
          <div>
            <label class="block text-xs font-mono text-[#8C6D57] uppercase mb-1.5 font-bold">
              User ID or Student Email *
            </label>
            <input
              v-model="userId"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844] transition-colors"
              placeholder="e.g. your@email.com or student ID"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-mono text-[#8C6D57] uppercase font-bold">
                Password *
              </label>
              <a href="#forgot" class="text-[11px] font-semibold text-[#8C6D57] hover:text-[#171844]">Forgot?</a>
            </div>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844] transition-colors pr-10"
                placeholder="••••••••••••"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C6D57] hover:text-[#171844] cursor-pointer"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-xs text-[#352D47]">
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="rememberMe" type="checkbox" class="rounded accent-[#171844]" />
              <span>Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            :disabled="isAuthLoading"
            class="w-full py-3.5 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <svg v-if="isAuthLoading" class="animate-spin w-4 h-4 text-[#F8D78B]" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <span>{{ isAuthLoading ? 'Signing In...' : 'Enter Student Portal' }}</span>
          </button>
        </form>

        <!-- FORM B: CREATE NEW STUDENT ACCOUNT -->
        <form v-else class="space-y-4" @submit.prevent="handleRegister">
          <div>
            <label class="block text-xs font-mono text-[#8C6D57] uppercase mb-1.5 font-bold">
              Full Name *
            </label>
            <input
              v-model="regName"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844] transition-colors"
              placeholder="e.g. Priya Sharma"
            />
          </div>

          <div>
            <label class="block text-xs font-mono text-[#8C6D57] uppercase mb-1.5 font-bold">
              Student Email *
            </label>
            <input
              v-model="regEmail"
              type="email"
              required
              class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844] transition-colors"
              placeholder="e.g. priya.sharma@example.com"
            />
          </div>

          <div>
            <label class="block text-xs font-mono text-[#8C6D57] uppercase mb-1.5 font-bold">
              Create Password *
            </label>
            <div class="relative">
              <input
                v-model="regPassword"
                :type="showPassword ? 'text' : 'password'"
                required
                minlength="6"
                class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844] transition-colors pr-10"
                placeholder="Minimum 6 characters"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C6D57] hover:text-[#171844] cursor-pointer"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
            <span class="text-[10px] text-[#8C6D57] mt-1 block">Your profile, courses, and tasks will be uniquely saved to your personal account.</span>
          </div>

          <button
            type="submit"
            :disabled="isAuthLoading"
            class="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#171844] to-[#242658] hover:from-[#242658] hover:to-[#171844] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <svg v-if="isAuthLoading" class="animate-spin w-4 h-4 text-[#F8D78B]" viewBox="0 0 24 24" fill="none">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <span>{{ isAuthLoading ? 'Creating Personal Account...' : 'Create Account & Enter Portal &rarr;' }}</span>
          </button>
        </form>

        <!-- Quick 1-Click Demo Credentials -->
        <div v-if="authMode === 'login'" class="pt-2 border-t border-[#EAE2D4]/70">
          <button
            type="button"
            class="w-full py-2.5 rounded-xl bg-[#FAFAFA] border border-dashed border-[#8C6D57]/40 text-[#8C6D57] hover:text-[#171844] hover:border-[#171844] text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            @click="fillDemoCredentials"
          >
            <span>⚡ Use Demo Student Credentials</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const {
  currentUser,
  isAuthLoading,
  loginWithCredentials,
  registerWithCredentials,
  loginWithGoogle,
  logout
} = useAuth()

const authMode = ref<'login' | 'register'>('login')
const errorMessage = ref('')

// Login Form State
const userId = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(true)

// Registration Form State
const regName = ref('')
const regEmail = ref('')
const regPassword = ref('')

const fillDemoCredentials = () => {
  userId.value = 'arjun.sharma@example.com'
  password.value = 'presence2026'
  errorMessage.value = ''
}

const handleManualLogin = async () => {
  if (!userId.value || !password.value) return
  errorMessage.value = ''
  const success = await loginWithCredentials(userId.value, password.value)
  if (success) {
    navigateTo('/portal')
  } else {
    errorMessage.value = 'Invalid student credentials. Please verify your email/ID and password.'
  }
}

const handleRegister = async () => {
  if (!regName.value || !regEmail.value || !regPassword.value) return
  if (regPassword.value.length < 6) {
    errorMessage.value = 'Password must be at least 6 characters long.'
    return
  }
  errorMessage.value = ''
  const result = await registerWithCredentials(regName.value, regEmail.value, regPassword.value)
  if (result.success) {
    navigateTo('/portal')
  } else {
    errorMessage.value = result.message || 'Registration failed. Please try again.'
  }
}

const handleGoogleLogin = async () => {
  errorMessage.value = ''
  const success = await loginWithGoogle()
  if (success) {
    navigateTo('/portal')
  } else {
    errorMessage.value = 'Google sign-in could not be completed.'
  }
}

useSeoMeta({
  title: 'Student Login — Narayan Presence',
  description: 'Log in to your student portal for live sessions, lectures, dashboard and daily tasks.'
})
</script>
