import React from 'react'
import ReactPaginate from 'react-paginate'

export interface PaginationProps extends React.ComponentProps<typeof ReactPaginate> {
  className?: string
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <div>
      <ReactPaginate
        className="my-pagination"
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        {...props}
      />
    </div>
  )
}
