import { SidebarMenu } from '@/components/atoms'
import { type SidebarMenuType } from '@/types/menu'
import { Fragment } from 'react'

interface Props {
  menu: SidebarMenuType[]
}

export const SidebarMenuList = ({ menu }: Props) => {
  return (
    <nav className="flex flex-col mt-10">
      {menu.map((item, index) => {
        // TODO

        return (
          <Fragment key={index}>
            {item.href ? (
              <SidebarMenu menu={item} />
            ) : (
              <h6 className="px-6 mt-7 mb-2 truncate tracking-widest text-[11px] uppercase font-medium text-gray-500">
                {item.name}
              </h6>
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
