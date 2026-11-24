import { computed } from 'vue'

export interface ArticleSection {
  heading?: string
  content: string
}

export interface Article {
  slug: string
  url?: string
  cat: string
  tag: string
  title: string
  desc: string
  readTime: string
  image: string
  color: string
  bg: string
  border: string
  publishedAt?: string
  author?: {
    name: string
    role: string
    avatar: string
  }
  content?: string
  sections?: ArticleSection[]
  keyTakeaways?: string[]
}

export const initialArticles: Article[] = [
  {
    slug: 'can-ai-replace-human-coaches-in-2026',
    url: '/blog/can-ai-replace-human-coaches-in-2026',
    cat: 'COACHING & AI',
    tag: 'coaching',
    title: 'Can AI Replace Human Coaches in 2026? The Truth About the Future of Coaching',
    desc: 'An in-depth perspective on the real impact of artificial intelligence on coaching, what algorithms cannot replicate, and why deep human presence matters more than ever.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    color: '#D9AA55',
    bg: 'rgba(217, 170, 85, 0.16)',
    border: 'rgba(217, 170, 85, 0.4)',
    publishedAt: '2026-11-24',
    author: {
      name: 'Ranu Patel',
      role: 'Life Transformation Coach & Healer',
      avatar: '/ranu.webp'
    },
    keyTakeaways: [
      'Why AI accelerates information delivery, intake synthesis, and structure, but cannot replicate intuitive human holding.',
      'The difference between transactional problem-solving and transformative presence.',
      'How coaches who anchor in emotional safety and authentic connection will command unprecedented trust in 2026.'
    ],
    sections: [
      {
        heading: '1. The Rapid Rise of AI in the Coaching Landscape',
        content: ''
      },
      {
        heading: '2. What AI Does Exceptionally Well',
        content: ''
      },
      {
        heading: '3. What Algorithms Can Never Replace: Human Presence & Somatic Safety',
        content: ''
      },
      {
        heading: '4. The Truth About the Future: How Modern Coaches Thrive in 2026',
        content: ''
      }
    ]
  }
]

export const useArticles = () => {
  // Use Nuxt SSR-safe useState with initial articles
  const articlesState = useState<Article[]>('global_articles_list', () => [...initialArticles])

  const getArticle = (slug: string) => {
    if (!articlesState.value || !Array.isArray(articlesState.value)) return undefined
    return articlesState.value.find(a => a && a.slug === slug)
  }

  const setArticles = (newArticles: Article[]) => {
    articlesState.value = Array.isArray(newArticles) ? newArticles : []
  }

  const addArticle = (article: Article) => {
    if (!article || !article.slug) return
    if (!Array.isArray(articlesState.value)) {
      articlesState.value = []
    }
    const existingIndex = articlesState.value.findIndex(a => a && a.slug === article.slug)
    if (existingIndex >= 0) {
      articlesState.value[existingIndex] = article
    } else {
      articlesState.value.push(article)
    }
  }

  return {
    articles: computed(() => articlesState.value || []),
    getArticle,
    setArticles,
    addArticle
  }
}
