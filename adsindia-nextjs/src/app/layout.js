import { Inter, Poppins } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800']
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.adsindiaa.in'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ads Indiaa | #1 Bulk SMS & Digital Marketing Company in India',
    template: '%s | Ads Indiaa',
  },
  description:
    'Ads Indiaa is India\'s leading bulk SMS service provider & digital marketing agency. We offer transactional SMS, promotional SMS, WhatsApp marketing, Meta Ads, SEO, and web design. Serving 5000+ clients across India.',
  keywords: [
    'bulk SMS service provider India',
    'digital marketing company India',
    'transactional SMS India',
    'promotional SMS India',
    'WhatsApp marketing India',
    'Meta ads management India',
    'bulk SMS for colleges',
    'OTP SMS service',
    'SEO services India',
    'web design company India',
    'Ads Indiaa',
    'bulk messaging India',
  ],
  authors: [{ name: 'Ads Indiaa', url: BASE_URL }],
  creator: 'Ads Indiaa',
  publisher: 'Ads Indiaa',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Ads Indiaa',
    title: 'Ads Indiaa | #1 Bulk SMS & Digital Marketing Company in India',
    description:
      'India\'s most trusted bulk SMS provider & digital marketing agency. Serving 5000+ clients with transactional SMS, promotional SMS, WhatsApp marketing, SEO & web design.',
    images: [
      {
        url: '/images/Ads_indiaa_logo.webp',
        width: 1200,
        height: 630,
        alt: 'Ads Indiaa - Bulk SMS & Digital Marketing Company India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adsindiaa',
    creator: '@adsindiaa',
    title: 'Ads Indiaa | #1 Bulk SMS & Digital Marketing Company in India',
    description:
      'Trusted by 5000+ businesses across India. Bulk SMS, WhatsApp marketing, Meta Ads, SEO & web design services.',
    images: ['/images/Ads_indiaa_logo.webp'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: '/images/Ads_indiaa_logo.webp',
    shortcut: '/images/Ads_indiaa_logo.webp',
    apple: '/images/Ads_indiaa_logo.webp',
  },
  manifest: '/site.webmanifest',
  category: 'Digital Marketing',
  classification: 'Business & Technology',
}

// ─── Global Organization Schema ───
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ads Indiaa',
  alternateName: 'Ads India',
  url: BASE_URL,
  logo: `${BASE_URL}/images/Ads_indiaa_logo.webp`,
  description:
    'Ads Indiaa is India\'s leading bulk SMS service provider and digital marketing agency, serving 5000+ clients with transactional SMS, promotional SMS, WhatsApp marketing, Meta Ads, SEO, and web design.',
  foundingDate: '2015',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '50+' },
  areaServed: 'IN',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No: 63 MBT Trunk Road',
    addressLocality: 'Walajapet',
    addressRegion: 'Tamil Nadu',
    postalCode: '632513',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-73391-09747',
      contactType: 'sales',
      availableLanguage: ['English', 'Hindi', 'Tamil'],
      hoursAvailable: 'Mo-Sa 09:00-19:00',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-73391-09747',
      contactType: 'customer support',
      availableLanguage: ['English', 'Hindi', 'Tamil'],
      hoursAvailable: 'Mo-Su 00:00-23:59',
    },
  ],
  email: 'adsindiaa@gmail.com',
  sameAs: [
    'https://www.facebook.com/adsindiaa',
    'https://www.instagram.com/adsindiaa',
    'https://wa.me/917339109747',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '5000',
    bestRating: '5',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ads Indiaa',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/services?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        {/* External resources */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

        {/* Geo tags for Indian audience */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Walajapet, Tamil Nadu, India" />
        <meta name="geo.position" content="12.9254;79.3601" />
        <meta name="ICBM" content="12.9254, 79.3601" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        {/* Global JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
