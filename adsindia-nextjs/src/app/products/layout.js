const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Our Products | Bulk SMS Platform, WhatsApp Panel & Marketing Tools',
  description:
    'Explore Ads Indiaa\'s digital products — bulk SMS platform, WhatsApp broadcasting panel, OTP gateway, AI workflow tools and more. Built for businesses of all sizes in India.',
  keywords: [
    'bulk SMS platform India',
    'WhatsApp panel India',
    'OTP SMS gateway India',
    'digital marketing tools India',
    'Ads Indiaa products',
  ],
  alternates: { canonical: `${BASE_URL}/products` },
  openGraph: {
    title: 'Our Products | Ads Indiaa — SMS Platform & Marketing Tools India',
    description: 'Discover Ads Indiaa\'s product suite: bulk SMS platform, WhatsApp panel, OTP gateway & AI tools for Indian businesses.',
    url: `${BASE_URL}/products`,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'Ads Indiaa Products' }],
  },
}

export default function ProductsLayout({ children }) {
  return children
}

