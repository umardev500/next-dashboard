'use client'

import { Modal } from '@/components/organisms'
import { type SidebarBtnProps } from '@/types'
import React from 'react'

export const NewUserModal: React.FC<SidebarBtnProps> = ({
  open,
  menu,
  sub = false,
  className,
  dotClassName,
  iconClassName,
}) => {
  const onClose = () => {
    console.log('modal closed')
  }

  return (
    <>
      <Modal
        open={open}
        button={({ toggler }) => (
          <div
            className={`${className}`}
            onClick={() => {
              toggler((prev) => !prev)
            }}
          >
            {sub ? (
              <>
                <span className={dotClassName} />
              </>
            ) : (
              <>{menu?.icon && <span className={`me-2 ${iconClassName}`}>{menu.icon}</span>}</>
            )}
            {menu.name}
          </div>
        )}
        onClose={onClose}
      >
        {({ isOpen, close }) => (
          <>
            <div></div>
          </>
        )}
      </Modal>
    </>
  )
}
