import { ButtonDanger } from '@/components/atoms'
import { Modal } from '@/components/organisms'
import React, { type Dispatch, type SetStateAction } from 'react'

interface Props {
  button: ({ toggler }: { toggler: Dispatch<SetStateAction<boolean>> }) => React.ReactElement
  onConfirm?: () => void
}

export const DeleteConfirmModal: React.FC<Props> = (props) => {
  const { button, onConfirm } = props

  return (
    <Modal dialogClassName="max-w-xs" button={button}>
      {({ close }) => (
        <div>
          <p className="text-center text-base text-gray-700 px-4 py-1.5 font-medium">
            Are you sure you want to delete this data ?
          </p>

          <div className="flex justify-center mt-4">
            <ButtonDanger onClick={onConfirm} className="w-full">
              Confirm
            </ButtonDanger>
          </div>
        </div>
      )}
    </Modal>
  )
}
