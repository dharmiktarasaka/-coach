import type { ProgramTier } from '~/types'

export const usePrograms = () => {
  const programs: ProgramTier[] = [
    {
      id: 'diagnostic',
      title: 'Business Growth Scorecard — free',
      tagline: 'Find the one constraint holding your business back.',
      badge: 'Track 1 &middot; Start Here',
      forWho: 'Experts who feel stuck but can’t name exactly why.',
      deliverables: [
        'A clear read across all 9 layers',
        'Your personal growth score and biggest gap',
        'A 30-day, high-impact action list',
        'Direct identification of your primary bottleneck'
      ],
      format: 'diagnostic',
      ctaText: 'Take the free Scorecard',
      ctaRoute: '/scorecard'
    },
    {
      id: 'accelerator',
      title: 'Digital Coach Accelerator',
      tagline: 'Build and launch your complete business system in 12 weeks.',
      badge: 'Track 2 &middot; Build It',
      forWho: 'Solo coaches, consultants, and experts ready to move from random hustle to a real, repeatable business.',
      deliverables: [
        'Your signature offer, positioning, and pricing',
        'A consultation-and-enrolment system that converts',
        'A steady, predictable client pipeline',
        'Asynchronous client delivery systems',
        'Live implementation sprints and reviews'
      ],
      format: 'accelerator',
      ctaText: 'Apply for the Accelerator',
      ctaRoute: '/apply'
    },
    {
      id: 'growth-lab',
      title: 'Digital Coach Growth Lab',
      tagline: 'Sharpen conversion, systems, and team leverage for a business that’s already running.',
      badge: 'Track 3 &middot; Grow It',
      forWho: 'Established coaches and small firms with steady clients who want to remove founder dependency.',
      deliverables: [
        'Funnel and conversion optimisation',
        'AI integrated into operations and client care',
        'Retention and higher-value client journeys',
        'Weekly sprint accountability and metrics'
      ],
      format: 'lab',
      ctaText: 'Explore the Growth Lab',
      ctaRoute: '/apply'
    },
    {
      id: 'private-advisory',
      title: 'Private Advisory',
      tagline: 'One-on-one strategic counsel for high-volume experts and institutions.',
      badge: 'Track 4 &middot; Bespoke',
      forWho: 'Top domain leaders, published authors, and enterprise consultancies who need custom architecture.',
      deliverables: [
        'Custom IP and licensing strategy',
        'Direct 1-on-1 advisory sessions',
        'Private access for real-time counsel',
        'Enterprise-grade governance & architecture'
      ],
      format: 'advisory',
      ctaText: 'Request an advisory briefing',
      ctaRoute: '/apply'
    },
    {
      id: 'done-for-you',
      title: 'Done-For-You Systems',
      tagline: 'Our team builds and configures your core assets for you.',
      badge: 'Track 5 &middot; Done For You',
      forWho: 'Busy experts who’d rather have specialists build the tech, funnels, and CRM.',
      deliverables: [
        'Full CRM, booking, and payment setup',
        'Custom onboarding portal and workflows',
        'High-converting pages and application funnels',
        'Custom AI prompts and workflow automation'
      ],
      format: 'dfy',
      ctaText: 'Ask about Done-For-You',
      ctaRoute: '/apply'
    },
    {
      id: 'done-with-you',
      title: 'Done-With-You Partnership',
      tagline: 'Hands-on sprints guiding your team through the build.',
      badge: 'Track 6 &middot; Done With You',
      forWho: 'Experts with a team who need structure, reviews, and expert oversight.',
      deliverables: [
        'Step-by-step sprint playbooks and templates',
        'Line-by-line review of offers, copy, and scripts',
        'Live build sprints with our architects',
        'Continuous bottleneck triage and optimization'
      ],
      format: 'dwy',
      ctaText: 'Ask about Done-With-You',
      ctaRoute: '/apply'
    }
  ]

  return {
    programs
  }
}
