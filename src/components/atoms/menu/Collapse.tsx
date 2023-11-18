'use client'
import { useCallback, useState, type ReactNode } from 'react'

type HandleToggle = () => void

interface Props {
  children?: ReactNode
  header?: (status: boolean, handleToggle: HandleToggle) => JSX.Element
  defaultOpen?: boolean
}

export const Collapse = ({ children, header, defaultOpen = false }: Props) => {
  const [status, setStatus] = useState(defaultOpen)
  const handleToggle = useCallback(() => {
    setStatus((prev) => !prev)
  }, [])

  return (
    <>
      {header ? header(status, handleToggle) : null}
      <div
        className={`${status ? 'max-h-64' : 'max-h-0'} overflow-hidden transition-all duration-300`}
      >
        {children}
      </div>
    </>
  )
}
