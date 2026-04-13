const BASE_URL = 'https://www.adsindiaa.in'

export const metadata = {
  title: 'Cookie Policy | Ads Indiaa',
  description: 'Learn about how Ads Indiaa uses cookies on our website and how you can manage your cookie preferences.',
  alternates: { canonical: `${BASE_URL}/cookie-policy` },
  robots: { index: true, follow: true },
}

export default function CookieLayout({ children }) {
  return children
}
