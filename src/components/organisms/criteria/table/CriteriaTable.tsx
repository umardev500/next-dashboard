import { CriteriaAction } from '@/components/molecules/criteria'
import { Pagination, Table } from '@/components/organisms'
import { type CriteriaData } from '@/types/criteria'
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
    header: 'Name',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'weight',
    header: 'Weight',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'created_at',
    header: 'Created at',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
]

export const CriteriaTable = () => {
  const statusOptions = ['active', 'inactive', 'pending', 'deleted']

  const [data, setData] = useState<CriteriaData[]>([
    {
      id: 'c5344e5c-3960-4c5b-9ee5-5dd38f361f45',
      name: 'umarsdd',
      weight: 1.5,
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
        weight: faker.number.float(),
        status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
        created_at: faker.date.past().toISOString(),
      }

      dataList.push(dummyData)
    }

    setData(dataList)
  }, [])

  return (
    <div className="">
      <div className="mt-4 overflow-x-auto">
        <Table
          actions={(item) => (
            <div className="w-6 h-6 -ml-6 mr-2 justify-center flex items-center">
              <CriteriaAction {...item} />
            </div>
          )}
          columns={columns}
          data={data}
        />
      </div>
      <div className="mt-6">
        <Pagination pageCount={data.length} />
      </div>
    </div>
  )
}
