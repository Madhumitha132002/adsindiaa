const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Digital Marketing Services | SEO, Meta Ads, Branding & Web Design India',
  description:
    'Full-suite digital marketing services by Ads Indiaa — SEO, Meta Ads, digital branding, web development & content marketing for businesses across India. Scale your brand digitally.',
  keywords: [
    'digital marketing services India',
    'SEO services India',
    'Meta ads agency India',
    'online marketing India',
    'branding agency India',
    'social media marketing India',
  ],
  alternates: { canonical: `${BASE_URL}/digital-marketing` },
  openGraph: {
    title: 'Digital Marketing Services | Ads Indiaa — SEO, Meta Ads & Branding India',
    description: 'Scale your business with full-suite digital marketing from Ads Indiaa — SEO, Meta Ads, branding & web design.',
    url: `${BASE_URL}/digital-marketing`,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'Digital Marketing Ads Indiaa' }],
  },
}

export default function DigitalMarketingLayout({ children }) {
  return children
}

