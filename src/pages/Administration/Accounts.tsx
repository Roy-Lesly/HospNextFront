import { COLUMNS_ACCOUNTS } from '@/Components/Table/Columns'
import CustomTable from '@/Components/Table/CustomTable'
import { useGetAccount, useGetAllAccounts } from '@/Utils/customHooks'
import { AccountProps } from '@/Utils/types'
import { Button } from 'antd'
import React, { useState } from 'react'

const Accounts = () => {
    const [role, setRole] = useState(false)

    const [fetching, setFetching] = useState(true)

    const [record, setRecord] = useState(true)

    const [accounts, setAccounts] = useState<AccountProps[]>([])

    useGetAllAccounts(setAccounts, setFetching)

    const onRowClick = (record: any) => {
        setRecord(record)
        console.log(record)
    }

  return (
    <>
        <div className='flex flex-row space-x-5'>
            <p>Accounts</p>
            <Button className='bg-red-300'>
                <a href="/Administration/NewAccount">NEW ACCOUNT</a>
            </Button>
        </div>

        <div>
            <p>TABLE HERE</p>
            <CustomTable
                data={accounts}
                columns={COLUMNS_ACCOUNTS}
                isPagination={true}
                isSortIcon={true}
                isSearch={false}
                onRowClick={onRowClick}
            />
        </div>
        
    </>
  )
}

export default Accounts