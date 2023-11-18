import { type ReactElement } from 'react'

export interface SidebarMenuType {
  name: string
  href?: string
  icon?: ReactElement
  children?: Array<{
    name: string
    href: string
  }>
}
