const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Privacy Policy | Ads Indiaa',
  description: 'Read Ads Indiaa\'s privacy policy — how we collect, use, and protect your personal data when using our bulk SMS and digital marketing services.',
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
}

export default function PrivacyLayout({ children }) {
  return children
}
