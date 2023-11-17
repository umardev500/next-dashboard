import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const Dashboard = ({ children }: Props) => {
  return <>{children}</>
}
