'use client'

import { ButtonPrimary, Input, Label } from '@/components/atoms'
import { Modal } from '@/components/organisms'
import { type SidebarBtnProps } from '@/types'
import React from 'react'

export interface NewSubCriteriaModalType extends SidebarBtnProps {
  button?: (toggler: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactElement
}

export const NewSubCriteriaModal: React.FC<NewSubCriteriaModalType> = (props) => {
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
                <Label id="fn">Sub criteria</Label>
                <Input id="fn" placeholder="Dolor sit amet" />
              </div>
              <div className="mb-4">
                <Label id="user">Rate</Label>
                <Input id="user" placeholder="1.5" />
              </div>

              <ButtonPrimary className="w-full mt-2">Submit</ButtonPrimary>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
