import React from 'react'

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className } = props

  return (
    <button
      className={`${className} px-5 py-2.5 rounded-lg font-medium focus:ring-4 focus:outline-none`}
    >
      {children}
    </button>
  )
}
