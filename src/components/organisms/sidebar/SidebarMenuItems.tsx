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
    href: '/file-manager',
    icon: <FileImageDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: <ChartBarDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Products',
    href: '#',
    icon: <PackageDuotone className="w-[18px] h-[18px] fill-current" />,
    open: true,
    children: [
      {
        name: 'All Products',
        href: '/products',
      },
      {
        name: 'New Products',
        href: '/products?status=new',
      },
      {
        name: 'Draft Products',
        href: '/products?status=draft',
      },
      {
        name: 'Deleted Products',
        href: '/products?status=deleted',
      },
    ],
  },
  {
    name: 'Orders',
    href: '/',
    icon: <ShoppingCartDuotone className="w-[18px] h-[18px] fill-current" />,
    children: [
      {
        name: 'All orders',
        href: '/',
      },
      {
        name: 'Pending orders',
        href: '/',
      },
      {
        name: 'Canceled orders',
        href: '/',
      },
      {
        name: 'Settlement orders',
        href: '/',
      },
    ],
  },
  {
    name: 'Users',
    href: '/',
    icon: <UserDuotone className="w-[18px] h-[18px] fill-current" />,
    children: [
      {
        name: 'All Users',
        href: '/',
      },
      {
        name: 'New Users',
        href: '/',
      },
      {
        name: 'Inactive users',
        href: '/',
      },
      {
        name: 'Deleted users',
        href: '/',
      },
    ],
  },
  {
    name: 'Support & Help',
  },
  {
    name: 'Supports',
    href: '/supports',
    icon: <HeadsetDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Live Chat',
    href: '/live-chat',
    icon: <TelegramDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Settings',
  },
  {
    name: 'Roles & Permissions',
    href: '/roles-permission',
    icon: <FolderLockDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Account',
    href: '/account',
    icon: <UserGearDuotone className="w-[18px] h-[18px] fill-current" />,
  },
  {
    name: 'Sign Out',
    href: '/signout',
    icon: <SignoutDuotone className="w-[18px] h-[18px] fill-current" />,
  },
]
