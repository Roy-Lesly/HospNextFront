import AddUserForm from '@/Components/Forms/AddUserForm'
import DeleteAccountForm from '@/Components/Forms/DeleteAccountForm'
import UpdateUserForm from '@/Components/Forms/UpdateUserForm'
import { COLUMNS_ACCOUNTS } from '@/Components/Table/Columns'
import CTable from '@/Components/Table/CTable'
import CustomTable from '@/Components/Table/CustomTable'
import { useGetAccount, useGetAllAccountNames, useGetAllAccounts } from '@/Utils/customHooks'
import { AccountNameProps, AccountProps } from '@/Utils/types'
import { Button } from 'antd'
import React, { useState, useMemo } from 'react'


enum ModalState {
    addAccount,
    updateAccount,
    deleteAccount,
    off,
}


export const formatAccountData = (accounts: AccountProps[], setModalState: any) => {
    return accounts.map(item => (
        {
            ...item,
            actions: <div className='m-1'>
                <Button
                    className='bg-green-300 border-1 rounded-xl border-black mr-1'
                    onClick={() => setModalState(ModalState.updateAccount)}
                >
                    <span className='font-bold'>UPDATE</span>
                </Button>
                <Button
                    className='bg-red-300 border-1 rounded-xl border-black'
                    onClick={() => setModalState(ModalState.deleteAccount)}
                >
                    <span className='font-bold'>DELETE</span>
                </Button>
            </div>
        }
    ))
}

const Accounts = () => {

    const [modalState, setModalState] = useState<ModalState>(ModalState.off)

    const [role, setRole] = useState(false)

    const [fetching, setFetching] = useState(true)

    const [record, setRecord] = useState<AccountProps[]>([])

    const [accounts, setAccounts] = useState<AccountProps[]>([])

    const [accountNames, setAccountNames] = useState<AccountNameProps[]>([])

    useGetAllAccounts(setAccounts, setFetching)

    useGetAllAccountNames(setAccountNames, setFetching)

    const onRowClick = (record: any) => {
        setRecord(record)
    }

    const columnAccount = useMemo(() => COLUMNS_ACCOUNTS, [])

    const headStyles = {
        styles: "bg-blue-900 text-white",
    }
    const bodyStyles = {
        styles: "bg-blue-100 text-gray-900 text-center lg:text-lg",
    }

  return (
    <>
        <div className='grid grid-cols-2 text-black'>
            <div className='flex justify-center'>
                <p className='font-bold text-2xl'>Accounts List</p>
            </div>
            <div className='flex justify-end'>
                <Button
                    className='bg-red-300'
                    onClick={() => {
                        setModalState(ModalState.addAccount);
                    }}
                >
                    NEW ACCOUNT
                </Button>
                
            </div>
        </div>

        <div className=''>
            <CTable 
                columns={columnAccount} 
                data={formatAccountData(accounts, setModalState)} 
                headStyles={headStyles} 
                bodyStyles={bodyStyles} 
                isPagination 
                isSearch
                onRowClick={() => {}}
            />
        </div>
        
        <div className='text-black'>
            <AddUserForm 
                onSuccessCallBack={() => {}}
                isVisible={modalState === ModalState.addAccount}
                onClose={() => setModalState(ModalState.off)}
                // groups={groups}
            />
            <UpdateUserForm
                onSuccessCallBack={() => {}}
                isVisible={modalState === ModalState.updateAccount}
                onClose={() => setModalState(ModalState.off)}
                // accountName={accountName}
                // groups={groups}
                record={record}
                onRowClick={onRowClick}
                setRecord={setRecord}
            />
            <DeleteAccountForm
                onSuccessCallBack={() => {}}
                isVisible={modalState === ModalState.deleteAccount}
                onClose={() => setModalState(ModalState.off)}
                // accountName={accountName}
            />
        </div>
    </>
  )
}

export default Accounts