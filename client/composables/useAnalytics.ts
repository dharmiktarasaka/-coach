export type AnalyticsEvent =
  | 'page_view'
  | 'hero_cta_click'
  | 'scorecard_cta_click'
  | 'scorecard_started'
  | 'scorecard_completed'
  | 'workshop_cta_click'
  | 'workshop_started'
  | 'workshop_registered'
  | 'application_started'
  | 'application_submitted'
  | 'contact_submitted'
  | 'outbound_click'
  | 'layer_inspected'
  | 'audience_tab_switched'

export const useAnalytics = () => {
  const track = (event: AnalyticsEvent, payload?: Record<string, any>) => {
    if (import.meta.client) {
      // Dispatch structured browser event for tag managers (GTM, Meta Pixel, Segment)
      window.dispatchEvent(
        new CustomEvent('dc_analytics_event', {
          detail: {
            event,
            timestamp: new Date().toISOString(),
            payload: payload || {},
            url: window.location.pathname
          }
        })
      )

      // Optional console debugging in dev mode
      if (process.env.NODE_ENV === 'development') {
        console.info(`[Analytics Tracked]: ${event}`, payload || {})
      }
    }
  }

  return {
    track
  }
}
