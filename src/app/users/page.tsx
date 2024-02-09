'use client'

import { UserTable } from '@/components/organisms/user'

export default function UserPage() {
  return (
    <div className="container m-auto p-4 mt-6">
      <div className="bg-white p-8 rounded-lg">
        <UserTable />
      </div>
    </div>
  )
}
