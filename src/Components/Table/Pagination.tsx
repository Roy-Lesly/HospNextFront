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
    <div className='text-md mt-2'>
        {pageSize && <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}
          className='font-xl bg-blue-900 rounded p-1 px-2'
        >
          {
            [15, 25, 50, 100].map(pageSize => (
              <option key={pageSize} value={pageSize}>Show {pageSize}</option>
            ))
          }
        </select>}
        <span className='bg-gray-700 ml-2 mr-2 p-1 px-4 rounded-lg'>Page {'  '} <strong>{pageIndex + 1} of {pageOptions.length}</strong>{'  '}
        </span>
        {/* <MyButton ButtonName='Prev' ButtonType="click" onClick={() => previousPage()} disabled={!canPreviousPage} /> */}
        <ReactiveButton className='font-bold'
            idleText="PREV"
            style={{background: "brown", borderRadius: "6px"}}
            size={"tiny"}
            onClick={() => previousPage()} disabled={!canPreviousPage}
        />

        <ReactiveButton className='font-bold'
            idleText="NEXT"
            style={{background: "green", borderRadius: "6px"}}
            onClick={() => nextPage()} disabled={!canNextPage}
            size={"tiny"}
        />
      
        {/* <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button> */}
    </div>
  )
}

export default Pagination;