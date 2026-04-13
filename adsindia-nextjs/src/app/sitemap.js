const BASE_URL = 'https://www.adsindiaa.in'

const servicesSlugs = [
  'promotional-sms',
  'whatsapp-marketing',
  'transactional-sms',
  'otp-sms',
  'dynamic-sms',
  'meta-ads',
  'graphic-design',
  'web-design',
  'voice-solutions',
  'rcs-messaging',
  'ai-workflows',
  'meta-whatsapp-api',
]

export default function sitemap() {
  const staticPages = [
    { url: `${BASE_URL}`,                   lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/about-us`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE_URL}/contact-us`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/blog`,              lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE_URL}/packages`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE_URL}/clients`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/products`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/digital-marketing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/privacy-policy`,    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`,  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`,     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const servicePages = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  return [...staticPages, ...servicePages]
}
