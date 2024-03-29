import { ButtonDanger, DotsFill } from '@/components/atoms'
import { Popover } from '@/components/molecules'
import { Modal } from '@/components/organisms'
import { NewUserModal } from '@/components/organisms/user'
import { type UserData } from '@/types'

const UserActionMenu = (item: UserData) => {
  return (
    <div className="bg-white relative min-w-[120px] overflow-hidden border border-gray-100 shadow-lg py-0.5 whitespace-nowrap rounded-lg">
      {/* <div className="text-xs text-gray-600 hover:bg-gray-50 px-4 py-1.5 font-medium">Detail</div> */}

      <NewUserModal
        button={(toggler) => (
          <div
            onClick={() => {
              toggler((prev) => !prev)
            }}
            className="text-xs border-b cursor-pointer border-b-gray-100 text-gray-600 hover:bg-gray-50 px-4 py-2 font-medium"
          >
            Edit
          </div>
        )}
      />

      <Modal
        dialogClassName="max-w-sm"
        button={({ toggler }) => (
          <div
            onClick={() => {
              toggler((prev) => !prev)
            }}
            className="text-xs cursor-pointer text-red-600 hover:bg-gray-50 px-4 py-2 font-medium"
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
              <ButtonDanger
                onClick={() => {
                  console.log('clicked')
                }}
                className="w-full"
              >
                Confirm
              </ButtonDanger>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export const UserAction = (item: UserData) => {
  return (
    <Popover
      button={(open) => (
        <div className={'w-6 h-6 relative flex justify-center items-center'}>
          <DotsFill
            className={`absolute ${!open && 'hidden'} group-hover:block fill-gray-600`}
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
