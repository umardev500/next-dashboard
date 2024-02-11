'use client'

import { SimpleBar } from '@/components/atoms'
import { Sidebar } from '@/components/organisms'
import { AppProvider } from '@/context'
import { type ClientPageProps } from '@/types'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { type ReactNode } from 'react'
import 'simplebar-react/dist/simplebar.min.css'

interface Props extends ClientPageProps {
  children?: ReactNode
}

export const Dashboard = (props: Props) => {
  const { children, dict, lng } = props
  console.log('RENDER DASHBOARD', lng)

  return (
    <AppProvider lng={lng} dict={dict}>
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
        <div className="fixed overflow-hidden left-[270px] top-0 bottom-0 right-0">
          <SimpleBar className="h-full">{children}</SimpleBar>
        </div>
      </main>
    </AppProvider>
  )
}
