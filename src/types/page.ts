import type Dict from '@/app/i18n/en.json'
export type Lang = 'en' | 'id'

export type DictType = typeof Dict

export interface PageProps {
  params: {
    lng: Lang
  }
  children: React.ReactNode
}

export interface ClientPageProps {
  dict: typeof Dict
  children?: React.ReactNode
}
