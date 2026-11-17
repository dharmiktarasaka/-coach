let authInstance: any = null
let GoogleAuthProviderClass: any = null
let authModule: any = null

export const getFirebaseConfig = () => {
  try {
    const config = useRuntimeConfig()
    if (config?.public?.firebase?.apiKey) {
      return config.public.firebase
    }
  } catch {
    // If called outside Nuxt setup context
  }

  return {
    apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY || '',
    authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID || '',
    measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ''
  }
}

export const initFirebase = async () => {
  if (typeof window === 'undefined') return null
  if (authInstance && authModule) {
    return { auth: authInstance, GoogleAuthProvider: GoogleAuthProviderClass, authModule }
  }

  const firebaseConfig = getFirebaseConfig()
  if (!firebaseConfig.apiKey) {
    console.warn('[Firebase] Missing API key in environment variables.')
    return null
  }

  try {
    const { initializeApp, getApps, getApp } = await import(
      /* @vite-ignore */ 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
    )
    authModule = await import(
      /* @vite-ignore */ 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'
    )

    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
    authInstance = authModule.getAuth(app)
    GoogleAuthProviderClass = authModule.GoogleAuthProvider
    return { auth: authInstance, GoogleAuthProvider: GoogleAuthProviderClass, authModule }
  } catch (err) {
    console.warn('[Firebase] CDN initialization notice:', err)
    return null
  }
}

// Google Sign-In with Firebase
export const signInWithFirebaseGoogle = async () => {
  try {
    const fb = await initFirebase()
    if (fb && fb.authModule) {
      const provider = new fb.GoogleAuthProvider()
      const result = await fb.authModule.signInWithPopup(fb.auth, provider)
      return {
        success: true,
        user: {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
        }
      }
    }
  } catch (err: any) {
    console.error('[Firebase Auth Error]:', err.message)
    return {
      success: false,
      error: err.message || 'Firebase sign-in failed'
    }
  }

  return {
    success: false,
    error: 'Firebase not initialized'
  }
}

// Email/Password sign-in with Firebase
export const signInWithFirebaseEmail = async (email: string, pass: string) => {
  try {
    const fb = await initFirebase()
    if (fb && fb.authModule) {
      const result = await fb.authModule.signInWithEmailAndPassword(fb.auth, email, pass)
      return {
        success: true,
        user: {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
        }
      }
    }
  } catch (err: any) {
    console.error('[Firebase Email Sign-In Error]:', err.message)
    return {
      success: false,
      error: err.message
    }
  }

  return { success: false, error: 'Firebase not initialized' }
}

// Email/Password register with Firebase
export const registerWithFirebaseEmail = async (email: string, pass: string) => {
  try {
    const fb = await initFirebase()
    if (fb && fb.authModule) {
      const result = await fb.authModule.createUserWithEmailAndPassword(fb.auth, email, pass)
      return {
        success: true,
        user: {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
        }
      }
    }
  } catch (err: any) {
    console.error('[Firebase Register Error]:', err.message)
    return {
      success: false,
      error: err.message
    }
  }

  return { success: false, error: 'Firebase not initialized' }
}
