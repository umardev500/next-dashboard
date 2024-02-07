import { type SidebarMenuType } from '@/types/menu'

export interface SidebarBtnProps {
  open: boolean
  menu: SidebarMenuType
  sub?: boolean
  className?: string
  dotClassName?: string
  iconClassName?: string
}
