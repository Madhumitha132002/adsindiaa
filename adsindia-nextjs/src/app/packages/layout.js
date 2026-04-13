const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Pricing Packages | Bulk SMS & Digital Marketing Plans India',
  description:
    'Explore Ads Indiaa\'s flexible pricing packages for bulk SMS, WhatsApp marketing, Meta Ads & digital marketing services in India. Startup, Business Pro & Enterprise plans. Transparent pricing, no hidden fees.',
  keywords: [
    'bulk SMS pricing India',
    'digital marketing packages India',
    'WhatsApp marketing pricing',
    'Ads Indiaa packages',
    'bulk SMS plan India',
    'affordable digital marketing India',
  ],
  alternates: { canonical: `${BASE_URL}/packages` },
  openGraph: {
    title: 'Pricing Packages | Ads Indiaa — Bulk SMS & Digital Marketing India',
    description: 'Flexible pricing tiers from Ads Indiaa for bulk SMS, WhatsApp marketing & digital marketing. Startup to Enterprise plans.',
    url: `${BASE_URL}/packages`,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'Ads Indiaa Packages' }],
  },
  twitter: {
    title: 'Pricing Packages | Ads Indiaa',
    description: 'Transparent pricing for bulk SMS, WhatsApp & digital marketing. Startup to Enterprise plans.',
    images: ['/images/Ads_indiaa_logo.webp'],
  },
}

export default function PackagesLayout({ children }) {
  return children
}

