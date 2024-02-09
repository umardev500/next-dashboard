'use client'

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import { Pagination } from '@/components/organisms'

export interface TableProps {
  className?: string
}

const statusOptions = ['active', 'inactive', 'pending', 'deleted']

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
    accessorKey: 'username',
    header: 'Username',
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

export const Table: React.FC<TableProps> = () => {
  const [data, setData] = useState([
    {
      id: 'c5344e5c-3960-4c5b-9ee5-5dd38f361f45',
      name: 'umarsdd',
      email: 'lorem@example.com',
      username: 'umardev500',
      status: 'active',
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
        username: faker.internet.userName(),
        status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
      }

      dataList.push(dummyData)
    }

    setData(dataList)
  }, [])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const headerGroups = table.getHeaderGroups()
  const rowModel = table.getRowModel()
  const rows = rowModel.rows

  return (
    <div className="">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          {/* Headers */}
          {headerGroups.map((headerGroup) => (
            <tr className="" key={headerGroup.id}>
              <th className="px-6 py-3">No.</th>
              {headerGroup.headers.map((header) => {
                return (
                  <th className="px-6 py-3" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>

        {/* Rows */}
        <tbody>
          {rows.map((row, i) => (
            <tr className="odd:bg-white cursor-pointer even:bg-gray-50 border-b" key={row.id}>
              <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">{i + 1}</td>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <Pagination pageCount={data.length} />
      </div>
    </div>
  )
}
