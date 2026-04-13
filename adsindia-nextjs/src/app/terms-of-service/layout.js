const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Terms of Service | Ads Indiaa',
  description: 'Review Ads Indiaa\'s terms and conditions for using our bulk SMS and digital marketing services in India.',
  alternates: { canonical: `${BASE_URL}/terms-of-service` },
  robots: { index: true, follow: true },
}

export default function TermsLayout({ children }) {
  return children
}
