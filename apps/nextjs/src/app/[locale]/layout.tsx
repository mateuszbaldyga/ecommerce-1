import 'styles/globals.css'

import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React from 'react'
import { ArGlobalStoreProvider } from 'store/ArGlobalStore'
import { ArHeader } from 'components/ArHeader'
import { Assistant } from 'next/font/google'

type Props = {
  readonly children: React.ReactNode
  readonly params: { locale: string }
}

export const metadata: Metadata = {
  title: 'Ar Root Layout',
  description: 'Ar Root Layout Description',
}

const assistant = Assistant({ subsets: ['latin'], variable: '--font-sans' })

async function Providers({ children }: { readonly children: React.ReactNode }) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ArGlobalStoreProvider>{children}</ArGlobalStoreProvider>
    </NextIntlClientProvider>
  )
}

export default async function ArRootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body className={`${assistant.variable} font-sans font-light`}>
        <ArHeader />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
