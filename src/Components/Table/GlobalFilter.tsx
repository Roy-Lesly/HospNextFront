import React, { FC, useState } from 'react'
import { useAsyncDebounce } from 'react-table'


interface GlobalFilterProps {
  filter: string
  setFilter: (filter: any) => void
}

const GlobalFilter: FC<GlobalFilterProps> = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  // const onChange = useAsyncDebounce((value): any => {
  //   setFilter(value || undefined)
  // }, 1000)

  return (
    <div className='m-1'>
      <span className='mr-2'>Search :</span>
        <input
          className='border-violet-800 border-2 rounded'
          placeholder=' Enter Search Here ...'
          value={value || ''}
          // onChange={e => {
          //   setValue(e.target.value);
          //   onChange(e.target.value);
          // }}
        />
    </div>
  )
}

export default GlobalFilter;