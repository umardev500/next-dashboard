import React from 'react'

export interface InputProps {
  placeholder?: string
  id?: string
  type?: 'password' | 'text'
}

export const Input: React.FC<InputProps> = (props) => {
  const { placeholder, id, type = 'text' } = props

  return (
    <>
      <input
        type={type}
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-transparent block w-full p-2.5`}
        placeholder={placeholder}
      />
    </>
  )
}
