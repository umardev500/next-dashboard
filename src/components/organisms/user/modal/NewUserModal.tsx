'use client'

import { ButtonPrimary, Input, Label } from '@/components/atoms'
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
        dialogClassName="max-w-sm"
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
            <div>
              <div className="mb-4">
                <Label id="fn">Full name</Label>
                <Input id="fn" placeholder="Jhon Doe" />
              </div>
              <div className="mb-4">
                <Label id="user">Username</Label>
                <Input id="user" placeholder="Enter username" />
              </div>
              <div className="mb-4">
                <Label id="pass">Password</Label>
                <Input id="pass" type="password" placeholder="Type the password" />
              </div>
              <div className="mb-4">
                <Label id="pass-confirm">Confir password</Label>
                <Input
                  id="pass-confirm"
                  type="password"
                  placeholder="Enter same password as before"
                />
              </div>

              <ButtonPrimary>Submit</ButtonPrimary>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
