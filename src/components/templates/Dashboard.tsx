'use client'

import { Sidebar } from '@/components/organisms'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const Dashboard = ({ children }: Props) => {
  return (
    <main>
      <ProgressBar
        color="#3b82f6"
        height="4px"
        options={{
          showSpinner: false,
        }}
      />
      {/* Sidebar */}
      <Sidebar />

      {/* Dynamic content */}
      {children}
    </main>
  )
}
