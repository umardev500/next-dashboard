'use client'

import { ButtonPrimary } from '@/components/atoms'
import { CriteriaTable, NewCriteriaModal } from '@/components/organisms/criteria'
import { AppContext, type AppContextType } from '@/context'
import { useContext } from 'react'

export default function UserPage() {
  const ctx = useContext<AppContextType>(AppContext)
  const criteria = ctx.dict.criteria
  const all = criteria.all

  return (
    <div className="container m-auto p-4 mt-6">
      <div className="bg-white p-8 rounded-lg">
        <div className="mb-10 flex justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-700">{all.title}</h1>
            <p className="text-gray-500 text-sm">25 {all.subTitle}</p>
          </div>
          <div>
            <NewCriteriaModal
              button={(toggler) => (
                <ButtonPrimary
                  onClick={() => {
                    toggler((prev) => !prev)
                  }}
                >
                  {all.newBtn}
                </ButtonPrimary>
              )}
            />
          </div>
        </div>
        <CriteriaTable />
      </div>
    </div>
  )
}
