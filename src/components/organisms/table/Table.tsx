import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import React from 'react'

export interface TableProps {
  className?: string
}

const data = [
  {
    name: 'umar',
    username: 'umardev500',
  },
]

const columns = [
  {
    accessor: 'name',
    header: 'Name',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessor: 'username',
    header: 'Username',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
]

export const Table: React.FC<TableProps> = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const headerGroups = table.getHeaderGroups()
  const rowModel = table.getRowModel()
  const rows = rowModel.rows

  return (
    <>
      {headerGroups.map((headerGroup) => (
        <div key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <div key={header.id}>{header.id}</div>
          ))}
        </div>
      ))}
      {rows.map((row) => (
        <div key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <div key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
          ))}
        </div>
      ))}
    </>
  )
}
