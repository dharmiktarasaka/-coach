import type { ScorecardQuestion, ScorecardResult } from '~/types'

export const useScorecard = () => {
  const questions: ScorecardQuestion[] = [
    {
      id: 'clarity',
      pillar: 'clarity',
      question: 'How clearly defined is your target market and unique business proposition?',
      description: 'Evaluating how easily a stranger understands exactly who you help and what problem you solve.',
      options: [
        { text: 'Broad/general: I can help almost anyone improve their life or business.', score: 20, hint: 'High risk of commoditization' },
        { text: 'Moderate: I have a general niche but frequently take on unrelated clients.', score: 50, hint: 'Dilutes authority' },
        { text: 'Focused: Clear niche, but still refining our signature market narrative.', score: 75, hint: 'Good foundation' },
        { text: 'Crystal Clear: Category-of-one positioning with an undeniable value proposition.', score: 100, hint: 'World-class positioning' }
      ]
    },
    {
      id: 'offer',
      pillar: 'offer',
      question: 'How is your primary service or program packaged and priced?',
      description: 'Assessing your offer structure, pricing leverage, and outcome specificity.',
      options: [
        { text: 'Hourly or unstructured: Charging per session or vague monthly retainer.', score: 20, hint: 'Trades time directly for money' },
        { text: 'Fixed package, but custom-scoped for every individual prospect.', score: 45, hint: 'High administrative friction' },
        { text: 'Standardized program with defined milestones and fixed pricing tiers.', score: 80, hint: 'Scalable structure' },
        { text: 'Flagship proprietary transformation with premium pricing and high margins.', score: 100, hint: 'Optimal unit economics' }
      ]
    },
    {
      id: 'authority',
      pillar: 'authority',
      question: 'What level of verifiable proof and intellectual property supports your brand?',
      description: 'Measuring proprietary frameworks, published assets, and pre-sales trust.',
      options: [
        { text: 'Minimal: Relying solely on verbal claims and personal charisma.', score: 15, hint: 'Prolonged sales cycles' },
        { text: 'Informal: A few casual testimonials and some social media posts.', score: 45, hint: 'Low defensibility' },
        { text: 'Documented: Structured client outcomes and recognizable proprietary frameworks.', score: 75, hint: 'Strong credibility' },
        { text: 'Institutional: Published IP, detailed diagnostics, and undeniable authority assets.', score: 100, hint: 'Pre-sold trust' }
      ]
    },
    {
      id: 'acquisition',
      pillar: 'acquisition',
      question: 'How predictable is your pipeline of qualified inbound conversations?',
      description: 'Testing whether you have a systematic acquisition engine or rely on sporadic referrals.',
      options: [
        { text: 'Sporadic: 100% reliant on random referrals or unpredictable word-of-mouth.', score: 15, hint: 'Feast-and-famine vulnerability' },
        { text: 'Inconsistent: Daily social posting with unpredictable inquiries.', score: 40, hint: 'Algorithm fatigue' },
        { text: 'Emerging: Multi-channel pipeline generating consistent monthly inquiries.', score: 75, hint: 'Predictable baseline' },
        { text: 'Engineered: Multi-source systematic pipeline producing qualified applications on demand.', score: 100, hint: 'Enterprise-grade pipeline' }
      ]
    },
    {
      id: 'conversion',
      pillar: 'conversion',
      question: 'How do you conduct client enrollment and sales consultations?',
      description: 'Evaluating your consultative diagnostic sales process and close rate.',
      options: [
        { text: 'Unstructured: Free coaching calls or long debates that end in "let me think about it".', score: 20, hint: 'Low conversion efficiency' },
        { text: 'Standard script: Using generic high-pressure sales formulas.', score: 45, hint: 'Resistance & friction' },
        { text: 'Consultative triage: Structured qualification followed by a diagnostic strategy session.', score: 80, hint: 'High trust & close rate' },
        { text: 'Diagnostic enrollment system: In-depth pre-call qualification with 35%+ close rate.', score: 100, hint: 'Elite conversion' }
      ]
    },
    {
      id: 'delivery',
      pillar: 'delivery',
      question: 'How leveraged and repeatable is your client delivery process?',
      description: 'Checking whether client results require 100% unscalable founder labor.',
      options: [
        { text: '100% Founder dependent: Every single client requires bespoke 1-on-1 calls.', score: 20, hint: 'Hard growth ceiling' },
        { text: 'Partially structured: Shared documents and recordings, but heavy manual touch.', score: 50, hint: 'Operational strain' },
        { text: 'Hybrid delivery: Asynchronous curriculum combined with high-impact group/1-on-1 check-ins.', score: 80, hint: 'High client success & leverage' },
        { text: 'Systematized ecosystem: Milestone-driven client portal, community, and automated tracking.', score: 100, hint: 'Limitless delivery scale' }
      ]
    },
    {
      id: 'systems',
      pillar: 'systems',
      question: 'How centralized are your business operations, CRM, and SOPs?',
      description: 'Evaluating whether the business can function without constant micro-management.',
      options: [
        { text: 'Scattered: WhatsApp chats, loose spreadsheets, and manual invoices.', score: 15, hint: 'Extreme founder fatigue' },
        { text: 'Basic tools: Disconnected software with lots of manual data entry.', score: 45, hint: 'Leaky pipeline' },
        { text: 'Integrated CRM: Automated lead routing, calendar booking, and payment processing.', score: 80, hint: 'Organized operations' },
        { text: 'Fully codified OS: Documented SOPs, dashboard analytics, and autonomous workflows.', score: 100, hint: 'True asset value' }
      ]
    },
    {
      id: 'ai',
      pillar: 'ai',
      question: 'Where is AI deployed to create operational leverage in your business?',
      description: 'Assessing your integration of intelligent workflows and knowledge retrieval.',
      options: [
        { text: 'None: Manual execution of all research, writing, and administrative tasks.', score: 15, hint: 'High opportunity cost' },
        { text: 'Ad-hoc: Occasionally generating casual social posts using public chatbots.', score: 40, hint: 'Unstructured utility' },
        { text: 'Systematic: Custom prompt libraries for content research, SOPs, and client triage.', score: 75, hint: 'Substantial time savings' },
        { text: 'Strategic leverage: Embedded AI intelligence across diagnosis, delivery synthesis, and operations.', score: 100, hint: '10x productivity multiplier' }
      ]
    }
  ]

  const calculateResults = (answers: Record<string, number>): ScorecardResult => {
    const pillarKeys = Object.keys(answers)
    const pillarScores: Record<string, number> = {}
    let totalScore = 0

    pillarKeys.forEach((key) => {
      pillarScores[key] = answers[key] || 0
      totalScore += answers[key] || 0
    })

    const overallScore = Math.round(totalScore / (pillarKeys.length || 1))

    // Find lowest score
    let lowestKey = pillarKeys[0] || 'acquisition'
    let lowestScore = 100
    let highestKey = pillarKeys[0] || 'clarity'
    let highestScore = 0

    pillarKeys.forEach((k) => {
      const s = answers[k] || 0
      if (s < lowestScore) {
        lowestScore = s
        lowestKey = k
      }
      if (s > highestScore) {
        highestScore = s
        highestKey = k
      }
    })

    const bottleneckMap: Record<string, string> = {
      clarity: 'Unclear Positioning & Market Differentiation',
      offer: 'Unstructured or Underpriced Offer Architecture',
      authority: 'Lack of Codified Intellectual Property & Proof Assets',
      acquisition: 'Unpredictable Client Pipeline & Lead Generation',
      conversion: 'Sub-optimal Diagnostic Enrollment Process',
      delivery: 'Unscalable Founder-Dependent Delivery Bottleneck',
      systems: 'Fragmented Tools & Absence of Business Systems',
      ai: 'Under-utilized AI Operational Leverage'
    }

    let recommendedProgram = 'Digital Coach Accelerator'
    if (overallScore < 50) {
      recommendedProgram = 'Digital Coach Accelerator'
    } else if (overallScore < 75) {
      recommendedProgram = 'Digital Coach Growth Lab'
    } else {
      recommendedProgram = 'Private Advisory'
    }

    return {
      overallScore,
      pillarScores,
      primaryBottleneck: bottleneckMap[lowestKey] || 'Pipeline Predictability',
      highestPillar: bottleneckMap[highestKey] || 'Domain Expertise',
      recommendedProgram
    }
  }

  return {
    questions,
    calculateResults
  }
}
