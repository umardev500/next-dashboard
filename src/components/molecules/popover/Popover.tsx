import { Float } from '@headlessui-float/react'
import { Popover as ReactPopover } from '@headlessui/react'
import React from 'react'

interface PopoverProps {
  button?: (open: boolean) => JSX.Element
  children?: React.ReactNode
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { button, children } = props

  return (
    <ReactPopover>
      {({ open }) => (
        <>
          <Float
            placement="bottom-end"
            offset={5}
            shift={6}
            flip={10}
            arrow={5}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <ReactPopover.Button as="div">{button?.(open)}</ReactPopover.Button>

            <ReactPopover.Panel className="px-4 sm:px-0 lg:max-w-3xl">
              {children}
            </ReactPopover.Panel>
          </Float>
        </>
      )}
    </ReactPopover>
  )
}
