import { SimpleBar } from '@/components/atoms'
import { SidebarMenuList } from '@/components/molecules'
import { SidebarMenuItems } from '@/components/organisms/sidebar/SidebarMenuItems'

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 h-full border-e border-gray-100 w-[270px] bg-white">
      <SimpleBar className="h-[calc(100%)]">
        <SidebarMenuList menu={SidebarMenuItems} />
      </SimpleBar>
    </aside>
  )
}
