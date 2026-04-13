const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Blog | Digital Marketing Insights, SMS Tips & Industry Updates',
  description:
    'Stay ahead with Ads Indiaa\'s blog — latest insights on bulk SMS, WhatsApp marketing, Meta Ads, SEO trends, and digital marketing strategies for businesses across India.',
  keywords: [
    'digital marketing blog India',
    'bulk SMS tips India',
    'WhatsApp marketing insights',
    'Meta ads tips India',
    'SEO blog India',
    'Ads Indiaa blog',
  ],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Blog | Digital Marketing & SMS Insights by Ads Indiaa',
    description: 'Read our latest blog posts on bulk SMS, WhatsApp marketing, Meta Ads & SEO strategies. Stay updated with Ads Indiaa.',
    url: `${BASE_URL}/blog`,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'Ads Indiaa Blog' }],
  },
  twitter: {
    title: 'Blog | Ads Indiaa — Digital Marketing & SMS Tips',
    description: 'Latest insights on bulk SMS, WhatsApp marketing, Meta Ads & SEO from Ads Indiaa.',
    images: ['/images/Ads_indiaa_logo.webp'],
  },
}

export default function BlogLayout({ children }) {
  return children
}

