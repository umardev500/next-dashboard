import { Sidebar } from '@/components/organisms'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const Dashboard = ({ children }: Props) => {
  return (
    <main>
      {/* Sidebar */}
      <Sidebar />

      {/* Dynamic content */}
      {children}
    </main>
  )
}
