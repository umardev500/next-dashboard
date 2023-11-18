import { type ReactNode } from 'react'
import SimpleBarReact from 'simplebar-react'

interface Props {
  children?: ReactNode
  className?: string
}

export const SimpleBar = ({ children, className }: Props) => {
  return <SimpleBarReact className={className}>{children}</SimpleBarReact>
}
