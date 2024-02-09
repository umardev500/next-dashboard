import { Button, type ButtonProps } from '@/components/atoms'
import React from 'react'

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  const { children, className } = props

  return (
    <Button
      {...props}
      className={`${className} bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 text-white`}
    >
      {children}
    </Button>
  )
}
