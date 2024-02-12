'use client'

import { Collapse, SidebarMenu } from '@/components/atoms'
import { AppContext, type AppContextType } from '@/context'
import { type SidebarMenuType } from '@/types/menu'
import { Lexend_Deca } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { Fragment, useContext } from 'react'

const lexend = Lexend_Deca({ subsets: ['latin'], fallback: ['system-ui'] })

interface Props {
  menu: SidebarMenuType[]
}

export const SidebarMenuList = ({ menu }: Props) => {
  const ctx = useContext<AppContextType>(AppContext)
  const lng = ctx.lng
  const pathname = usePathname()

  /**
   * Combines the provided link with the language if available.
   *
   * @param {string | undefined} href - The link to be combined with the language.
   * @return {string} The combined link with the language, if available.
   */
  const combineLinkWithLang = (href: string | undefined) => {
    let menuHref = href
    if (lng) menuHref = `/${lng}${href}`
    return menuHref
  }

  return (
    <nav className="flex flex-col mt-10">
      {menu.map((item, index) => {
        // TODO
        const menuHref = combineLinkWithLang(item.href)

        let isActive = pathname === menuHref
        const existInDropdown = item.children?.filter((i) => {
          let menuHref = i.href
          if (lng) menuHref = `/${lng}${i.href}`

          return menuHref === pathname
        })

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
                        const menuHref = combineLinkWithLang(child.href)
                        const isChildActive = pathname === menuHref
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
