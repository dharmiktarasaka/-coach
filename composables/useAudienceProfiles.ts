import type { AudienceProfile } from '~/types'

export const useAudienceProfiles = () => {
  const audiences: AudienceProfile[] = [
    {
      id: 'coaches',
      title: 'Coaches',
      subtitle: 'Turn your coaching into a business, not just a schedule.',
      badge: '1-on-1 & Group Coaches',
      problem: 'You’re stuck in an endless loop of hourly sessions, tracking clients by hand across WhatsApp, watching income swing month to month, and second-guessing what to charge.',
      opportunity: 'Your coaching instinct becomes a premium, outcome-based program — with smooth onboarding, a clear promise, and the right clients coming to you instead of you chasing them.',
      whatWeBuild: [
        'A flagship program built around a specific transformation',
        'A simple, honest consultation that turns interest into enrolment',
        'A client portal and milestone structure that runs between calls',
        'Automated onboarding and feedback so nothing slips'
      ],
      recommendedNextStep: 'Take the free Growth Scorecard to see how solid your offer and client flow really are.',
      ctaText: 'See the system for coaches',
      ctaRoute: '/who-we-help/coaches',
      iconName: 'UserCheck'
    },
    {
      id: 'consultants',
      title: 'Consultants',
      subtitle: 'Turn bespoke advisory into a repeatable, high-leverage business.',
      badge: 'Independent & Boutique Advisors',
      problem: 'Writing lengthy custom proposals that get ghosted, dealing with delivery scope creep, and relying 100% on unpredictable word-of-mouth referrals.',
      opportunity: 'Standardize your advisory into clear transformation sprints and proprietary frameworks that command premium retainers without customized guesswork.',
      whatWeBuild: [
        'Proprietary diagnostic IP and advisory frameworks',
        'Standardized transformation sprint packages',
        'An enterprise qualification and decision-maker pipeline',
        'Milestone reporting and asynchronous client delivery workflows'
      ],
      recommendedNextStep: 'Take the free Growth Scorecard to evaluate your positioning and client pipeline.',
      ctaText: 'See the system for consultants',
      ctaRoute: '/who-we-help/consultants',
      iconName: 'Briefcase'
    },
    {
      id: 'trainers',
      title: 'Trainers',
      subtitle: 'Move beyond one-off corporate training into a recurring expert business.',
      badge: 'Corporate & Technical Trainers',
      problem: 'Trading days for dollars, traveling every weekend for one-off workshops, and seeing zero recurring revenue or continuity once the training ends.',
      opportunity: 'Package your corporate training into ongoing organizational implementation programs, executive tracks, and continuous client retainers.',
      whatWeBuild: [
        'Post-training continuity and implementation models',
        'Hybrid cohort delivery architectures',
        'B2B annual training partnership frameworks',
        'Scalable resource repositories and client progress vaults'
      ],
      recommendedNextStep: 'Calculate your business leverage with the free Growth Scorecard.',
      ctaText: 'See the system for trainers',
      ctaRoute: '/who-we-help/trainers',
      iconName: 'GraduationCap'
    },
    {
      id: 'creators',
      title: 'Creators',
      subtitle: 'Turn your audience and depth into a real, high-value business.',
      badge: 'Audience & Content Creators',
      problem: 'High impressions and follower counts but low income, relying on volatile brand sponsorships or selling cheap ₹999 ebooks.',
      opportunity: 'Build a backend business engine that monetizes your most dedicated followers through premium flagship programs and high-impact advisory.',
      whatWeBuild: [
        'A flagship backend offer aligned with core audience pains',
        'An audience-to-client conversion funnel (newsletters and diagnostics)',
        'Content-to-pipeline strategic distribution workflows',
        'AI-accelerated content research and qualification'
      ],
      recommendedNextStep: 'Assess your audience monetization efficiency via the free Growth Scorecard.',
      ctaText: 'See the system for creators',
      ctaRoute: '/who-we-help/creators',
      iconName: 'Sparkles'
    },
    {
      id: 'professionals',
      title: 'Professionals in Transition',
      subtitle: 'Turn 10–20+ years of corporate experience into a credible practice.',
      badge: 'Senior Executives & Domain Leaders',
      problem: 'Decades of deep industry expertise but zero clarity on how to package that domain authority into commercial offers, digital positioning, or client pipelines.',
      opportunity: 'Build a prestigious executive advisory or high-impact coaching practice while bypassing the trial-and-error mistakes that derail transitioning professionals.',
      whatWeBuild: [
        'Executive-to-Expert commercial transition strategy',
        'C-Suite positioning and thought leadership architecture',
        'High-trust peer outreach and referral networks',
        'Operational systems designed for zero-clutter execution'
      ],
      recommendedNextStep: 'Evaluate your commercial transition readiness in 5 minutes.',
      ctaText: 'See the system for professionals',
      ctaRoute: '/who-we-help/professionals',
      iconName: 'Award'
    },
    {
      id: 'experts',
      title: 'Experts & Authors',
      subtitle: 'Build a serious, durable business around what you know best.',
      badge: 'Specialists & Thought Leaders',
      problem: 'Recognized for deep niche knowledge or published books, but lacking the operational infrastructure, CRM, and structured pipeline required to scale.',
      opportunity: 'Turn intellectual property into an enterprise-grade business engine with multi-tier programs, licensed frameworks, and strategic advisory.',
      whatWeBuild: [
        'IP packaging into signature licensing and advisory suites',
        'Inbound authority distribution engines',
        'Full-stack client onboarding and CRM pipeline',
        'Sustainable team and operational scale'
      ],
      recommendedNextStep: 'Take the comprehensive business growth diagnostic.',
      ctaText: 'See the system for experts',
      ctaRoute: '/who-we-help/experts',
      iconName: 'BookOpen'
    }
  ]

  const getAudience = (id: string) => audiences.find(a => a.id === id)

  return {
    audiences,
    getAudience
  }
}
