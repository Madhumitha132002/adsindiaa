const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Our Clients | 5000+ Businesses Trust Ads Indiaa Across India',
  description:
    'Ads Indiaa is trusted by 5000+ clients across India — including colleges, institutions, enterprises, and startups. See the brands that power their digital marketing & bulk SMS with us.',
  keywords: [
    'Ads Indiaa clients',
    'bulk SMS clients India',
    'digital marketing clients India',
    'SMS service customers India',
  ],
  alternates: { canonical: `${BASE_URL}/clients` },
  openGraph: {
    title: 'Our Clients | 5000+ Businesses Trust Ads Indiaa',
    description: '5000+ businesses across India trust Ads Indiaa for bulk SMS, WhatsApp marketing & digital marketing. See our clients.',
    url: `${BASE_URL}/clients`,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'Ads Indiaa Clients' }],
  },
}

export default function ClientsLayout({ children }) {
  return children
}

