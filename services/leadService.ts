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
    // In production without live API, simulate robust async validation
    await new Promise((resolve) => setTimeout(resolve, 800))
    
    // Save to local session storage for continuity across user visit
    if (import.meta.client) {
      sessionStorage.setItem('dc_scorecard_result', JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString()
      }))
    }

    return {
      success: true,
      message: 'Your diagnostic score has been compiled successfully.',
      leadId: `SC-${Date.now()}`
    }
  },

  /**
   * Submit live workshop registration
   */
  async submitWorkshopRegistration(data: WorkshopRegistrationData): Promise<LeadSubmissionResponse> {
    await new Promise((resolve) => setTimeout(resolve, 900))
    
    if (import.meta.client) {
      sessionStorage.setItem('dc_workshop_registration', JSON.stringify({
        ...data,
        registeredAt: new Date().toISOString()
      }))
    }

    return {
      success: true,
      message: 'Your workshop seat has been reserved. Check your email for calendar invite and access details.',
      leadId: `WS-${Date.now()}`
    }
  },

  /**
   * Submit detailed high-intent client application
   */
  async submitApplication(data: ApplicationFormData): Promise<LeadSubmissionResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    
    if (import.meta.client) {
      sessionStorage.setItem('dc_application_submission', JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString()
      }))
    }

    return {
      success: true,
      message: 'Your application has been received. Our advisory team will review your business profile within 24-48 business hours.',
      leadId: `APP-${Date.now()}`
    }
  },

  /**
   * Submit general contact inquiry
   */
  async submitContactForm(data: ContactFormData): Promise<LeadSubmissionResponse> {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return {
      success: true,
      message: 'Thank you for reaching out. We will get back to you shortly.',
      leadId: `MSG-${Date.now()}`
    }
  }
}
