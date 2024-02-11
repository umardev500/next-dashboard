import { Popover as ReactPopover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface PopoverProps {
  button?: (open: boolean) => JSX.Element
  children?: React.ReactNode
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { button, children } = props

  return (
    <ReactPopover className="relative">
      {({ open }) => (
        <>
          {/* <div className="bg-orange-500 w-2 h-2"></div> */}

          <ReactPopover.Button as="div">{button?.(open)}</ReactPopover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <ReactPopover.Panel className="absolute right-0 z-10 px-4 sm:px-0 lg:max-w-3xl">
              {children}
            </ReactPopover.Panel>
          </Transition>
        </>
      )}
    </ReactPopover>
  )
}
