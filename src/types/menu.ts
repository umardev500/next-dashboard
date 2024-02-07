import type React from 'react'
import { type ReactElement } from 'react'

export interface SidebarMenuType {
  name: string
  href?: string
  icon?: ReactElement
  open?: boolean
  children?: Array<{
    name: string
    href: string
    modal?: React.ReactNode
  }>
}
