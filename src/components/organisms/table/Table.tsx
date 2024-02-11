'use client'

import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table'

export interface TableProps<TData, TColumn> {
  className?: string
  data: TData[]
  columns: Array<ColumnDef<TData, TColumn>>
  actions?: (data: TData) => JSX.Element
}

export const Table = <TData, TColumn>(props: TableProps<TData, TColumn>) => {
  const cols = props.columns
  const { actions } = props

  const table = useReactTable({
    data: props.data,
    columns: cols,
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
              <th></th>
            </tr>
          ))}
        </thead>

        {/* Rows */}
        <tbody>
          {rows.map((row, i) => (
            <tr className="odd:bg-white group cursor-pointer even:bg-gray-50 border-b" key={row.id}>
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

              <td className="">{actions?.(row.original)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
