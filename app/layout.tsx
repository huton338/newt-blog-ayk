import { Badge } from '@/components/Badge'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/globals.css'
import styles from '@/styles/Layout.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ゆる活あやかブログ',
  description: 'ゆる活あやかのブログです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.Wrapper}>
          <Header />
          {children}
          <Footer />
          <Badge />
        </div>
      </body>
    </html>
  )
}
