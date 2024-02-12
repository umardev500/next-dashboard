'use client'

import Criteria from '@/app/i18n/id/criteria.json'
import {
  FolderLockDuotone,
  HeadsetDuotone,
  SignoutDuotone,
  StackDuotone,
  TelegramDuotone,
  UserDuotone,
  UserGearDuotone,
} from '@/components/atoms'
import { NewCriteriaModal, NewSubCriteriaModal } from '@/components/organisms/criteria'
import { NewUserModal } from '@/components/organisms/user'

const def = {
  sidebar: {
    menus: [
      {
        name: 'Home',
      },
      {
        name: 'Kriteria',
        href: '/criterias',
        icon: <StackDuotone className="w-[18px] h-[18px] fill-current" />,
        children: [
          {
            name: 'Semua Kriteria',
            href: '/criterias',
          },
          {
            name: 'Tambah Kriteria',
            href: '/criterias/new',
            button: (props: any) => <NewCriteriaModal {...props} />,
          },
          {
            name: 'Sub Kriteria',
            href: '/criterias/sub',
          },
          {
            name: 'Tambah Sub Kriteria',
            href: '/criterias/sub/new',
            button: (props: any) => <NewSubCriteriaModal {...props} />,
          },
        ],
      },
      {
        name: 'Data Alternatif',
        href: '/users',
        icon: <UserDuotone className="w-[18px] h-[18px] fill-current" />,
        children: [
          {
            name: 'Semua Data',
            href: '/users',
          },
          {
            name: 'Tambah Data Baru',
            href: '/users/new-users',
            button: (props: any) => <NewUserModal {...props} />,
          },
          {
            name: 'Alternatif Non-Aktif',
            href: '/users/inactive',
          },
          {
            name: 'Dihapus',
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
    ],
  },
  criteria: {
    ...Criteria,
  },
}

export default def
