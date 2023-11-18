import { type SidebarMenuType } from '@/types/menu'
import Link from 'next/link'

interface Props {
  menu: SidebarMenuType
  sub?: boolean
}

export const SidebarMenu = ({ menu, sub = false }: Props) => {
  return (
    <>
      <Link
        href={menu.href as string}
        className={`flex items-center px-3 py-2 mx-3 my-0.5 capitalize rounded-md transition-colors duration-200 text-sm font-medium ${
          sub ? 'text-gray-500' : 'text-gray-700'
        } hover:bg-gray-100 hover:text-gray-900`}
      >
        {sub ? (
          <>
            <span className="me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200 opacity-40" />
          </>
        ) : (
          <>{menu?.icon && <span className="me-2 text-gray-800">{menu.icon}</span>}</>
        )}
        {menu.name}
      </Link>
    </>
  )
}
