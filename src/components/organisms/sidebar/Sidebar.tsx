import { SimpleBar } from '@/components/atoms'
import { SidebarMenuList } from '@/components/molecules'
import { AppContext, type AppContextType } from '@/context'
import { useContext } from 'react'

export const Sidebar = () => {
  const ctx = useContext<AppContextType>(AppContext)
  const menus = ctx.dict.sidebar.menus

  return (
    <aside className="fixed outline-none bottom-0 h-full border-e border-gray-100 w-[270px] bg-white">
      <SimpleBar className="h-[calc(100%)]">
        <SidebarMenuList menu={menus} />
      </SimpleBar>
    </aside>
  )
}
