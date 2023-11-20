'use client'

import { Collapse, SidebarMenu } from '@/components/atoms'
import { type SidebarMenuType } from '@/types/menu'
import { Lexend_Deca } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

const lexend = Lexend_Deca({ subsets: ['latin'] })

interface Props {
  menu: SidebarMenuType[]
}

export const SidebarMenuList = ({ menu }: Props) => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col mt-10">
      {menu.map((item, index) => {
        // TODO
        let isActive = pathname === item.href
        const existInDropdown = item.children?.filter((i) => i.href === pathname)
        if (existInDropdown?.length) {
          isActive = true
        }

        return (
          <Fragment key={index}>
            {item.href ? (
              <>
                {item.children ? (
                  <>
                    <Collapse
                      defaultOpen={item.open ?? isActive}
                      header={(status, handleToggle) => {
                        return (
                          <SidebarMenu
                            onClick={handleToggle}
                            isOpen={status}
                            menu={item}
                            isActive={isActive}
                            collapse
                          />
                        )
                      }}
                    >
                      {item.children.map((child, i) => {
                        // TODO
                        const isChildActive = pathname === child.href

                        return (
                          <Fragment key={i}>
                            <SidebarMenu sub menu={child} isActive={isChildActive} />
                          </Fragment>
                        )
                      })}
                    </Collapse>
                  </>
                ) : (
                  <SidebarMenu isActive={isActive} menu={item} />
                )}
              </>
            ) : (
              <h6
                className={`${lexend.className} px-6 mt-7 mb-2 truncate tracking-widest text-[11px] uppercase font-medium text-gray-500`}
              >
                {item.name}
              </h6>
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
