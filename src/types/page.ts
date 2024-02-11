import type Lng from '@/app/i18n/en.json'
export type Lang = 'en' | 'id'

export interface PageProps {
  params: {
    lng: Lang
  }
  children: React.ReactNode
}

export interface ClientPageProps {
  dict: typeof Lng
}
