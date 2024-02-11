import '@/assets/styles/app.scss'
import { Dashboard } from '@/components/templates'
import { type PageProps } from '@/types'
import { dir } from 'i18next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout(props: PageProps) {
  const { children, params } = props
  const { lng } = params

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  )
}
