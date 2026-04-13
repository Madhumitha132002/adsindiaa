const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Contact Ads Indiaa | Get a Free Quote for Bulk SMS & Digital Marketing',
  description:
    "Contact Ads Indiaa's expert team for bulk SMS, WhatsApp marketing, Meta Ads, SEO & web design services. Located in Walajapet, Tamil Nadu. Call +91 73391 09747 or email adsindiaa@gmail.com.",
  keywords: [
    'contact Ads Indiaa',
    'bulk SMS company contact India',
    'digital marketing agency contact India',
    'Ads Indiaa phone number',
    'Ads Indiaa Walajapet',
    'get bulk SMS quote India',
  ],
  alternates: { canonical: `${BASE_URL}/contact-us` },
  openGraph: {
    title: 'Contact Ads Indiaa | Free Quote for Bulk SMS & Digital Marketing',
    description: 'Get in touch with Ads Indiaa. Call +91 73391 09747, WhatsApp us, or fill the form for a free consultation on bulk SMS & digital marketing.',
    url: `${BASE_URL}/contact-us`,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'Contact Ads Indiaa' }],
  },
  twitter: {
    title: 'Contact Ads Indiaa | Bulk SMS & Digital Marketing India',
    description: 'Reach out to Ads Indiaa for bulk SMS, WhatsApp marketing & digital marketing services. 24/7 support.',
    images: ['/images/Ads_indiaa_logo.webp'],
  },
}

// JSON-LD for contact page
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Ads Indiaa',
  url: `${BASE_URL}/contact-us`,
  description: 'Contact page for Ads Indiaa — bulk SMS and digital marketing company in India.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Ads Indiaa',
    telephone: '+91-73391-09747',
    email: 'adsindiaa@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No: 63 MBT Trunk Road',
      addressLocality: 'Walajapet',
      addressRegion: 'Tamil Nadu',
      postalCode: '632513',
      addressCountry: 'IN',
    },
  },
}

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  )
}

