import { Button, type ButtonProps } from '@/components/atoms'
import React from 'react'

export const ButtonSecondary: React.FC<ButtonProps> = (props) => {
  const { children, className } = props

  return (
    <Button
      {...props}
      className={`${className} bg-gray-200 hover:bg-gray-300 focus:ring-gray-100 text-gray-700 hover:text-gray-800`}
    >
      {children}
    </Button>
  )
}
