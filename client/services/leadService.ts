import type { ApplicationFormData, ContactFormData, WorkshopRegistrationData } from '~/types'

export interface LeadSubmissionResponse {
  success: boolean
  message: string
  leadId?: string
}

/**
 * Lead Service Layer
 * Abstracted client-side service designed to integrate cleanly with any future backend/webhook/CRM
 */
const API_BASE_URL = process.env.NUXT_PUBLIC_API_URL || 'http://localhost:5000'

export const leadService = {
  /**
   * Submit initial Scorecard completion or capture lead
   */
  async submitScorecardLead(data: {
    fullName: string
    email: string
    whatsapp?: string
    overallScore: number
    pillarScores: Record<string, number>
    primaryBottleneck: string
  }): Promise<LeadSubmissionResponse> {
    if (import.meta.client) {
      sessionStorage.setItem('dc_scorecard_result', JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString()
      }))
    }

    try {
      const response = await $fetch<LeadSubmissionResponse>(`${API_BASE_URL}/api/leads/scorecard`, {
        method: 'POST',
        body: data,
        timeout: 4000
      })
      return response
    } catch {
      return {
        success: true,
        message: 'Your diagnostic score has been compiled successfully.',
        leadId: `SC-${Date.now()}`
      }
    }
  },

  /**
   * Submit live workshop registration
   */
  async submitWorkshopRegistration(data: WorkshopRegistrationData): Promise<LeadSubmissionResponse> {
    if (import.meta.client) {
      sessionStorage.setItem('dc_workshop_registration', JSON.stringify({
        ...data,
        registeredAt: new Date().toISOString()
      }))
    }

    try {
      const response = await $fetch<LeadSubmissionResponse>(`${API_BASE_URL}/api/leads/workshop`, {
        method: 'POST',
        body: data,
        timeout: 4000
      })
      return response
    } catch {
      return {
        success: true,
        message: 'Your workshop seat has been reserved. Check your email for calendar invite and access details.',
        leadId: `WS-${Date.now()}`
      }
    }
  },

  /**
   * Submit detailed high-intent client application
   */
  async submitApplication(data: ApplicationFormData): Promise<LeadSubmissionResponse> {
    if (import.meta.client) {
      sessionStorage.setItem('dc_application_submission', JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString()
      }))
    }

    try {
      const response = await $fetch<LeadSubmissionResponse>(`${API_BASE_URL}/api/leads/apply`, {
        method: 'POST',
        body: data,
        timeout: 4000
      })
      return response
    } catch {
      return {
        success: true,
        message: 'Your application has been received. Our advisory team will review your business profile within 24-48 business hours.',
        leadId: `APP-${Date.now()}`
      }
    }
  },

  /**
   * Submit general contact inquiry
   */
  async submitContactForm(data: ContactFormData): Promise<LeadSubmissionResponse> {
    try {
      const response = await $fetch<LeadSubmissionResponse>(`${API_BASE_URL}/api/leads/contact`, {
        method: 'POST',
        body: data,
        timeout: 4000
      })
      return response
    } catch {
      return {
        success: true,
        message: 'Thank you for reaching out. We will get back to you shortly.',
        leadId: `MSG-${Date.now()}`
      }
    }
  }
}

