import React, { FC } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import GlobalFilter from './GlobalFilter';
import Pagination from './Pagination';

interface MyTableProps {
	data: any,
	columns: any,
	isPagination : boolean,
	isSearch: boolean,
	// isSortIcon: boolean,
	// isPageNumber?: number,
	onRowClick: (rowData: any) => void
    // onSorted?: (record: any) => void
    headStyles: {styles: string},
    bodyStyles: {styles: string},
}

const CTable: FC<MyTableProps> = ({columns, data, headStyles, bodyStyles, isPagination, isSearch, onRowClick}) => {

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
        page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, 
        state, setGlobalFilter, setPageSize
    } = useTable(
        { columns, data },
        useGlobalFilter, useSortBy, usePagination
    );

    const { globalFilter, pageIndex, pageSize } = state

  return (
    <div className='grid grid-flow-row'>
        <div className='flex justify-end md:mb-2'>
            {isSearch && <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />}
        </div>
        <div className=''>
            <table {...getTableProps} className="w-full border-2 border-blue-900">
                {/* <thead className="bg-blue-100 border-b-1 border-red-500"> */}
                <thead className={headStyles.styles}>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()} className={bodyStyles.styles}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}
                                className="border-blue-800 border-b-2"
                                onClick= {(e) => {
                                    onRowClick(row.original as any)
                                }}
                            >
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        <div className='flex justify-center'>
            {isPagination && 
                <Pagination  
                    previousPage={previousPage}
                    nextPage={nextPage}
                    pageIndex={pageIndex}
                    pageOptions={pageOptions}
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />
            }
        </div>

        

        
        
    </div>
  )
}

export default CTable;