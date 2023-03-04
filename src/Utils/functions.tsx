import React, { useState, useEffect } from 'react';
import { notification } from "antd"
import Axios, { AxiosResponse } from "axios";
import { AccountUrl, MeUrl } from './Config';
import { tokenName, userName, userRole, userIsAdmin } from "./data"
import { AuthTokenType, CustomAxiosError, AccountProps, DataProps, AccountProps } from './types';

export const logout = () => {
    localStorage.removeItem(tokenName)
    localStorage.removeItem(userName)
    localStorage.removeItem(userRole)
    localStorage.removeItem(userIsAdmin)
    window.location.href = "/login"
}

export const getAuthToken = (): AuthTokenType | null => {
    const accessToken = localStorage.getItem(tokenName)
    if (!accessToken) {
        return null
    }

    return { Authorization: `Bearer ${accessToken}` }
}

export const authHandler = async (): Promise<AccountProps | null> => {
    const response = await axiosRequest<UserType>({ url: MeUrl, hasAuth: true, showError: false })
    if (response) {
        return response.data
    }
    console.log("No USER")

    return null
}

interface AxiosRequestProps {
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'update' | 'check'
    url: string
    payload?: DataProps | FormData
    hasAuth?: boolean
    showError?: boolean
    errorObject?: {
        message: string,
        description?: string
    }
    file?: boolean
    params?: any
}


export const axiosRequest = async ({
    method = 'get',
    url,
    payload,
    hasAuth = false,
    showError = true,
    file = false,
    params = false,
    errorObject,
}: AxiosRequestProps): Promise<AxiosResponse<T> | null> => {

    let headers = hasAuth ? getAuthToken() : {}
    if (file) {
        headers = { ...headers, 'content-type': 'multipart/form-data' }
    }
    let username = localStorage.getItem("emr-user")
    console.log(username)
    if (username !== "" || username !== null ) {
        payload = {...payload, user: username}
    }

    const response = await Axios({
        method,
        url,
        params: params,
        data: payload, 
        headers: { ...headers }
    }).catch(
        (e: CustomAxiosError) => {
            if (!showError) return
            notification.error({
                message: errorObject ? errorObject.message : "Operation Error",
                description: errorObject?.description ? errorObject.description : e.response?.data.error ? e.response?.data.error : e.response?.data.name
            })
        }
    ) as AxiosResponse<T>

    if (response) { 
        return response
    }
    
    return null
}

export const getAllAccounts = async (
    setAllAcounts: (data: AccountProps[]) => void,
    setFetching: (val: boolean) => void
) => {

    const response = await axiosRequest<{ results: AccountProps[] }>({
        url: AccountUrl,
        hasAuth: true,
        showError: false,
    })
    if (response) {
        console.log(response.data)
        console.log(response.data.results)
        const data = response.data.results
        // const data_edit = data.map(item => ({
        //     ...item,
        //     groupInfo: item.group?.name,
        //     created_at: (item.created_at)?.toString().slice(0, 10),
        //     updated_at: (item.updated_at)?.toString().slice(0, 10),
        //     photoInfo: item.photo
        // }))
        setAllAcounts(data)
        setFetching(false)
        console.log("Data-Inventory:   ", data)
    }
}