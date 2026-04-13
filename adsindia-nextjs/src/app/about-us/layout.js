const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'About Us | Leading Bulk SMS & Digital Marketing Company in India',
  description:
    "Learn about Ads Indiaa — India's leading digital marketing company and bulk SMS service provider. Serving 5000+ clients with transactional SMS, promotional SMS, SEO, branding & web design since 2015.",
  keywords: [
    'about Ads Indiaa',
    'digital marketing company India',
    'bulk SMS company India',
    'Ads Indiaa Walajapet',
    'top digital marketing agency India',
    'bulk SMS for colleges India',
    'transactional SMS provider India',
  ],
  alternates: { canonical: `${BASE_URL}/about-us` },
  openGraph: {
    title: 'About Ads Indiaa | Leading Bulk SMS & Digital Marketing Company in India',
    description:
      'Ads Indiaa is a trusted bulk SMS service provider and digital marketing company in India. Serving 5000+ clients with transactional SMS, SEO, branding & web design.',
    url: `${BASE_URL}/about-us`,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'About Ads Indiaa' }],
  },
  twitter: {
    title: 'About Ads Indiaa | Bulk SMS & Digital Marketing India',
    description: 'Meet the team behind India\'s top bulk SMS & digital marketing agency. 5000+ clients, 24/7 support.',
    images: ['/images/Ads_indiaa_logo.webp'],
  },
}

export default function AboutLayout({ children }) {
  return children
}

