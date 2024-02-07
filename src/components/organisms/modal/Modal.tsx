'use client'

import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

type ModalPosition = 'top' | 'center'

interface Props {
  position?: ModalPosition
  open?: boolean
  onClose?: () => void
  button: (btnProps: { toggler: React.Dispatch<React.SetStateAction<boolean>> }) => JSX.Element
  children?: (modalProps: { isOpen: boolean; close: () => void }) => JSX.Element
}

export const Modal: React.FC<Props> = (props) => {
  const { position = 'top', open = false, onClose, button, children } = props
  const [isOpen, setIsOpen] = useState(open)

  function closeModal() {
    onClose?.() // call the onClose prop
    setIsOpen(false)
  }

  return (
    <>
      {button?.({ toggler: setIsOpen })}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`flex min-h-full ${
                position === 'top' ? 'items-start' : 'items-center'
              } justify-center p-4 text-center`}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full top-0 max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {children?.({ isOpen, close: closeModal })}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
