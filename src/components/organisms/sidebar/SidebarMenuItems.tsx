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
import { NewUserModal } from '@/components/organisms/user/modal'

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
    href: '/products',
    icon: <PackageDuotone className="w-[18px] h-[18px] fill-current" />,
    open: true,
    children: [
      {
        name: 'All Products',
        href: '/products',
      },
      {
        name: 'New Products',
        href: '/products/new',
      },
      {
        name: 'Draft Products',
        href: '/products/draft',
      },
      {
        name: 'Deleted Products',
        href: '/products/deleted',
      },
    ],
  },
  {
    name: 'Orders',
    href: '/orders',
    icon: <ShoppingCartDuotone className="w-[18px] h-[18px] fill-current" />,
    children: [
      {
        name: 'All orders',
        href: '/orders/all',
      },
      {
        name: 'Pending orders',
        href: '/orders/pending',
      },
      {
        name: 'Canceled orders',
        href: '/orders/canceled',
      },
      {
        name: 'Settlement orders',
        href: '/orders/settlement',
      },
    ],
  },
  {
    name: 'Users',
    href: '/users',
    icon: <UserDuotone className="w-[18px] h-[18px] fill-current" />,
    children: [
      {
        name: 'All Users',
        href: '/users',
      },
      {
        name: 'New Users',
        href: '/users/new-users',
        button: (props) => <NewUserModal {...props} />,
      },
      {
        name: 'Inactive users',
        href: '/users/inactive',
      },
      {
        name: 'Deleted users',
        href: '/users/deleted',
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
