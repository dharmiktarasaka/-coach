import { initializeApp, getApps, getApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  type Auth
} from 'firebase/auth'

let authInstance: Auth | null = null

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCgf1LkSrwobzqsGOM3dFqwekxcXQSNw-M',
  authDomain: 'lyoo-7cc38.firebaseapp.com',
  projectId: 'lyoo-7cc38',
  storageBucket: 'lyoo-7cc38.firebasestorage.app',
  messagingSenderId: '354508992918',
  appId: '1:354508992918:web:f6be8b0a4a68568a78adb7',
  measurementId: 'G-94BXQNT24Y'
}

export const getFirebaseConfig = () => {
  let runtimeCfg: any = {}
  if (typeof window !== 'undefined') {
    try {
      const config = useRuntimeConfig()
      if (config?.public?.firebase) {
        runtimeCfg = config.public.firebase
      }
    } catch {}
  }

  let rawApiKey = String(
    runtimeCfg.apiKey ||
    (typeof process !== 'undefined' && process.env?.NUXT_PUBLIC_FIREBASE_API_KEY) ||
    DEFAULT_FIREBASE_CONFIG.apiKey
  ).trim()

  // Auto-correct truncated key if the trailing '-M' was clipped in Vercel
  if (rawApiKey === 'AIzaSyCgf1LkSrwobzqsGOM3dFqwekxcXQSNw' || rawApiKey.length < 39) {
    if (rawApiKey.startsWith('AIzaSyCgf1LkSrwobzqsGOM3dFqwekxcXQSNw')) {
      rawApiKey = DEFAULT_FIREBASE_CONFIG.apiKey
    }
  }

  let rawProjectId = String(
    runtimeCfg.projectId ||
    (typeof process !== 'undefined' && process.env?.NUXT_PUBLIC_FIREBASE_PROJECT_ID) ||
    DEFAULT_FIREBASE_CONFIG.projectId
  ).trim()

  // Auto-correct if numeric project number 354508992918 was pasted instead of project ID lyoo-7cc38
  if (rawProjectId === '354508992918') {
    rawProjectId = DEFAULT_FIREBASE_CONFIG.projectId
  }

  const authDomain = String(
    runtimeCfg.authDomain ||
    (typeof process !== 'undefined' && process.env?.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN) ||
    DEFAULT_FIREBASE_CONFIG.authDomain
  ).trim()

  const storageBucket = String(
    runtimeCfg.storageBucket ||
    (typeof process !== 'undefined' && process.env?.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET) ||
    DEFAULT_FIREBASE_CONFIG.storageBucket
  ).trim()

  const messagingSenderId = String(
    runtimeCfg.messagingSenderId ||
    (typeof process !== 'undefined' && process.env?.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID) ||
    DEFAULT_FIREBASE_CONFIG.messagingSenderId
  ).trim()

  const appId = String(
    runtimeCfg.appId ||
    (typeof process !== 'undefined' && process.env?.NUXT_PUBLIC_FIREBASE_APP_ID) ||
    DEFAULT_FIREBASE_CONFIG.appId
  ).trim()

  const measurementId = String(
    runtimeCfg.measurementId ||
    (typeof process !== 'undefined' && process.env?.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID) ||
    DEFAULT_FIREBASE_CONFIG.measurementId
  ).trim()

  return {
    apiKey: rawApiKey,
    authDomain,
    projectId: rawProjectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  }
}

export const getFirebaseAuth = (): Auth | null => {
  if (typeof window === 'undefined') return null
  if (authInstance) return authInstance

  const firebaseConfig = getFirebaseConfig()
  if (!firebaseConfig.apiKey) {
    console.warn('[Firebase] Missing API key in environment variables.')
    return null
  }

  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
    authInstance = getAuth(app)
    return authInstance
  } catch (err) {
    console.error('[Firebase Init Error]:', err)
    return null
  }
}

// Real Google Sign-In with Firebase Authentication
export const signInWithFirebaseGoogle = async () => {
  const auth = getFirebaseAuth()
  if (!auth) {
    return {
      success: false,
      error: 'Firebase is not configured. Please ensure Firebase environment variables are set.'
    }
  }

  try {
    const provider = new GoogleAuthProvider()
    // Forces Google to show account selection popup so user picks their real account
    provider.setCustomParameters({
      prompt: 'select_account'
    })

    const result = await signInWithPopup(auth, provider)
    const user = result.user

    if (!user || !user.email) {
      return {
        success: false,
        error: 'Unable to retrieve your Google account details.'
      }
    }

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || user.email.split('@')[0],
        photoURL: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email)}&background=171844&color=F8D78B`
      }
    }
  } catch (err: any) {
    console.error('[Firebase Google Auth Error]:', err)
    let errorMessage = 'Google sign-in failed.'

    if (err.code === 'auth/popup-closed-by-user') {
      errorMessage = 'Sign-in cancelled: The Google popup was closed before completing.'
    } else if (err.code === 'auth/cancelled-popup-request') {
      errorMessage = 'Sign-in cancelled.'
    } else if (err.code === 'auth/unauthorized-domain') {
      errorMessage = 'Domain not authorized in Firebase Console. Add this domain under Firebase > Authentication > Settings > Authorized domains.'
    } else if (err.code === 'auth/popup-blocked') {
      errorMessage = 'Popup was blocked by your browser. Please allow popups for this site and try again.'
    } else if (err.message) {
      errorMessage = err.message
    }

    return {
      success: false,
      error: errorMessage
    }
  }
}

// Email/Password sign-in with Firebase
export const signInWithFirebaseEmail = async (email: string, pass: string) => {
  const auth = getFirebaseAuth()
  if (!auth) return { success: false, error: 'Firebase not initialized' }

  try {
    const result = await signInWithEmailAndPassword(auth, email, pass)
    return {
      success: true,
      user: {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL
      }
    }
  } catch (err: any) {
    console.error('[Firebase Email Sign-In Error]:', err.message)
    return {
      success: false,
      error: err.message
    }
  }
}

// Email/Password register with Firebase
export const registerWithFirebaseEmail = async (email: string, pass: string, name?: string) => {
  const auth = getFirebaseAuth()
  if (!auth) return { success: false, error: 'Firebase not initialized' }

  try {
    const result = await createUserWithEmailAndPassword(auth, email, pass)
    if (name && result.user) {
      try {
        await updateProfile(result.user, { displayName: name })
      } catch {}
    }
    return {
      success: true,
      user: {
        uid: result.user.uid,
        email: result.user.email,
        displayName: name || result.user.displayName,
        photoURL: result.user.photoURL
      }
    }
  } catch (err: any) {
    console.error('[Firebase Register Error]:', err.message)
    return {
      success: false,
      error: err.message
    }
  }
}
