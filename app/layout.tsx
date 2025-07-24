import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AEGIS LLP - 地方自治体のデジタル変革パートナー',
  description: '地方自治体のデジタル変革を支援する専門家集団。AI・IoT技術を活用した革新的なソリューションで、行政サービスの効率化と市民満足度向上を実現します。',
  generator: 'Next.js',
  keywords: '地方自治体, デジタル変革, DX, スマートシティ, 行政サービス, AI, IoT',
  authors: [{ name: 'AEGIS LLP' }],
  openGraph: {
    title: 'AEGIS LLP - 地方自治体のデジタル変革パートナー',
    description: '地方自治体のデジタル変革を支援する専門家集団',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'AEGIS LLP',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}