'use client'

import { ButtonPrimary, Input, Label } from '@/components/atoms'
import { Modal } from '@/components/organisms'
import { type SidebarBtnProps } from '@/types'
import React from 'react'

export interface NewCriteriaModalType extends SidebarBtnProps {
  button?: (toggler: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactElement
}

export const NewCriteriaModal: React.FC<NewCriteriaModalType> = (props) => {
  const { open, menu, sub = false, className, dotClassName, iconClassName, button } = props

  const onClose = () => {
    console.log('modal closed')
  }

  return (
    <>
      <Modal
        dialogClassName="max-w-xs"
        open={open}
        button={({ toggler }) => {
          if (button !== undefined) {
            return button(toggler)
          }

          return (
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
              {menu?.name}
            </div>
          )
        }}
        onClose={onClose}
      >
        {({ isOpen, close }) => (
          <>
            <div>
              <div className="mb-4">
                <Label id="fn">Criteria name</Label>
                <Input id="fn" placeholder="Lorem ipsum" />
              </div>
              <div className="mb-4">
                <Label id="user">Weight</Label>
                <Input id="user" placeholder="2.5" />
              </div>

              <ButtonPrimary className="w-full mt-2">Submit</ButtonPrimary>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
