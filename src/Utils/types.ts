import { AxiosError } from "axios"
import React from "react"


export interface InvoiceCreationAddRemoveProps {
    [key: number]: number
}

export interface ActivityCreationAddRemoveProps {
    [key: number]: number
}

export interface DataProps {
    [key: string]: string | boolean | number | null | any | React.ReactElement
}

export interface StoreProps {
    user: AccountProps | null,
    updatePasswordUserId: number | null
}

export interface StoreProviderProps {
    state: StoreProps,
    dispatch: (arg: ActionProps) => void
}

export interface CustomAxiosError extends Omit<AxiosError, 'response'> {
    response?: {
        data: { 
            error: string,
            name?: string
        }
    }
}

export interface AccountNameProps {
    id: number
    name: string
}

export interface AuthTokenType {
    Authorization: string
}

export interface AccountProps {
    username: string
    role: string
    is_admin: boolean
    is_staff: boolean
    is_active: boolean
    id: number
    date_joined: string
    last_login: string
}

export interface AuthProps {
    errorCallBack?: () => void,
    successCallBack?: () => void,
}

export interface IsLoggedInProps {
    errorCallBack?: () => void,
    successCallBack?: (a: any, b: any, c: any, d: any) => void,
}


export enum ActionTypes {
    UPDATE_USER_INFO,
    UPDATE_USER_PASSWORD,
}

export type ActionProps = {
    type: ActionTypes.UPDATE_USER_INFO,
    payload: AccountProps | null
} | {
    type: ActionTypes.UPDATE_USER_PASSWORD,
    payload: number | null
}


export interface FormModalProps {
    isVisible?: boolean
    onSuccessCallBack: (data?: number) => void
    onClose: () => void
}

export interface GroupProps {
    id: number
    name: string,
    belongs_to: {
        name: string
        id: number
    } | null
    created_at: string
    total_items: number
}

export interface AssetGroupProps {
    id: number
    name: string,
    belongs_to: {
        name: string
        id: number
    } | null
    created_by: string
    description: string
    cost_price_unit: number
    physical_state: string
    created_at: string
    total_items: number
}

export interface TransactionProps {
    id: number
    name: string,
}
