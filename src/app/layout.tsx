import i18n from 'i18next';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
type Locale = 'en-US' | 'fr-FR' | 'de-DE';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  params: { lang: Locale; currency: string };
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
