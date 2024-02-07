import { CaretDownBold } from '@/components/atoms'
import { type SidebarMenuType } from '@/types/menu'
import Link from 'next/link'
import React from 'react'

interface Props {
  menu: SidebarMenuType
  isActive?: boolean
  sub?: boolean
  collapse?: boolean
  isOpen?: boolean
  onClick?: () => void
}

export const SidebarMenu: React.FC<Props> = (props) => {
  const { menu, isActive = false, sub, collapse, isOpen = false, onClick } = props
  const isButton = props.menu.button !== undefined

  const activeColor = 'text-indigo-700'
  const iconActiveColor = 'text-indigo-800 group-hover:text-gray-800'
  const menuActive = `${isActive ? activeColor : 'text-gray-700'}`
  const iconClassName = `${isActive ? iconActiveColor : 'text-gray-800'}`
  const subClassName = `${isActive ? 'text-gray-900' : 'text-gray-500'}`

  const className = `group cursor-pointer flex items-center px-3 py-2 mx-3 my-0.5 capitalize rounded-md transition-colors duration-200 text-sm font-medium ${
    sub ? subClassName : menuActive
  } hover:bg-gray-100 hover:text-gray-900`

  const dotClassName = `me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200 ${
    isActive
      ? 'bg-indigo-700 ring-[1px] ring-indigo-700 group-hover:bg-gray-800 group-hover:ring-gray-800'
      : 'opacity-40'
  }`

  return (
    <>
      {collapse ? (
        <div className={`${className} cursor-pointer`} onClick={onClick}>
          <div className="flex-1 flex items-center justify-between">
            <span className="flex items-center">
              {menu?.icon && <span className={`me-2 ${iconClassName}`}>{menu.icon}</span>}{' '}
              {menu.name}
            </span>
            <CaretDownBold
              className={`w-4 h-4 fill-gray-500 transition-transform duration-300 ${
                isOpen && '-rotate-90'
              }`}
            />
          </div>
        </div>
      ) : isButton ? (
        menu.button?.({ menu, sub, open: false, className, dotClassName, iconClassName })
      ) : (
        <Link href={menu.href as string} className={className}>
          {sub ? (
            <>
              <span className={dotClassName} />
            </>
          ) : (
            <>{menu?.icon && <span className={`me-2 ${iconClassName}`}>{menu.icon}</span>}</>
          )}
          {menu.name}
        </Link>
      )}
    </>
  )
}
