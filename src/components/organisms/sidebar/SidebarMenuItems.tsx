import {
  ChartBarDuotone,
  FileImageDuotone,
  FolderLockDuotone,
  HeadsetDuotone,
  PackageDuotone,
  ShoppingCartDuotone,
  SignoutDuotone,
  TelegramDuotone,
  UserDuotone,
  UserGearDuotone,
} from '@/components/atoms'
import { type SidebarMenuType } from '@/types/menu'

export const SidebarMenuItems: SidebarMenuType[] = [
  {
    name: 'Home',
  },
  {
    name: 'File manager',
    href: '/',
    icon: <FileImageDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Analytics',
    href: '/',
    icon: <ChartBarDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Products',
    href: '/',
    icon: <PackageDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Orders',
    href: '/',
    icon: <ShoppingCartDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Users',
    href: '/',
    icon: <UserDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Support & Help',
  },
  {
    name: 'Supports',
    href: '/',
    icon: <HeadsetDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Live Chat',
    href: '/',
    icon: <TelegramDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Settings',
  },
  {
    name: 'Roles & Permissions',
    href: '/',
    icon: <FolderLockDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Account',
    href: '/',
    icon: <UserGearDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Sign Out',
    href: '/',
    icon: <SignoutDuotone className="w-[18px] h-[18px] fill-current" />,
  },
]
