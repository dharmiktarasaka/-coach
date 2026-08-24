export type TargetAudience = 
  | 'coaches'
  | 'consultants'
  | 'trainers'
  | 'creators'
  | 'professionals'
  | 'experts'

export interface AudienceProfile {
  id: TargetAudience
  title: string
  subtitle: string
  badge: string
  problem: string
  opportunity: string
  whatWeBuild: string[]
  recommendedNextStep: string
  ctaText: string
  ctaRoute: string
  iconName: string
}

export interface BusinessLayer {
  number: string
  id: string
  title: string
  question: string
  meaning: string
  whyItMatters: string
  commonMistake: string
  whatBetterLooksLike: string
  metricOrOutput: string
}

export interface ProgramTier {
  id: string
  title: string
  tagline: string
  badge?: string
  forWho: string
  deliverables: string[]
  format: 'diagnostic' | 'accelerator' | 'lab' | 'advisory' | 'dfy' | 'dwy'
  ctaText: string
  ctaRoute: string
}

export interface ScorecardQuestion {
  id: string
  pillar: 'clarity' | 'offer' | 'authority' | 'acquisition' | 'conversion' | 'delivery' | 'systems' | 'ai' | 'scale'
  question: string
  description: string
  options: {
    text: string
    score: number
    hint?: string
  }[]
}

export interface ScorecardResult {
  overallScore: number
  pillarScores: Record<string, number>
  primaryBottleneck: string
  highestPillar: string
  recommendedProgram: string
}

export interface ApplicationFormData {
  fullName: string
  email: string
  whatsapp: string
  location: string
  role: string
  yearsExperience: string
  currentStage: string
  revenueRange: string
  offerPrice: string
  recentPayingClients: string
  leadSource: string
  biggestBottleneck: string
  twelveMonthGoal: string
  whyNow: string
  previousAttempts: string
  implementationReadiness: string
}

export interface WorkshopRegistrationData {
  fullName: string
  email: string
  whatsapp: string
  currentRole: string
  biggestQuestion: string
}

export interface ContactFormData {
  fullName: string
  email: string
  subject: string
  message: string
}
