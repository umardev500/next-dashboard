import { DotsFill } from '@/components/atoms'
import { Popover } from '@/components/molecules'
import { DeleteConfirmModal } from '@/components/organisms'
import { NewCriteriaModal } from '@/components/organisms/criteria'
import { type CriteriaData } from '@/types/criteria'

const CriteriaActionMenu = (item: CriteriaData) => {
  return (
    <div className="bg-white relative min-w-[120px] overflow-hidden border border-gray-100 shadow-lg py-0.5 whitespace-nowrap rounded-lg">
      {/* <div className="text-xs text-gray-600 hover:bg-gray-50 px-4 py-1.5 font-medium">Detail</div> */}

      <NewCriteriaModal
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

      <DeleteConfirmModal
        onConfirm={() => {
          console.log('confirmed')
        }}
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
      />
    </div>
  )
}

export const CriteriaAction = (item: CriteriaData) => {
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
      <CriteriaActionMenu {...item} />
    </Popover>
  )
}
