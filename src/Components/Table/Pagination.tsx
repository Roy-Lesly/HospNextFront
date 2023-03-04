import React, { FC, useEffect, useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import MyButton from '../CustomButton'
import ReactiveButton from 'reactive-button';


interface PaginationProps {
  previousPage: any
  nextPage: any
  pageIndex: number
  pageOptions: any
  canPreviousPage: boolean
  canNextPage: boolean
  pageSize?: number
  setPageSize: (num: number) => void
}

const Pagination: FC<PaginationProps> = ({ previousPage, nextPage, pageIndex,
    pageOptions, canPreviousPage, canNextPage, pageSize, setPageSize }) => {
      useEffect(() => {
          console.log(pageSize)
          setPageSize(15);
          console.log(pageSize)
      }, [])
      
  return (
    <div className='text-xl mt-2'>
        {pageSize && <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}
          className='mr-3 font-xl bg-blue-200 rounded'
        >
          {
            [15, 25, 50, 100].map(pageSize => (
              <option key={pageSize} value={pageSize}>Show {pageSize}</option>
            ))
          }
        </select>}
        <span>Page {'  '} <strong>{pageIndex + 1} of {pageOptions.length}</strong>{'  '}
        </span>
        {/* <MyButton ButtonName='Prev' ButtonType="click" onClick={() => previousPage()} disabled={!canPreviousPage} /> */}
        <ReactiveButton className='font-bold m-1'
            idleText="PREV"
            style={{background: "brown"}}
            onClick={() => previousPage()} disabled={!canPreviousPage}
        />

        <ReactiveButton className='font-bold m-1'
            idleText="NEXT"
            style={{background: "green"}}
            onClick={() => nextPage()} disabled={!canNextPage}
        />
      
        {/* <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button> */}
    </div>
  )
}

export default Pagination;