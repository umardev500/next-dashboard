import { type ClientPageProps, type DictType } from '@/types'
import React from 'react'

export const AppContext = React.createContext({} as any)

interface Props extends ClientPageProps {}

export interface AppContextType {
  dict: DictType
}

export const AppProvider: React.FC<Props> = (props) => {
  const { children, dict } = props

  const value = {
    dict,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
