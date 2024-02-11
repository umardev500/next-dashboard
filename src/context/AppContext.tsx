import { type ClientPageProps, type DictType, type Lang } from '@/types'
import React from 'react'

export const AppContext = React.createContext({} as any)

interface Props extends ClientPageProps {}

export interface AppContextType {
  dict: DictType
  lng?: Lang
}

export const AppProvider: React.FC<Props> = (props) => {
  const { children, dict, lng } = props

  const value: AppContextType = {
    dict,
    lng,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
