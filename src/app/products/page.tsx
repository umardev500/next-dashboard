'use client'
import { Modal } from '@/components/organisms'

export default function ProductPage() {
  const onClose = () => {
    console.log('modal closed')
  }

  console.log('render')

  return (
    <>
      <div>Lorem</div>
      <Modal
        button={({ toggler }) => (
          <button
            onClick={() => {
              toggler((prev) => !prev)
            }}
          >
            Open
          </button>
        )}
        onClose={onClose}
      >
        {({ isOpen, close }) => (
          <>
            <div>
              {isOpen ? 'Open' : 'Closed'}
              <button onClick={close}>Close</button>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
