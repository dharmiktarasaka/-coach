export default defineEventHandler((event) => {
  const baseUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://narayanpresence.com'

  const routes = [
    // --- CORE BRAND & PILLAR ARCHITECTURE PAGES ---
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/founder', priority: '0.95', changefreq: 'weekly' },
    { path: '/about', priority: '0.9', changefreq: 'weekly' },
    { path: '/methodology', priority: '0.9', changefreq: 'weekly' },
    { path: '/workshops', priority: '0.9', changefreq: 'weekly' },
    { path: '/coaching', priority: '0.9', changefreq: 'weekly' },
    { path: '/courses', priority: '0.85', changefreq: 'weekly' },
    { path: '/products', priority: '0.85', changefreq: 'weekly' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/blog/can-ai-replace-human-coaches-in-2026', priority: '0.85', changefreq: 'weekly' },
    { path: '/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world', priority: '0.85', changefreq: 'weekly' },
    { path: '/blog/how-to-reinvent-yourself-in-2027', priority: '0.85', changefreq: 'weekly' },
    { path: '/resources', priority: '0.8', changefreq: 'weekly' },
    { path: '/community', priority: '0.8', changefreq: 'weekly' },
    { path: '/membership', priority: '0.8', changefreq: 'weekly' },
    { path: '/testimonials', priority: '0.8', changefreq: 'weekly' },
    { path: '/faqs', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },

    // --- TRUST, GOVERNANCE & LEGAL ---
    { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { path: '/terms', priority: '0.5', changefreq: 'monthly' },
    { path: '/disclaimer', priority: '0.5', changefreq: 'monthly' },
    { path: '/refund-policy', priority: '0.5', changefreq: 'monthly' },

    // --- TARGETED NICHE & COACHING KNOWLEDGE ARCHITECTURE ---
    { path: '/who-we-help', priority: '0.8', changefreq: 'weekly' },
    { path: '/who-we-help/coaches', priority: '0.8', changefreq: 'weekly' },
    { path: '/who-we-help/experts', priority: '0.8', changefreq: 'weekly' },
    { path: '/who-we-help/consultants', priority: '0.8', changefreq: 'weekly' },
    { path: '/who-we-help/women', priority: '0.8', changefreq: 'weekly' },
    { path: '/who-we-help/professionals', priority: '0.8', changefreq: 'weekly' },
    { path: '/who-we-help/coaches/life-coach', priority: '0.75', changefreq: 'weekly' },
    { path: '/who-we-help/coaches/wellness-coach', priority: '0.75', changefreq: 'weekly' },
    { path: '/who-we-help/coaches/spiritual-coach', priority: '0.75', changefreq: 'weekly' },
    { path: '/who-we-help/coaches/leadership-coach', priority: '0.75', changefreq: 'weekly' },
    { path: '/who-we-help/coaches/business-coach', priority: '0.75', changefreq: 'weekly' },
    { path: '/who-we-help/coaches/career-coach', priority: '0.75', changefreq: 'weekly' },
    { path: '/what-we-build', priority: '0.8', changefreq: 'weekly' },
    { path: '/how-it-works', priority: '0.8', changefreq: 'weekly' },
    { path: '/programs', priority: '0.8', changefreq: 'weekly' },
    { path: '/workshop', priority: '0.8', changefreq: 'weekly' },
    { path: '/coaching-business', priority: '0.75', changefreq: 'weekly' },
    { path: '/coaching-business-india', priority: '0.75', changefreq: 'weekly' },
    { path: '/coaching-business-model', priority: '0.75', changefreq: 'weekly' },
    { path: '/online-coaching-business-india', priority: '0.75', changefreq: 'weekly' },
    { path: '/start-coaching-business-from-home', priority: '0.75', changefreq: 'weekly' },
    { path: '/get-coaching-clients', priority: '0.75', changefreq: 'weekly' },
    { path: '/get-coaching-clients-india', priority: '0.75', changefreq: 'weekly' },
    { path: '/client-acquisition', priority: '0.75', changefreq: 'weekly' },
    { path: '/lead-generation-for-coaches', priority: '0.75', changefreq: 'weekly' },
    { path: '/meta-ads-for-coaches', priority: '0.75', changefreq: 'weekly' },
    { path: '/facebook-ads-for-coaches', priority: '0.75', changefreq: 'weekly' },
    { path: '/coaching-sales-funnel', priority: '0.75', changefreq: 'weekly' },
    { path: '/high-ticket-coaching', priority: '0.75', changefreq: 'weekly' },
    { path: '/high-ticket-coaching-india', priority: '0.75', changefreq: 'weekly' },
    { path: '/create-coaching-program', priority: '0.75', changefreq: 'weekly' },
    { path: '/coaching-pricing-india', priority: '0.75', changefreq: 'weekly' },
    { path: '/whatsapp-automation-for-coaches', priority: '0.75', changefreq: 'weekly' },
    { path: '/scale-coaching-business', priority: '0.75', changefreq: 'weekly' },
    { path: '/turn-expertise-into-coaching', priority: '0.75', changefreq: 'weekly' }
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.path}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return sitemapXml
})
