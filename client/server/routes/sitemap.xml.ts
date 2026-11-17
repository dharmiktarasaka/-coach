export default defineEventHandler((event) => {
  const baseUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://digitalcoach.com'

  const routes = [
    // --- 25 CANONICAL ARCHITECTURE PAGES ---
    '/',
    '/who-we-help',
    '/who-we-help/coaches',
    '/who-we-help/experts',
    '/who-we-help/consultants',
    '/what-we-build',
    '/how-it-works',
    '/programs',
    '/scorecard',
    '/workshop',
    '/resources',
    '/ai-platform',
    '/about',
    '/apply',
    '/case-studies',
    '/research',
    '/contact',
    '/who-we-help/coaches/life-coach',
    '/who-we-help/coaches/business-coach',
    '/who-we-help/coaches/career-coach',
    '/who-we-help/coaches/wellness-coach',
    '/who-we-help/coaches/leadership-coach',
    '/who-we-help/coaches/spiritual-coach',
    '/who-we-help/women',
    '/who-we-help/professionals',

    // --- SEO Niche & Resource Articles ---

    '/coaching-business',
    '/coaching-business-india',
    '/coaching-business-model',
    '/online-coaching-business-india',
    '/online-coaching-business-model',
    '/start-coaching-business-from-home',
    '/get-coaching-clients',
    '/get-coaching-clients-india',
    '/client-acquisition',
    '/lead-generation-for-coaches',
    '/meta-ads-for-coaches',
    '/facebook-ads-for-coaches',
    '/coaching-sales-funnel',
    '/coaching-funnel',
    '/vsl-for-coaches',
    '/coaching-webinar-funnel',
    '/coaching-workshop-funnel',
    '/coaching-lead-magnet',
    '/high-ticket-coaching',
    '/high-ticket-coaching-india',
    '/sell-coaching',
    '/sell-coaching-packages',
    '/coaching-discovery-call',
    '/coaching-sales-script',
    '/coaching-offer',
    '/create-coaching-program',
    '/coaching-program-structure',
    '/coaching-program-ideas',
    '/coaching-package-ideas',
    '/coaching-pricing',
    '/coaching-pricing-india',
    '/life-coach-business/pricing',
    '/business-coach-business/pricing',
    '/ai-for-coaches',
    '/ai-tools-for-coaches',
    '/ai-coaching-business',
    '/ai-for-coaching-business',
    '/ai-coach-platform',
    '/coaching-business-automation',
    '/whatsapp-marketing-for-coaches',
    '/whatsapp-automation-for-coaches',
    '/coach-crm',
    '/coaching-business-software',
    '/coaching-management-software-india',
    '/coaching-business-system',
    '/coaching-business-consulting',
    '/coaching-business-consulting-india',
    '/coaching-business-plan',
    '/coaching-business-roadmap',
    '/coaching-business-ideas',
    '/coaching-case-studies',
    '/coaching-testimonials',
    '/scale-coaching-business',
    '/scale-coaching-business-india',
    '/life-coach-business',
    '/business-coach-business',
    '/career-coach-business',
    '/wellness-coach-business',
    '/health-coach-business',
    '/spiritual-coach-business',
    '/relationship-coach-business',
    '/executive-coach-business',
    '/leadership-coach-business',
    '/consultant-to-coach',
    '/turn-expertise-into-coaching',
    '/monetize-expertise',
    '/coaching-business-for-doctors',
    '/coaching-business-for-consultants',
    '/coaching-business-for-trainers',
    '/coaching-business-for-creators',
    '/privacy-policy',
    '/terms',
    '/disclaimer'
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.includes('coaching') ? '0.9' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml')
  return sitemapXml
})
