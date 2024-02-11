import { Button, type ButtonProps } from '@/components/atoms'
import React from 'react'

export const ButtonDanger: React.FC<ButtonProps> = (props) => {
  const { children, className } = props

  return (
    <Button
      {...props}
      className={`${className} bg-red-700 hover:bg-red-800 active:bg-red-900 focus:ring-red-300 text-white`}
    >
      {children}
    </Button>
  )
}
