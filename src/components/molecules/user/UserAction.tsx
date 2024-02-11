import { ButtonDanger, DotsFill } from '@/components/atoms'
import { Popover } from '@/components/molecules'
import { Modal } from '@/components/organisms'
import { type UserData } from '@/types'

const UserActionMenu = (item: UserData) => {
  return (
    <div className="bg-white min-w-[120px] overflow-hidden shadow-lg py-2 whitespace-nowrap rounded-lg">
      <div className="text-xs text-gray-600 hover:bg-gray-50 px-4 py-1.5 font-medium">Detail</div>
      <Modal
        dialogClassName="max-w-sm"
        button={({ toggler }) => (
          <div
            onClick={() => {
              toggler((prev) => !prev)
            }}
            className="text-xs text-red-600 hover:bg-gray-50 px-4 py-1.5 font-medium"
          >
            Delete
          </div>
        )}
      >
        {({ close }) => (
          <div>
            <p className="text-center text-base text-gray-700 px-4 py-1.5 font-medium">
              Are you sure you want to delete this user ?
            </p>

            <div className="flex justify-center mt-4">
              <ButtonDanger className="w-full">Confirm</ButtonDanger>
            </div>
          </div>
        )}
      </Modal>

      <div className="text-xs text-gray-600 hover:bg-gray-50 px-4 py-1.5 font-medium">Edit</div>
    </div>
  )
}

export const UserAction = (item: UserData) => {
  return (
    <Popover
      button={(open) => (
        <div className={'w-6 h-6 relative flex justify-center items-center'}>
          <DotsFill
            className={`absolute ${!open && 'hidden'} group-hover:block text-gray-500`}
            width={16}
            height={16}
          />
        </div>
      )}
    >
      <UserActionMenu {...item} />
    </Popover>
  )
}
