const BASE_URL = 'https://www.adsindiaa.in'

// Per-service metadata map for precise SEO
const serviceMeta = {
  'promotional-sms': {
    title: 'Bulk Promotional SMS Services India | DND Bypass, Real-Time Tracking',
    description: 'Send high-impact bulk promotional SMS campaigns in India with DND bypass and real-time conversion tracking. Instant delivery, scheduled campaigns, 99.9% uptime. Start with Ads Indiaa today.',
    keywords: 'bulk promotional SMS India, DND bypass SMS, bulk SMS campaign India, mass SMS marketing, promotional SMS service',
  },
  'whatsapp-marketing': {
    title: 'WhatsApp Marketing Service India | Official API, Chatbot & Broadcast',
    description: 'Grow your business with WhatsApp marketing in India. Official Meta API integration, AI chatbots, bulk broadcasting, multi-agent inbox & rich media messages. Ads Indiaa — 5000+ clients.',
    keywords: 'WhatsApp marketing India, WhatsApp business API India, WhatsApp broadcast service, WhatsApp chatbot India',
  },
  'transactional-sms': {
    title: 'Transactional SMS Service India | Instant Alerts, Order Updates & DND Bypass',
    description: 'Send critical transactional SMS alerts — order confirmations, bank OTPs, shipping updates — instantly in India. 99.9% uptime, DND bypass, ERP/CRM integration. Powered by Ads Indiaa.',
    keywords: 'transactional SMS India, business SMS alerts, order confirmation SMS, payment alert SMS India',
  },
  'otp-sms': {
    title: 'OTP SMS Service India | Sub-3s Delivery, Secure & Reliable Authentication',
    description: 'Secure your application with ultra-fast OTP SMS in India. Sub-3 second delivery, 99.99% uptime, global routing & auto-failover. Ideal for banking, e-commerce & fintech apps.',
    keywords: 'OTP SMS India, SMS OTP gateway India, two-factor authentication SMS, secure OTP service',
  },
  'dynamic-sms': {
    title: 'Dynamic SMS Personalization India | Hyper-Personalized Bulk Messaging',
    description: 'Send personalized bulk SMS campaigns with unique variables per recipient. Dynamic SMS with CSV upload, API triggers, A/B testing & live preview. Ads Indiaa — India\'s top provider.',
    keywords: 'dynamic SMS India, personalized bulk SMS, variable SMS marketing India, hyper-personalization SMS',
  },
  'meta-ads': {
    title: 'Meta & Facebook Ads Management India | High-ROI Campaigns',
    description: 'Scale your business with data-driven Meta and Facebook Ads management in India. Expert audience targeting, creative A/B testing, funnel optimization & daily bid management. Ads Indiaa.',
    keywords: 'Meta ads India, Facebook ads management India, Instagram ads India, performance marketing India',
  },
  'graphic-design': {
    title: 'Digital Branding & Graphic Design India | Logos, Brand Identity & Creatives',
    description: 'Professional digital branding & graphic design services in India. Logos, brand identity, social media creatives, UI/UX & ad designs. Build a premium brand with Ads Indiaa.',
    keywords: 'graphic design India, digital branding India, logo design India, brand identity India, social media design India',
  },
  'web-design': {
    title: 'Web Design & Development India | SEO-Optimized, Fast & Modern Sites',
    description: 'Get a lightning-fast, SEO-optimized website built with Next.js & modern tech. High-converting, mobile-first websites for businesses in India. Web design & app development by Ads Indiaa.',
    keywords: 'web design India, web development India, Next.js development India, SEO-optimized web design, custom website India',
  },
  'voice-solutions': {
    title: 'Voice IVR Solutions India | Missed Call Marketing & Voice Broadcasting',
    description: 'Professional voice & IVR solutions in India — multi-level IVR menus, missed call marketing, voice broadcasting & virtual numbers. Automate your business calls with Ads Indiaa.',
    keywords: 'IVR solutions India, voice broadcasting India, missed call marketing India, virtual number India',
  },
  'rcs-messaging': {
    title: 'RCS Business Messaging India | Rich Media, Verified & 5x Higher Engagement',
    description: 'Upgrade from SMS to RCS Business Messaging in India. Send interactive rich media messages with images, carousels & action buttons from a verified brand profile. Ads Indiaa.',
    keywords: 'RCS messaging India, RCS business messaging, rich communication services India, verified SMS India',
  },
  'ai-workflows': {
    title: 'AI Business Workflow Automation India | CRM Sync & Intelligent Triggers',
    description: 'Automate your business with AI-driven workflows in India. Seamless CRM sync, intelligent lead routing, real-time data triggers & custom automation logic. Ads Indiaa.',
    keywords: 'AI workflow automation India, business automation India, CRM automation India, marketing automation',
  },
  'meta-whatsapp-api': {
    title: 'Official Meta WhatsApp Business API India | Green Tick & Enterprise Messaging',
    description: 'Access the official Meta WhatsApp Business API in India. Get your green tick verification, high-volume broadcasting, CRM integration & GDPR compliance. Powered by Ads Indiaa.',
    keywords: 'WhatsApp Business API India, Meta WhatsApp API, WhatsApp green tick India, enterprise WhatsApp India',
  },
}

const defaultMeta = {
  title: 'Premium Digital Service | Ads Indiaa',
  description: 'Explore Ads Indiaa\'s premium digital marketing and SMS communication services designed for businesses across India.',
  keywords: 'digital marketing services India, bulk SMS India, Ads Indiaa',
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = serviceMeta[slug] || defaultMeta
  const url = `${BASE_URL}/services/${slug}`

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      images: ['/images/Ads_indiaa_logo.webp'],
    },
  }
}

// JSON-LD Service schema injected per service
export default async function ServiceSlugLayout({ children, params }) {
  const { slug } = await params
  const meta = serviceMeta[slug] || defaultMeta
  const url = `${BASE_URL}/services/${slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: meta.title.split('|')[0].trim(),
    description: meta.description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Ads Indiaa',
      url: BASE_URL,
    },
    areaServed: 'IN',
    serviceType: 'Digital Marketing & Communication',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}
