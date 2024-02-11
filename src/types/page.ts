import type Dict from '@/app/i18n/en'
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
  lgn?: Lang
  children?: React.ReactNode
}
