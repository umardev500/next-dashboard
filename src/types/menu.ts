import { type SidebarBtnProps } from '@/types'
import type React from 'react'
import { type ReactElement } from 'react'

export interface SidebarMenuType {
  name: string
  href?: string
  icon?: ReactElement
  open?: boolean
  button?: (props: SidebarBtnProps) => React.ReactElement
  children?: Array<{
    name: string
    href: string
    button?: (props: SidebarBtnProps) => React.ReactElement
  }>
}
