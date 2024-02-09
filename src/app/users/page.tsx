'use client'

import { ButtonSecondary } from '@/components/atoms'
import { NewUserModal, UserTable } from '@/components/organisms/user'

export default function UserPage() {
  return (
    <div className="container m-auto p-4 mt-6">
      <div className="bg-white p-8 rounded-lg">
        <div className="mb-10 flex justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-700">Users</h1>
            <p className="text-gray-500">1.232.150 registered users</p>
          </div>
          <div>
            <NewUserModal
              button={(toggler) => (
                <ButtonSecondary
                  onClick={() => {
                    toggler((prev) => !prev)
                  }}
                >
                  Add new user
                </ButtonSecondary>
              )}
            />
          </div>
        </div>
        <UserTable />
      </div>
    </div>
  )
}
