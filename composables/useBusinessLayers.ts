import type { BusinessLayer } from '~/types'

export const useBusinessLayers = () => {
  const layers: BusinessLayer[] = [
    {
      number: '01',
      id: 'positioning',
      title: 'Positioning',
      question: 'Who should know you, and for what?',
      meaning: 'A clear, credible stance that makes you the obvious choice — and separates you from the sea of "I help people grow" generalists.',
      whyItMatters: 'Without sharp positioning, you compete on price, attract people who aren’t serious, and exhaust yourself trying to be everything to everyone.',
      commonMistake: 'Broad slogans like "I help people reach their full potential" — which sound nice and mean nothing to a specific buyer.',
      whatBetterLooksLike: 'A clear "I’m the person for this specific problem, for these specific people" that pre-qualifies the right clients and instantly earns respect.',
      metricOrOutput: 'Clear Market Category & Positioning Stance'
    },
    {
      number: '02',
      id: 'offer',
      title: 'Offer',
      question: 'What exact transformation are you selling?',
      meaning: 'Packaging what you know into one flagship program with a clear promise, structured milestones, and dependable outcomes.',
      whyItMatters: 'Clients don’t buy hours or information; they invest in structured certainty and a verifiable pathway from their current problem to their desired result.',
      commonMistake: 'Charging by the hour, selling open-ended consulting, or building a custom proposal from scratch every time.',
      whatBetterLooksLike: 'One signature program with a clear promise, delivered the same reliable way every single time.',
      metricOrOutput: 'Flagship Transformation Program & Pricing Architecture'
    },
    {
      number: '03',
      id: 'authority',
      title: 'Authority',
      question: 'Why should people trust you over anyone else?',
      meaning: 'CODIFIED frameworks, essays, and diagnostic tools that demonstrate your depth and earn trust before a sales conversation begins.',
      whyItMatters: 'High-value clients and serious decision-makers do deep research before they ever get on a call with you.',
      commonMistake: 'Relying on vanity social metrics, motivational quotes, or rented credibility rather than real methodology.',
      whatBetterLooksLike: 'Published frameworks, deep tactical essays, and diagnostic tools that pre-sell your competence.',
      metricOrOutput: 'Proof Frameworks & Intellectual Property Assets'
    },
    {
      number: '04',
      id: 'acquisition',
      title: 'Acquisition',
      question: 'How do the right people find you?',
      meaning: 'Building an inbound pipeline and diagnostic tools that consistently attract serious decision-makers without relying on random referrals.',
      whyItMatters: 'Without steady client acquisition, your income is unpredictable and your business is in a perpetual state of hustle.',
      commonMistake: 'Posting random content on social media every day and hoping an algorithm sends you paying clients.',
      whatBetterLooksLike: 'A steady client pipeline — a scorecard and targeted content that attract serious buyers while you sleep.',
      metricOrOutput: 'Predictable Inbound Client Pipeline'
    },
    {
      number: '05',
      id: 'conversion',
      title: 'Conversion',
      question: 'How do conversations turn into clients?',
      meaning: 'A simple, consultative conversation that qualifies fit, diagnoses real bottlenecks, and converts naturally without pressure.',
      whyItMatters: 'Aggressive sales tactics damage your reputation and attract misaligned clients who demand refunds or create friction.',
      commonMistake: 'Treating sales calls like awkward auditions or giving away all your best advice for free on unpaid calls.',
      whatBetterLooksLike: 'A simple, honest consultation that qualifies mutual fit and converts qualified prospects consistently.',
      metricOrOutput: 'Consultative Diagnostic Enrollment System'
    },
    {
      number: '06',
      id: 'delivery',
      title: 'Delivery',
      question: 'How do you get results without burning out?',
      meaning: 'Setting up client portals, milestone roadmaps, and structured check-ins so client transformation doesn’t require 50 hours of founder hand-holding.',
      whyItMatters: 'If delivering client results requires your physical presence for every single minute, your revenue is strictly capped by your calendar.',
      commonMistake: 'Re-inventing onboarding, worksheets, and resources from scratch for every new client.',
      whatBetterLooksLike: 'A client portal and milestone structure that runs smoothly between calls, keeping clients engaged.',
      metricOrOutput: 'Asynchronous Delivery Architecture & Portals'
    },
    {
      number: '07',
      id: 'systems',
      title: 'Systems',
      question: 'How does the business run day to day?',
      meaning: 'Centralizing your CRM, invoicing, calendar booking, and onboarding so the day-to-day runs on systems, not on your nerves.',
      whyItMatters: 'A practice that cannot operate smoothly when you take a week off is an exhausting self-employed job, not a business.',
      commonMistake: 'Tracking client notes in random notebooks, sending invoices manually over WhatsApp, and losing leads across email threads.',
      whatBetterLooksLike: 'One connected system — your pipeline, delivery, and follow-ups run in one place smoothly.',
      metricOrOutput: 'Centralized Business Infrastructure & Automated SOPs'
    },
    {
      number: '08',
      id: 'ai',
      title: 'AI Leverage',
      question: 'Where can AI do the heavy lifting?',
      meaning: 'Deploying AI behind the scenes to synthesize client intake, draft briefs, automate admin, and multiply your output without lowering your standards.',
      whyItMatters: 'AI acts as a quiet multiplier on proven systems, giving solo practitioners the operating leverage of a small team.',
      commonMistake: 'Using AI as a novelty chatbot to write generic, robot-sounding social posts that repel high-value clients.',
      whatBetterLooksLike: 'Custom intelligence prompts that synthesize call notes, prep strategy calls, and write SOPs automatically.',
      metricOrOutput: 'AI-Enabled Operating Workflows & Prompt Libraries'
    },
    {
      number: '09',
      id: 'scale',
      title: 'Scale',
      question: 'How does it grow without depending on you?',
      meaning: 'Expanding your reach and revenue through higher-tier programs, team support, and licensing so you grow without grinding harder.',
      whyItMatters: 'True scalability protects your profit margins, gives you real freedom, and builds genuine equity value in your business.',
      commonMistake: 'Adding random complexity before your flagship offer and client acquisition are proven and stabilized.',
      whatBetterLooksLike: 'A durable expert enterprise with high-margin programs, institutional licensing, and lasting value.',
      metricOrOutput: 'Multi-Tier Program Ecosystem & Lasting Asset Value'
    }
  ]

  return {
    layers
  }
}
