import { DotsFill } from '@/components/atoms'
import { Popover } from '@/components/molecules'
import { type UserData } from '@/types'

const UserActionMenu = (item: UserData) => {
  return (
    <div className="bg-white shadow-lg whitespace-nowrap p-4 rounded-lg">Hello wolrd apa kabar</div>
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
