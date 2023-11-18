import { type SidebarMenuType } from '@/types/menu'
import Link from 'next/link'

interface Props {
  menu: SidebarMenuType
}

export const SidebarMenu = ({ menu }: Props) => {
  return (
    <>
      <Link
        href={menu.href as string}
        className="flex items-center px-3 py-2 mx-3 my-0.5 capitalize rounded-md transition-colors duration-200 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        {menu?.icon && <span className="me-2 text-gray-800">{menu.icon}</span>}
        {menu.name}
      </Link>
    </>
  )
}
