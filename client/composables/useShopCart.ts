import { ref, computed, onMounted } from 'vue'

export interface ShopProduct {
  id: string
  level: string
  title: string
  subtitle: string
  category: 'free' | 'entry' | 'workshop' | 'course' | 'private' | 'premium' | 'membership'
  categoryLabel: string
  price: number
  originalPrice: number
  discountPercent: number
  priceDisplay: string
  originalPriceDisplay: string
  isBestseller?: boolean
  isAssured?: boolean
  rating: number
  ratingCount: number
  reviewCount: number
  images: string[]
  format: string
  duration?: string
  accessType: string
  shortDescription: string
  longDescription: string
  highlights: string[]
  specifications: Record<string, string>
  reviews: {
    id: string
    author: string
    avatar: string
    rating: number
    date: string
    title: string
    comment: string
    verified: boolean
  }[]
}

export interface CartItem {
  product: ShopProduct
  quantity: number
}

// 12 Products matching the exact User Matrix
export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'np-prod-1',
    level: 'Free',
    title: 'Awareness Resources',
    subtitle: 'Foundation of Conscious Awakening & Presence',
    category: 'free',
    categoryLabel: 'Free Resource',
    price: 0,
    originalPrice: 499,
    discountPercent: 100,
    priceDisplay: 'FREE',
    originalPriceDisplay: '₹499',
    isBestseller: true,
    isAssured: true,
    rating: 4.9,
    ratingCount: 3840,
    reviewCount: 920,
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=80'
    ],
    format: 'Digital Guide + Audio Meditation + Printable Journal',
    accessType: 'Instant Lifetime Access',
    shortDescription: 'Essential starter pack of daily awareness practices, breathwork routines, and morning stillness meditations.',
    longDescription: 'The Awareness Resources vault is curated by Narayan Presence to ground you in daily mindfulness. It includes foundational mindfulness audios, grounding exercises, and printable awareness tracking prompts designed for immediate life clarity.',
    highlights: [
      '3 Guided Audio Meditations (10m, 15m, 25m)',
      'Printable 30-Day Awareness Daily Journal (PDF)',
      'Morning Grounding Ritual Blueprint',
      'Instant Download & Mobile Optimized'
    ],
    specifications: {
      'Level': 'Free Starter',
      'Format': 'Audio MP3 & PDF Guidebook',
      'Language': 'English & Hindi Subtitles',
      'Access': 'Lifetime Cloud Access'
    },
    reviews: [
      {
        id: 'r1',
        author: 'Aarav Mehta',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 days ago',
        title: 'Life-changing introduction to stillness',
        comment: 'The morning grounding audio brought so much peace to my otherwise hectic mornings. Amazing that this is offered free!',
        verified: true
      },
      {
        id: 'r2',
        author: 'Dr. Radhika Sen',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        title: 'Pure clarity and authentic guidance',
        comment: 'High production quality and genuinely practical tools. Highly recommended to everyone starting their journey.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-2',
    level: 'Entry',
    title: 'Digital Workbook',
    subtitle: 'Self-Inquiry & Conscious Mind Mapping',
    category: 'entry',
    categoryLabel: 'Digital Book',
    price: 299,
    originalPrice: 599,
    discountPercent: 50,
    priceDisplay: '₹299',
    originalPriceDisplay: '₹599',
    isBestseller: true,
    isAssured: true,
    rating: 4.8,
    ratingCount: 2150,
    reviewCount: 480,
    images: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&auto=format&fit=crop&q=80'
    ],
    format: 'Fillable Interactive PDF + Notion Template',
    accessType: 'Direct Download + Notion Workspace Duplicate',
    shortDescription: '120-page comprehensive workbook structured for systematic thought untangling, shadow awareness, and purpose blueprinting.',
    longDescription: 'The Digital Workbook provides a structured, step-by-step psychological and spiritual roadmap. Featuring introspective prompts, daily habit scorecards, and cognitive decluttering worksheets for continuous inner growth.',
    highlights: [
      '120+ Interactive Prompts & Fillable Exercises',
      'Notion Life Dashboard Operating Template',
      'Weekly Reflection & Shadow Work Milestones',
      'Universal Compatibility (GoodNotes, Notability, Tablets)'
    ],
    specifications: {
      'Level': 'Entry Level',
      'Format': 'Interactive PDF & Notion OS',
      'Pages': '120 Fillable Pages',
      'Delivery': 'Instant Email & Portal Delivery'
    },
    reviews: [
      {
        id: 'r3',
        author: 'Sneha Kapur',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 weeks ago',
        title: 'Deeply thoughtful exercises',
        comment: 'Filled this on my iPad using GoodNotes. The clarity it provided during a chaotic career transition was invaluable.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-3',
    level: 'Entry',
    title: '21-Day Conscious Living',
    subtitle: 'Step-by-Step Daily Transformation Challenge',
    category: 'entry',
    categoryLabel: '21-Day Program',
    price: 699,
    originalPrice: 1499,
    discountPercent: 53,
    priceDisplay: '₹699',
    originalPriceDisplay: '₹1,499',
    isBestseller: true,
    isAssured: true,
    rating: 4.9,
    ratingCount: 3120,
    reviewCount: 760,
    images: [
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800&auto=format&fit=crop&q=80'
    ],
    format: '21 Daily Video Lessons + Habit Tracker + Community Access',
    duration: '21 Days (15 mins/day)',
    accessType: 'Full Portal Access + Lifetime Replays',
    shortDescription: '21 days of bite-sized conscious living practices to dissolve reactivity, master emotional balance, and anchor daily peace.',
    longDescription: 'A guided journey designed to wire conscious awareness into your neurological baseline. Each day releases a concise 15-minute video, an actionable micro-exercise, and evening reflection.',
    highlights: [
      '21 Bite-Sized Guided Video Modules',
      'Daily WhatsApp Encouragement & Accountability',
      'Certificate of Completion from Narayan Presence',
      'Habit Tracking Scorecard & Resource Library'
    ],
    specifications: {
      'Level': 'Entry Transformation',
      'Duration': '21 Days',
      'Format': 'Video Lessons & Daily Tasks',
      'Access': 'Lifetime Access + Student Community'
    },
    reviews: [
      {
        id: 'r4',
        author: 'Vikram Joshi',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '5 days ago',
        title: 'Only 15 mins a day, completely altered my stress',
        comment: 'I was skeptical at first, but day 7 completely shifted how I react to corporate stress. Worth every single rupee!',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-4',
    level: 'Workshop',
    title: 'Live Practical Workshop',
    subtitle: 'Interactive 3-Hour Immersion with Master Coach',
    category: 'workshop',
    categoryLabel: 'Live Event',
    price: 299,
    originalPrice: 799,
    discountPercent: 63,
    priceDisplay: '₹299',
    originalPriceDisplay: '₹799',
    isBestseller: false,
    isAssured: true,
    rating: 4.8,
    ratingCount: 1640,
    reviewCount: 310,
    images: [
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'
    ],
    format: 'Live Zoom Interactive Session + Q&A + HD Recording',
    duration: '3 Hours Intensive',
    accessType: 'Live Attendance + HD Replay in Vault',
    shortDescription: 'High-energy live workshop tackling real-time mental friction, decision paralysis, and nervous system recalibration.',
    longDescription: 'Join our upcoming live intensive cohort for live guided exercises, hot-seat coaching, interactive breath calibrations, and real-time Q&A with master coaches.',
    highlights: [
      '3-Hour Live Interactive Masterclass',
      'Direct Hot-Seat Question & Answer Session',
      'Full HD Recording Added to Your Student Vault',
      'Downloadable Workshop Slide Deck & Frameworks'
    ],
    specifications: {
      'Level': 'Practical Workshop',
      'Platform': 'Live Zoom + Recording Vault',
      'Batch Size': 'Limited to 100 Students',
      'Bonus': 'Live Q&A Hot Seat'
    },
    reviews: [
      {
        id: 'r5',
        author: 'Ananya Verma',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        title: 'The hot-seat coaching blew me away',
        comment: 'Seeing practical coaching applied live gave me breakthroughs on blocks I had been struggling with for years.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-5',
    level: 'Short course',
    title: 'N-A-R-A-Y-A-N Practice',
    subtitle: 'The Proprietary 7-Pillar Presence Methodology',
    category: 'course',
    categoryLabel: 'Short Course',
    price: 799,
    originalPrice: 1999,
    discountPercent: 60,
    priceDisplay: '₹799',
    originalPriceDisplay: '₹1,999',
    isBestseller: true,
    isAssured: true,
    rating: 4.9,
    ratingCount: 2890,
    reviewCount: 650,
    images: [
      'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=80'
    ],
    format: '7 Core Video Modules + Audio Transmissions + Guided Drills',
    duration: '2 Weeks Self-Paced',
    accessType: 'Lifetime Portal Access',
    shortDescription: 'Master the trademark 7-step N-A-R-A-Y-A-N protocol: Notice, Accept, Release, Align, Yield, Awaken, Nurture.',
    longDescription: 'The definitive course on the signature N-A-R-A-Y-A-N framework. Designed to be practiced anywhere in 3 minutes to return from anxiety to unshakeable centered presence.',
    highlights: [
      '7 Master Modules Explaining Every Letter & Drill',
      '3-Minute Emergency Presence Reset Audio',
      'Downloadable Framework Cards for Wallet/Phone',
      'Official Certificate in Conscious Grounding'
    ],
    specifications: {
      'Level': 'Short Course',
      'Modules': '7 Deep-Dive Lessons',
      'Format': 'Video, Audio & PDF Cards',
      'Accreditation': 'Narayan Presence Verified'
    },
    reviews: [
      {
        id: 'r6',
        author: 'Rohan Sharma',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 weeks ago',
        title: 'The 3-minute reset is now my daily superpower',
        comment: 'Whenever meetings get tense, I run the N-A-R-A-Y-A-N drill. My colleagues have noticed how calm I stay under pressure.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-6',
    level: 'Core',
    title: '4-Week Specialized Course',
    subtitle: 'Conscious Mastery & Emotional Equilibrium',
    category: 'course',
    categoryLabel: 'Core Course',
    price: 3499,
    originalPrice: 6999,
    discountPercent: 50,
    priceDisplay: '₹3,499',
    originalPriceDisplay: '₹6,999',
    isBestseller: true,
    isAssured: true,
    rating: 4.9,
    ratingCount: 1980,
    reviewCount: 420,
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80'
    ],
    format: '4 Comprehensive Modules + Weekly Live Group Office Hours',
    duration: '4 Weeks',
    accessType: 'Full Student Portal + Community Circles',
    shortDescription: 'In-depth 4-week structured curriculum breaking deep subconscious conditioning and building enduring personal leadership.',
    longDescription: 'Our flagship 4-week syllabus walks you through neurological rewiring, boundary establishment, emotional sovereignty, and purpose-driven execution. Includes weekly mentor office hours.',
    highlights: [
      '24 High-Definition Structured Video Modules',
      '4 Weekly Live Interactive Mentorship Sessions',
      'Private Student Circle Discussion Access',
      'Detailed Course Workbook & Action Blueprints'
    ],
    specifications: {
      'Level': 'Core Curriculum',
      'Duration': '4 Weeks Structured',
      'Sessions': '4 Live Office Hours + 24 Modules',
      'Certificate': 'Professional Mastery Certificate'
    },
    reviews: [
      {
        id: 'r7',
        author: 'Pooja Nair',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 weeks ago',
        title: 'Deep, scientific and intensely practical',
        comment: 'Combines modern neuroscience with deep Eastern contemplative practices. Transformed how I lead my team.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-7',
    level: 'Flagship',
    title: '6-Week Clear Mind',
    subtitle: 'Freedom from Overthinking & Cognitive Fatigue',
    category: 'course',
    categoryLabel: 'Flagship Program',
    price: 6999,
    originalPrice: 12999,
    discountPercent: 46,
    priceDisplay: '₹6,999',
    originalPriceDisplay: '₹12,999',
    isBestseller: true,
    isAssured: true,
    rating: 5.0,
    ratingCount: 1420,
    reviewCount: 380,
    images: [
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&auto=format&fit=crop&q=80'
    ],
    format: '6 Intensive Modules + Weekly Live Masterminds + Dedicated Mentor',
    duration: '6 Weeks Intensive',
    accessType: 'Lifetime Curriculum Access + 1 Year Community',
    shortDescription: 'The gold-standard flagship program for chronic overthinkers, high-performance executives, and overwhelmed professionals.',
    longDescription: 'Clear Mind is our most celebrated transformation framework. It permanently cures decision paralysis, quietens the relentless inner critic, and builds ironclad mental stamina for demanding careers.',
    highlights: [
      '6 Core Pillars of Mental De-escalation',
      'Weekly Live Mind Mastery Masterminds on Zoom',
      'Direct Peer-Study Buddy Pairing System',
      '1-on-1 Milestone Review with Senior Coach'
    ],
    specifications: {
      'Level': 'Flagship Tier',
      'Duration': '6 Weeks Cohort',
      'Includes': 'Weekly Masterminds + 1-on-1 Review',
      'Access': 'VIP Lifetime Portal Vault'
    },
    reviews: [
      {
        id: 'r8',
        author: 'Karan Singhania',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 month ago',
        title: 'Worth 10x the investment',
        comment: 'As a startup founder, overthinking was crippling my sleep and decisions. Clear Mind literally restored my mental sanity.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-8',
    level: 'Advanced',
    title: '6-Week Specialized Group Programme',
    subtitle: 'High-Touch Cohort for Leaders & Change Makers',
    category: 'course',
    categoryLabel: 'Advanced Cohort',
    price: 11999,
    originalPrice: 22999,
    discountPercent: 48,
    priceDisplay: '₹11,999',
    originalPriceDisplay: '₹22,999',
    isBestseller: false,
    isAssured: true,
    rating: 4.9,
    ratingCount: 680,
    reviewCount: 190,
    images: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80'
    ],
    format: 'Small-Group Intimate Zoom Circles (Max 15) + Personal Feedback',
    duration: '6 Weeks Cohort',
    accessType: 'Exclusive Inner Circle + Master Audio Vault',
    shortDescription: 'Intimate mastermind cohort capped at 15 leaders. High-touch accountability, deep behavioral unlearning, and sovereign presence.',
    longDescription: 'Created strictly for leaders, therapists, doctors, and senior executives who carry substantial responsibility. Experience deep collective wisdom and intensive personal feedback in small confidential cohorts.',
    highlights: [
      'Capped at Strictly 15 Members Per Cohort',
      'Weekly 90-Minute Intimate Group Strategy Sessions',
      'Dedicated WhatsApp Accountability Hotline',
      'Comprehensive Personalized Behavioral Audit'
    ],
    specifications: {
      'Level': 'Advanced Inner Circle',
      'Cohort Size': 'Max 15 Participants',
      'Duration': '6 Weeks Deep Dive',
      'Selection': 'Application & Direct Onboarding'
    },
    reviews: [
      {
        id: 'r9',
        author: 'Dr. Sunita Patel',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 months ago',
        title: 'Rare depth and profound peer accountability',
        comment: 'Connecting with fellow executives navigating the same inner pressure made this the most impactful group I have ever been part of.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-9',
    level: 'Private',
    title: 'One-to-One Clarity Session',
    subtitle: 'Direct 60-Minute Deep Breakthrough Consultation',
    category: 'private',
    categoryLabel: '1-on-1 Session',
    price: 2499,
    originalPrice: 4999,
    discountPercent: 50,
    priceDisplay: '₹2,499',
    originalPriceDisplay: '₹4,999',
    isBestseller: true,
    isAssured: true,
    rating: 5.0,
    ratingCount: 940,
    reviewCount: 310,
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80'
    ],
    format: 'Private 1-on-1 Zoom Session + Session Summary + Custom Action Plan',
    duration: '60 Minutes Live Consultation',
    accessType: 'Calendar Booking Link Provided Immediately After Order',
    shortDescription: 'Private 60-minute diagnostic session with Narayan Presence senior mentors to pinpoint exact mental bottlenecks and create a 30-day plan.',
    longDescription: 'Get focused, uninterrupted personal attention on your unique life, relationship, or career challenges. Walk away with complete emotional relief and a concrete step-by-step roadmap.',
    highlights: [
      '60-Minute Private 1-on-1 Video Consultation',
      'Full Audio & Video Recording for Private Review',
      'Customized 30-Day Personal Action Protocol',
      '7 Days of WhatsApp Post-Session Follow-Up'
    ],
    specifications: {
      'Level': 'Private Advisory',
      'Duration': '60 Minutes',
      'Platform': 'Private Encrypted Zoom',
      'Follow-up': '7-Day Direct Chat Support'
    },
    reviews: [
      {
        id: 'r10',
        author: 'Deepak Roy',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        title: 'Solved an issue I was stuck on for 6 months in 1 hour',
        comment: 'Incisive, compassionate, and zero wasted fluff. The 30-day customized protocol was exactly what I needed.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-10',
    level: 'Private',
    title: 'Three-Session Coaching',
    subtitle: 'Comprehensive Personal Guidance & Habit Imprinting',
    category: 'private',
    categoryLabel: 'Coaching Package',
    price: 6499,
    originalPrice: 11999,
    discountPercent: 46,
    priceDisplay: '₹6,499',
    originalPriceDisplay: '₹11,999',
    isBestseller: false,
    isAssured: true,
    rating: 4.9,
    ratingCount: 520,
    reviewCount: 160,
    images: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80'
    ],
    format: '3x 60-Minute Private Sessions Spaced Over 45 Days',
    duration: '3 Sessions (45-Day Duration)',
    accessType: 'Priority Calendar Access + Unlimited Messaging Support',
    shortDescription: 'Three structured private sessions allowing for diagnosis, implementation, real-world testing, and permanent habit locking.',
    longDescription: 'Single sessions provide breakthrough moments; this 3-session series ensures sustainable behavioral transformation. Experience continuous guidance between sessions with direct coach check-ins.',
    highlights: [
      '3 Dedicated 1-on-1 Sessions (60 mins each)',
      'Continuous Direct WhatsApp Guidance between calls',
      'Deep Psycho-emotional Diagnostic Assessment',
      'Personalized Resource Vault Access'
    ],
    specifications: {
      'Level': 'Private Series',
      'Sessions': '3 Full Sessions',
      'Validity': '60 Days from Purchase',
      'Support': 'WhatsApp Hotline between calls'
    },
    reviews: [
      {
        id: 'r11',
        author: 'Meera Deshmukh',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 weeks ago',
        title: 'Sustainable change rather than temporary motivation',
        comment: 'Having sessions spaced out over a month helped me overcome setbacks in real-time. My relationships and stress levels have never been better.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-11',
    level: 'Premium',
    title: '90-Day Private Programme',
    subtitle: 'Exclusive Executive Mentorship & Complete Life Recalibration',
    category: 'premium',
    categoryLabel: 'VIP Mentorship',
    price: 42000,
    originalPrice: 65000,
    discountPercent: 35,
    priceDisplay: '₹42,000',
    originalPriceDisplay: '₹65,000',
    isBestseller: true,
    isAssured: true,
    rating: 5.0,
    ratingCount: 180,
    reviewCount: 65,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
    ],
    format: '12 Weekly 1-on-1 Sessions + VIP Concierge Hotline + Full Curriculum Suite',
    duration: '90 Days (Quarterly Immersion)',
    accessType: 'VIP Direct Access to Master Coach Narayan',
    shortDescription: 'Our most elite private immersion. Complete access to master coach, private weekly strategy calls, and customized life architecture.',
    longDescription: 'A premier 3-month personal partnership for visionaries, industry leaders, and high-net-worth creators. Rewire your operating baseline across health, presence, wealth, and spiritual sovereignty.',
    highlights: [
      '12 Private Weekly 60-Minute 1-on-1 Deep-Dives',
      'Unrestricted VIP WhatsApp Voice/Text Concierge Access',
      'Full Access to Every Course, Workshop & Asset in the Vault',
      'Comprehensive Quarterly Mind-Body Energy Audit'
    ],
    specifications: {
      'Level': 'VIP Elite',
      'Duration': '90 Days Complete Immersion',
      'Access': 'VIP Direct Concierge Hotline',
      'Availability': 'Strictly Limited to 5 Clients per Quarter'
    },
    reviews: [
      {
        id: 'r12',
        author: 'Rajiv Singhal',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 month ago',
        title: 'The single highest ROI investment in my wellbeing',
        comment: 'Guided me through a 50-crore company acquisition without burning out or sacrificing my family life. Truly masters at the highest level.',
        verified: true
      }
    ]
  },
  {
    id: 'np-prod-12',
    level: 'Membership',
    title: 'Narayan Presence Circle',
    subtitle: 'Monthly Satsang, Live Meditations & Continuous Sangha',
    category: 'membership',
    categoryLabel: 'Monthly Membership',
    price: 499,
    originalPrice: 999,
    discountPercent: 50,
    priceDisplay: '₹499/mo',
    originalPriceDisplay: '₹999/mo',
    isBestseller: true,
    isAssured: true,
    rating: 4.9,
    ratingCount: 4250,
    reviewCount: 1100,
    images: [
      'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80'
    ],
    format: 'Weekly Live Group Satsangs + Complete Recorded Vault + Private Circle Community',
    duration: 'Ongoing Monthly Membership (Cancel Anytime)',
    accessType: 'Unlimited Member Vault Access',
    shortDescription: 'Join thousands of dedicated seekers in our vibrant global presence circle. Weekly live calls, curated teachings, and supportive sangha.',
    longDescription: 'Spiritual growth requires continuous sangha (community). As a Presence Circle member, attend weekly Sunday morning satsangs, access our 100+ hour recorded wisdom vault, and join private mastermind discussions.',
    highlights: [
      '4 Live Online Satsang & Meditation Circles Every Month',
      'Instant Access to 100+ Hours of Past Masterclasses',
      'Private Encrypted Member Community & Discourse Space',
      'Exclusive Member-Only Discounts on 1-on-1 Sessions'
    ],
    specifications: {
      'Level': 'Global Membership',
      'Billing': '₹499 Billed Monthly (Cancel Anytime)',
      'Community': 'Exclusive Narayan Presence App & Discord',
      'Live Schedule': 'Every Sunday 8:00 AM IST'
    },
    reviews: [
      {
        id: 'r13',
        author: 'Kavita Chawla',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 weeks ago',
        title: 'My Sunday morning sanctuary',
        comment: 'Sunday satsangs have become non-negotiable for my mental peace. The energy of hundreds of conscious souls meditating together is electrifying.',
        verified: true
      }
    ]
  }
]

// Global reactive states
const cart = ref<CartItem[]>([])
const wishlist = ref<string[]>([])
const isCartOpen = ref(false)
const isWishlistOpen = ref(false)
const isQuickViewOpen = ref(false)
const activeQuickViewProduct = ref<ShopProduct | null>(null)
const isCheckoutModalOpen = ref(false)
const activeCheckoutItem = ref<ShopProduct | null>(null)

const CART_STORAGE_KEY = 'narayan_presence_shop_cart_v1'
const WISHLIST_STORAGE_KEY = 'narayan_presence_shop_wishlist_v1'

export const useShopCart = () => {
  // Initialize state from localStorage
  onMounted(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY)
        if (savedCart) {
          cart.value = JSON.parse(savedCart)
        }
      } catch (e) {
        console.warn('[ShopCart] Failed to restore cart from storage', e)
      }

      try {
        const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY)
        if (savedWishlist) {
          wishlist.value = JSON.parse(savedWishlist)
        }
      } catch (e) {
        console.warn('[ShopCart] Failed to restore wishlist from storage', e)
      }
    }
  })

  const persistCart = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart.value))
      } catch {}
    }
  }

  const persistWishlist = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist.value))
      } catch {}
    }
  }

  // Cart operations
  const addToCart = (product: ShopProduct, quantity = 1) => {
    const existing = cart.value.find(item => item.product.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      cart.value.push({ product, quantity })
    }
    persistCart()
  }

  const removeFromCart = (productId: string) => {
    cart.value = cart.value.filter(item => item.product.id !== productId)
    persistCart()
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    const item = cart.value.find(item => item.product.id === productId)
    if (item) {
      item.quantity = quantity
      persistCart()
    }
  }

  const clearCart = () => {
    cart.value = []
    persistCart()
  }

  // Wishlist operations
  const toggleWishlist = (productId: string) => {
    if (wishlist.value.includes(productId)) {
      wishlist.value = wishlist.value.filter(id => id !== productId)
    } else {
      wishlist.value.push(productId)
    }
    persistWishlist()
  }

  const isInWishlist = (productId: string): boolean => {
    return wishlist.value.includes(productId)
  }

  const moveToCartFromWishlist = (product: ShopProduct) => {
    addToCart(product, 1)
    toggleWishlist(product.id)
  }

  // Quick View Modal
  const openQuickView = (product: ShopProduct) => {
    activeQuickViewProduct.value = product
    isQuickViewOpen.value = true
  }

  const closeQuickView = () => {
    isQuickViewOpen.value = false
    activeQuickViewProduct.value = null
  }

  // Direct Buy Now / Express Checkout
  const startBuyNow = (product: ShopProduct) => {
    activeCheckoutItem.value = product
    isCheckoutModalOpen.value = true
  }

  const closeCheckout = () => {
    isCheckoutModalOpen.value = false
    activeCheckoutItem.value = null
  }

  // Computed Totals
  const cartTotalCount = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotalMRP = computed(() => {
    return cart.value.reduce((total, item) => total + (item.product.originalPrice * item.quantity), 0)
  })

  const cartTotalPrice = computed(() => {
    return cart.value.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  })

  const cartTotalDiscount = computed(() => {
    return cartTotalMRP.value - cartTotalPrice.value
  })

  const wishlistProducts = computed(() => {
    return SHOP_PRODUCTS.filter(p => wishlist.value.includes(p.id))
  })

  return {
    SHOP_PRODUCTS,
    cart,
    wishlist,
    isCartOpen,
    isWishlistOpen,
    isQuickViewOpen,
    activeQuickViewProduct,
    isCheckoutModalOpen,
    activeCheckoutItem,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleWishlist,
    isInWishlist,
    moveToCartFromWishlist,
    openQuickView,
    closeQuickView,
    startBuyNow,
    closeCheckout,
    cartTotalCount,
    cartTotalMRP,
    cartTotalPrice,
    cartTotalDiscount,
    wishlistProducts
  }
}
