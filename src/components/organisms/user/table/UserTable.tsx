import { UserAction } from '@/components/molecules/user'
import { Table } from '@/components/organisms'
import { type UserData } from '@/types'
import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'name',
    header: 'Full name',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'created_at',
    header: 'Created at',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'status',
    header: () => <p className="text-center">Status</p>,
    cell: (props: any) => {
      const status = props.getValue().toLowerCase()

      let theClass = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium leading-4'

      switch (status) {
        case 'active':
          theClass += ' bg-green-100 text-green-800'
          break
        case 'inactive':
          theClass += ' bg-red-100 text-red-800'
          break
        case 'pending':
          theClass += ' bg-yellow-100 text-yellow-800'
          break
        case 'deleted':
          theClass += ' bg-gray-100 text-gray-800'
          break
      }

      return (
        <div className="text-center">
          <span className={theClass}>{status}</span>
        </div>
      )
    },
  },
]

export const UserTable = () => {
  const statusOptions = ['active', 'inactive', 'pending', 'deleted']

  const [data, setData] = useState<UserData[]>([
    {
      id: 'c5344e5c-3960-4c5b-9ee5-5dd38f361f45',
      name: 'umarsdd',
      email: 'lorem@example.com',
      status: 'active',
      created_at: '2022-01-01T00:00:00.000Z',
    },
  ])

  useEffect(() => {
    type Data = typeof data
    const dataList: Data = []

    for (let i = 0; i < 10; i++) {
      const dummyData = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
        created_at: faker.date.past().toISOString(),
      }

      dataList.push(dummyData)
    }

    setData(dataList)
  }, [])

  return (
    <div className="mt-4 overflow-hidden">
      <Table
        actions={(item) => (
          <div className="w-6 h-6 -ml-6 mr-2 justify-center flex items-center">
            <UserAction {...item} />
          </div>
        )}
        columns={columns}
        data={data}
      />
    </div>
  )
}
