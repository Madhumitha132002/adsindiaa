const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Our Services | Bulk SMS, WhatsApp Marketing, Meta Ads & More',
  description:
    'Explore all 12 digital marketing & SMS services by Ads Indiaa — promotional SMS, transactional SMS, WhatsApp marketing, OTP SMS, dynamic SMS, Meta Ads, web design, branding, voice IVR, RCS messaging, and AI workflows.',
  keywords: [
    'bulk SMS services India',
    'WhatsApp marketing service',
    'Meta ads management India',
    'OTP SMS service India',
    'transactional SMS service',
    'promotional SMS service India',
    'digital marketing services India',
    'web design services India',
    'voice IVR solution India',
    'RCS messaging India',
    'AI workflow automation',
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'All Services | Ads Indiaa — Bulk SMS, WhatsApp & Digital Marketing',
    description:
      'Discover Ads Indiaa\'s full suite of 12 digital marketing & communication services — from bulk SMS to AI workflows.',
    url: `${BASE_URL}/services`,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'Ads Indiaa Services' }],
  },
  twitter: {
    title: 'Our Services | Ads Indiaa — Bulk SMS, WhatsApp & Digital Marketing',
    description: 'From bulk SMS to AI workflows — explore all 12 services by Ads Indiaa.',
    images: ['/images/Ads_indiaa_logo.webp'],
  },
}

export default function ServicesLayout({ children }) {
  return children
}

