import React from 'react'

export interface LabelProps {
  className?: string
  id?: string
  children?: React.ReactNode
}

export const Label: React.FC<LabelProps> = (props) => {
  const { className, id, children } = props

  return (
    <label htmlFor={id} className={`${className} block mb-2 text-sm font-medium text-gray-900`}>
      {children}
    </label>
  )
}
