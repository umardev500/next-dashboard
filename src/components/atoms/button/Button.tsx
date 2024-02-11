import React from 'react'

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, onClick } = props

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} text-sm whitespace-nowrap px-5 py-2.5 rounded-lg font-medium focus:ring-4 focus:outline-none`}
    >
      {children}
    </button>
  )
}
