import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import MessagingSolution from '@/components/MessagingSolution';
import IndustrySolutions from '@/components/IndustrySolutions';
import Integrations from '@/components/Integrations';
import Clients from '@/components/Clients';
import WhyChooseUs from '@/components/WhyChooseUs';
import Cta from '@/components/Cta';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Ads Indiaa | #1 Bulk SMS & Digital Marketing Company in India',
  description:
    "India's most trusted bulk SMS service provider & digital marketing agency. Get transactional SMS, promotional SMS, WhatsApp marketing, OTP SMS, Meta Ads, SEO & web design. 5000+ happy clients across India.",
  keywords: [
    'bulk SMS service provider India',
    'digital marketing agency India',
    'transactional SMS service',
    'promotional SMS India',
    'WhatsApp marketing service India',
    'OTP SMS gateway India',
    'Meta ads management India',
    'SEO services India',
    'web design company India',
    'Ads Indiaa Walajapet',
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Ads Indiaa | #1 Bulk SMS & Digital Marketing Company in India',
    description:
      "India's most trusted bulk SMS & digital marketing agency — 5000+ clients. Transactional SMS, WhatsApp marketing, Meta Ads, SEO & web design.",
    url: BASE_URL,
    images: [{ url: '/images/Ads_indiaa_logo.webp', width: 1200, height: 630, alt: 'Ads Indiaa Home' }],
  },
  twitter: {
    title: 'Ads Indiaa | #1 Bulk SMS & Digital Marketing Company in India',
    description:
      "Trusted by 5000+ businesses across India. Bulk SMS, WhatsApp marketing, Meta Ads, SEO & web design.",
    images: ['/images/Ads_indiaa_logo.webp'],
  },
}

// JSON-LD: LocalBusiness schema for homepage
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'Ads Indiaa',
  image: `${BASE_URL}/images/Ads_indiaa_logo.webp`,
  url: BASE_URL,
  telephone: '+91-73391-09747',
  email: 'adsindiaa@gmail.com',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Online Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No: 63 MBT Trunk Road',
    addressLocality: 'Walajapet',
    addressRegion: 'Tamil Nadu',
    postalCode: '632513',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 12.9254, longitude: 79.3601 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '19:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '5000', bestRating: '5' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing & SMS Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bulk Promotional SMS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transactional SMS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
    ],
  },
}

export default function Home() {
  return (
    <main className="font-sans relative min-h-screen bg-[#F8FAFB] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="relative z-10">
        <Header />
        <div className="flex flex-col w-full">
          <Hero />
          <Services />
          <MessagingSolution />
          <IndustrySolutions />
          <Integrations />
          <Clients />
          <WhyChooseUs />
          <Cta />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </main>
  );
}
