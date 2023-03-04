import { FC, useState } from "react";
// import ReactTable, { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
// import GlobalFilter from "./GlobalFilter";
// import Pagination from "./Pagination";
// import { InventoryProps } from '../../Utils/types';
import ReactTable from "react-table";
// import "react-table/react-table.css";


interface MyTableProps {
	data: any,
	columns: any,
	isPagination : boolean,
	isSearch: boolean,
	isSortIcon: boolean,
	isPageNumber?: number,
	onRowClick: (rowData: any) => void
    onSorted?: (record: any) => void
}


const CustomTable: any = ({columns, data, isPagination, isSearch, isSortIcon, isPageNumber, onRowClick}) => {
	// const { getTableProps, getTableBodyProps, headerGroups, setPageSize,
	// 	page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, 
	// 	prepareRow, state, setGlobalFilter, rows
	// } =  useTable({		// step 3
	// 		columns, data,
	// 	}, 
	// 	useGlobalFilter, useSortBy
	// )

	// const { globalFilter, pageIndex, pageSize } = state

	// const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pages, setPages] = useState(-1);
	const [pageCount, setPageCount] = useState(0);
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(10);
	const [sorted, setSorted] = useState([]);
	const [filtered, setFiltered] = useState([]);

  	return (
		<ReactTable
			data={data}
			loading={loading}
			pages={pages}
			onPageChange={(pageIndex: number) => setPageIndex(pageIndex)}
			onPageSizeChange={(pageSize: number, pageIndex: number) => {
				setPageSize(pageSize);
				setPageIndex(0);
			}}
			onSortedChange={(sorted: []) => setSorted(sorted)}
			onFilteredChange={(filtered: []) => setFiltered(filtered)}
			sorted={sorted}
			filtered={filtered}
			columns={columns}
		/>
  	)
}

export default CustomTable;