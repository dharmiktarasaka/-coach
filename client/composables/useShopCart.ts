import { ref, computed, onMounted } from 'vue'

export interface ShopProduct {
  id: string
  level: string
  title: string
  subtitle: string
  badge: string
  badgeColor?: string
  category: 'books'
  categoryLabel: string
  price: number
  originalPrice: number
  discountPercent: number
  priceDisplay: string
  originalPriceDisplay: string
  saveText: string
  dailyCost: string
  urgency: string
  ctaText: string
  footerNotice: string
  extraNote?: string
  editions: string[]
  selectedEdition?: string
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
  chosenEdition?: string
}

// Exactly 5 books matching the requested bookstore catalogue
export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'book-overthinking-cure',
    level: 'Core Book 01',
    badge: 'START HERE',
    badgeColor: 'gold',
    title: 'The Overthinking Cure',
    subtitle: 'ओवरथिंकिंग का इलाज',
    category: 'books',
    categoryLabel: 'Core Publication',
    price: 499,
    originalPrice: 598,
    discountPercent: 17,
    priceDisplay: '₹499',
    originalPriceDisplay: '₹598',
    saveText: 'Save ₹99',
    dailyCost: 'Under ₹10 a day for the 30-day plan (one edition)',
    urgency: 'Rises to ₹799 on 1 Jan',
    ctaText: 'Get both editions · ₹499 →',
    footerNotice: 'Instant PDF · use FLAT20 for 20% off',
    editions: ['English', 'Both', 'हिंदी'],
    selectedEdition: 'Both',
    isBestseller: true,
    isAssured: true,
    rating: 4.9,
    ratingCount: 3840,
    reviewCount: 920,
    images: [
      '/books/the-overthinking-cure.png',
      '/books/the-overthinking-cure.jpg'
    ],
    format: 'Digital E-Book (PDF + ePub) & Printable Action Kit',
    accessType: 'Instant Download + Lifetime Cloud Access',
    shortDescription: 'Interrupt the 2 AM loop with the 5-step SHANT method. A 30-day roadmap, a calm-mind toolkit and 10 to 15 minutes a day.',
    longDescription: 'The Overthinking Cure is Ranu Patel\'s definitive guide to ending mental spiraling, insomnia-inducing thought loops, and decision paralysis. Built upon the proprietary 5-step SHANT methodology, this book transforms abstract mindfulness into practical cognitive decluttering tools you can apply in 10 to 15 minutes every morning.',
    highlights: [
      'The 5-step SHANT method to interrupt mental spiraling',
      '30-day calm-mind structured roadmap',
      'Printable daily toolkit for thought decluttering',
      'Dual English & Hindi editions included'
    ],
    specifications: {
      'Author': 'Ranu Patel',
      'Language': 'English & Hindi (Both Editions Available)',
      'Format': 'High-Res PDF, ePub, Mobile Compatible',
      'Delivery': 'Instant Email & Portal Delivery',
      'Bonuses': '30-Day Calm Mind Printable Toolkit'
    },
    reviews: [
      {
        id: 'r1',
        author: 'Dhruvil Patel',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 days ago',
        title: 'Broke my 2 AM thought loops',
        comment: 'I was dealing with constant overthinking and mental stress. The SHANT method helped me slow down and genuinely quiet my mind.',
        verified: true
      },
      {
        id: 'r2',
        author: 'Masum Rajput',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        title: 'Look at my thoughts completely differently',
        comment: 'Reading The Overthinking Cure after learning from Ranu Ma’am helped me look at my thoughts differently. Easy to read, beautifully written.',
        verified: true
      }
    ]
  },
  {
    id: 'book-hold-what-you-heal',
    level: 'Core Book 02',
    badge: 'HEALING GUIDE',
    badgeColor: 'navy',
    title: 'Hold What You Heal',
    subtitle: 'जो पाओ, उसे थाम सको',
    category: 'books',
    categoryLabel: 'Core Publication',
    price: 499,
    originalPrice: 598,
    discountPercent: 17,
    priceDisplay: '₹499',
    originalPriceDisplay: '₹598',
    saveText: 'Save ₹99',
    dailyCost: 'About ₹14 a day for the 21-day plan (one edition)',
    urgency: 'Rises to ₹799 on 1 Jan',
    ctaText: 'Get both editions · ₹499 →',
    footerNotice: 'Instant PDF · use FLAT20 for 20% off',
    editions: ['English', 'Both', 'हिंदी'],
    selectedEdition: 'Both',
    isBestseller: true,
    isAssured: true,
    rating: 4.9,
    ratingCount: 2910,
    reviewCount: 710,
    images: [
      '/books/hold-what-you-heal.png',
      '/books/hold-what-you-heal.jpg'
    ],
    format: 'Digital E-Book (PDF) + 21-Day Integration Plan',
    accessType: 'Instant Download + Lifetime Cloud Access',
    shortDescription: 'Heal your health, relationships and money, then keep the good you receive. Includes a 21-day plan.',
    longDescription: 'Many seekers heal an old wound only to fall back into identical destructive habits. Hold What You Heal tackles vessel capacity: ensuring your mental, physical, and financial capacity can hold peace, abundance, and healthy relationships without self-sabotage.',
    highlights: [
      'Sustained healing across health, money and relationships',
      '21-day actionable integration roadmap',
      'Break the vicious cycle of receiving and losing',
      'Includes reflective self-audit worksheets'
    ],
    specifications: {
      'Author': 'Ranu Patel',
      'Language': 'English & Hindi (Both Editions Available)',
      'Format': 'Interactive PDF, Universal Reader Friendly',
      'Delivery': 'Instant Email & Portal Delivery',
      'Bonuses': '21-Day Life Integration Workbook'
    },
    reviews: [
      {
        id: 'r3',
        author: 'Sangeeta Pandey',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '5 days ago',
        title: 'Deep emotional breakthrough',
        comment: 'I struggled with anxiety and repeating financial hurdles. This book showed me why I was rejecting stability subconsciously.',
        verified: true
      }
    ]
  },
  {
    id: 'book-ek-baat-roz',
    level: 'Core Book 03',
    badge: 'WHOLE FAMILY',
    badgeColor: 'navy',
    title: 'Ek Baat Roz',
    subtitle: 'एक बात रोज़',
    category: 'books',
    categoryLabel: 'Core Publication',
    price: 499,
    originalPrice: 598,
    discountPercent: 17,
    priceDisplay: '₹499',
    originalPriceDisplay: '₹598',
    saveText: 'Save ₹99',
    dailyCost: 'Under ₹10 a day for the 30-day plan (one edition)',
    urgency: 'Rises to ₹799 on 1 Jan',
    ctaText: 'Get both editions · ₹499 →',
    footerNotice: 'Instant PDF · use FLAT20 for 20% off',
    editions: ['English', 'Both', 'हिंदी'],
    selectedEdition: 'Both',
    isBestseller: true,
    isAssured: true,
    rating: 4.8,
    ratingCount: 3120,
    reviewCount: 650,
    images: [
      '/books/ek-baat-roz.jpg',
      '/books/ek-baat-roz.png'
    ],
    format: 'Illustrated E-Book + Printable Family Toolkit',
    accessType: 'Instant Download + Lifetime Cloud Access',
    shortDescription: 'One shloka, its story and one gentle line for every age at home. 9 moments, a 30-day plan and a printable toolkit.',
    longDescription: 'Crafted for modern households where generations live together or stay deeply connected. Ek Baat Roz provides 1 shloka each day, accompanied by a contemporary moral story and an easy conversational line suitable for children, youths, and grandparents alike.',
    highlights: [
      'One timeless shloka & practical story for daily family rhythm',
      '9 moments for effortless connection across generations',
      '30-day family conversation plan',
      'Printable bedtime & breakfast reflection toolkit'
    ],
    specifications: {
      'Author': 'Ranu Patel',
      'Language': 'English & Hindi (Both Editions Available)',
      'Format': 'Illustrated PDF + Audio Shloka Pronunciations',
      'Delivery': 'Instant Email & Portal Delivery',
      'Target': 'Parents, Children, Seniors & Whole Households'
    },
    reviews: [
      {
        id: 'r4',
        author: 'Richa Sharma',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 weeks ago',
        title: 'Our family dinner ritual has transformed',
        comment: 'My children and their grandparents now discuss one shloka every single evening. A true blessing for Indian homes.',
        verified: true
      }
    ]
  },
  {
    id: 'book-heal-any-relationship',
    level: 'Core Book 04',
    badge: 'NEW - RELATIONSHIPS',
    badgeColor: 'navy',
    title: 'Heal Any Relationship',
    subtitle: 'रिश्तों का इलाज',
    category: 'books',
    categoryLabel: 'Core Publication',
    price: 499,
    originalPrice: 598,
    discountPercent: 17,
    priceDisplay: '₹499',
    originalPriceDisplay: '₹598',
    saveText: 'Save ₹99',
    dailyCost: 'About ₹14 a day for the 21-day plan (one edition)',
    urgency: 'Launch price ends 30 Dec',
    ctaText: 'Get both editions · ₹499 →',
    footerNotice: 'Instant PDF by email right after payment',
    editions: ['English', 'Both', 'हिंदी'],
    selectedEdition: 'Both',
    isBestseller: true,
    isAssured: true,
    rating: 5.0,
    ratingCount: 1840,
    reviewCount: 420,
    images: [
      '/books/heal-any-relationship.png',
      '/books/heal-any-relationship.jpg'
    ],
    format: 'Digital E-Book + 16 Worksheets + 21-Day Repair Plan',
    accessType: 'Instant Download + Lifetime Cloud Access',
    shortDescription: 'One 4-step method (SETU) and ready-to-say scripts for 8 relationships, from your partner and kids to your team and boss. 16 worksheets and a 21-day repair plan.',
    longDescription: 'Relationships suffer when words turn reactive. Heal Any Relationship presents the proven 4-step SETU framework with word-for-word scripts designed to resolve disputes, rebuild lost trust, and establish respectful emotional boundaries with spouses, in-laws, colleagues, and friends.',
    highlights: [
      'The 4-step SETU framework for interpersonal conflict resolution',
      'Ready-to-say scripts for 8 distinct relationship types',
      '16 boundary and conscious dialogue worksheets',
      '21-day relationship reset and repair plan'
    ],
    specifications: {
      'Author': 'Ranu Patel',
      'Language': 'English & Hindi (Both Editions Available)',
      'Format': 'Interactive PDF + Script Cheat Sheets',
      'Delivery': 'Instant Email & Portal Delivery',
      'Bonuses': '16 Printable Dialogue Worksheets'
    },
    reviews: [
      {
        id: 'r5',
        author: 'Robert Walker',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 days ago',
        title: 'The SETU method actually works',
        comment: 'Peaceful, insightful, and practical. Having the exact scripts to say without attacking or getting defensive saved my partnership.',
        verified: true
      }
    ]
  },
  {
    id: 'book-when-narayan-awakens-within',
    level: 'Core Book 05',
    badge: 'HINDI - INNER AWAKENING',
    badgeColor: 'navy',
    title: 'When Narayan Awakens Within',
    subtitle: 'जब भीतर नारायण जागें',
    category: 'books',
    categoryLabel: 'Core Publication',
    price: 499,
    originalPrice: 598,
    discountPercent: 17,
    priceDisplay: '₹499',
    originalPriceDisplay: '₹598',
    saveText: 'Save ₹99',
    dailyCost: 'About ₹24 a day for the 21-day plan (one edition)',
    urgency: 'Rises to ₹799 on 1 Jan',
    ctaText: 'Get Hindi edition · ₹499 →',
    footerNotice: 'Instant PDF · use FLAT20 for 20% off',
    extraNote: 'Gujarati, Tamil and English editions are being prepared. Pre-order the set: Hindi + English ₹799, all four languages ₹1,599.',
    editions: ['हिंदी · now', 'Other languages · soon'],
    selectedEdition: 'हिंदी · now',
    isBestseller: true,
    isAssured: true,
    rating: 5.0,
    ratingCount: 2280,
    reviewCount: 540,
    images: [
      '/books/when-narayan-awakens-within.jpg',
      '/books/when-narayan-awakens-within.png'
    ],
    format: 'Sacred Digital Manuscript + 21-Day Sadhana Guide',
    accessType: 'Instant Download + Lifetime Cloud Access',
    shortDescription: '21 chapters, a 21-day sadhana and daily practices for returning to yourself. Hindi now. Gujarati, Tamil and English are on the way.',
    longDescription: 'A deeply meditative journey through 21 transformative chapters. When Narayan Awakens Within guides the seeker through self-inquiry, dissolving egoic resistance, and returning to the quiet sanctuary of the heart. Accompanied by a 21-day sadhana for everyday spiritual awareness.',
    highlights: [
      '21 deep chapters exploring inner spiritual consciousness',
      '21-day daily contemplative sadhana practices',
      'Rooted in timeless Vedic clarity for modern existence',
      'Pre-order options for forthcoming regional translations'
    ],
    specifications: {
      'Author': 'Ranu Patel',
      'Language': 'हिंदी (Hindi Edition Live Now)',
      'Upcoming': 'Gujarati, Tamil & English in Production',
      'Format': 'Deluxe High-Res Digital Edition',
      'Delivery': 'Instant Email & Portal Delivery'
    },
    reviews: [
      {
        id: 'r6',
        author: 'Geetanshi Bharti',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        title: 'Deeply profound and grounding',
        comment: 'Brings immense tranquility to the heart. Reading just a few paragraphs in the morning sets a tone of sacred calm for the entire day.',
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
const isCheckoutModalOpen = ref(false)
const activeCheckoutItem = ref<ShopProduct | null>(null)
const isQuickViewOpen = ref(false)
const activeQuickViewProduct = ref<ShopProduct | null>(null)

// Selected edition map (bookId -> edition)
const selectedEditions = ref<Record<string, string>>({
  'book-overthinking-cure': 'Both',
  'book-hold-what-you-heal': 'Both',
  'book-ek-baat-roz': 'Both',
  'book-heal-any-relationship': 'Both',
  'book-when-narayan-awakens-within': 'हिंदी · now'
})

const CART_STORAGE_KEY = 'narayan_presence_shop_cart_v2'
const WISHLIST_STORAGE_KEY = 'narayan_presence_shop_wishlist_v2'

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

  const setEdition = (bookId: string, edition: string) => {
    selectedEditions.value[bookId] = edition
  }

  const getEdition = (bookId: string) => {
    return selectedEditions.value[bookId] || 'Both'
  }

  // Cart operations
  const addToCart = (product: ShopProduct, quantity = 1, edition?: string) => {
    const chosen = edition || selectedEditions.value[product.id] || 'Both'
    const cartKey = `${product.id}-${chosen}`
    const existing = cart.value.find(item => `${item.product.id}-${item.chosenEdition || 'Both'}` === cartKey)
    if (existing) {
      existing.quantity += quantity
    } else {
      cart.value.push({
        product,
        quantity,
        chosenEdition: chosen
      })
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
    const item = cart.value.find(i => i.product.id === productId)
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
    const index = wishlist.value.indexOf(productId)
    if (index > -1) {
      wishlist.value.splice(index, 1)
    } else {
      wishlist.value.push(productId)
    }
    persistWishlist()
  }

  const isInWishlist = (productId: string) => {
    return wishlist.value.includes(productId)
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

  // Direct Checkout
  const startBuyNow = (product: ShopProduct, edition?: string) => {
    activeCheckoutItem.value = product
    isCheckoutModalOpen.value = true
    isCartOpen.value = false
  }

  const openCheckoutWithCart = () => {
    if (cart.value.length === 0) return
    activeCheckoutItem.value = cart.value[0].product
    isCheckoutModalOpen.value = true
    isCartOpen.value = false
  }

  const closeCheckout = () => {
    isCheckoutModalOpen.value = false
    activeCheckoutItem.value = null
  }

  // Computed totals
  const cartTotalCount = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const cartTotalPrice = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  })

  const cartOriginalTotalPrice = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.product.originalPrice * item.quantity, 0)
  })

  const cartTotalSavings = computed(() => {
    return Math.max(0, cartOriginalTotalPrice.value - cartTotalPrice.value)
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
    isCheckoutModalOpen,
    activeCheckoutItem,
    isQuickViewOpen,
    activeQuickViewProduct,
    selectedEditions,
    cartTotalCount,
    cartTotalPrice,
    cartOriginalTotalPrice,
    cartTotalSavings,
    wishlistProducts,
    setEdition,
    getEdition,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleWishlist,
    isInWishlist,
    openQuickView,
    closeQuickView,
    startBuyNow,
    openCheckoutWithCart,
    closeCheckout
  }
}
