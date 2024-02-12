'use client'

import { ButtonPrimary } from '@/components/atoms'
import { NewSubCriteriaModal, SubCriteriaTable } from '@/components/organisms/criteria'

export default function UserPage() {
  return (
    <div className="container m-auto p-4 mt-6">
      <div className="bg-white p-8 rounded-lg">
        <div className="mb-10 flex justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-700">Sub Criterias</h1>
            <p className="text-gray-500 text-sm">25 Total of sub criterias</p>
          </div>
          <div>
            <NewSubCriteriaModal
              button={(toggler) => (
                <ButtonPrimary
                  onClick={() => {
                    toggler((prev) => !prev)
                  }}
                >
                  Add new sub criteria
                </ButtonPrimary>
              )}
            />
          </div>
        </div>
        <SubCriteriaTable />
      </div>
    </div>
  )
}
