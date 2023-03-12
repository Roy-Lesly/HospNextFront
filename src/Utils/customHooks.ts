import { useContext, useEffect, useState } from 'react';
import { tokenName, userName, userIsAdmin, userDept, userRole } from '../Utils/data';

import { authHandler, getAllAccountNames, getAllAccounts,
} from "./functions"
import { store } from "./store"
import { ActionTypes, AuthProps, AccountProps, AccountNameProps } from "./types"


export const useAuthHook = async (
    { successCallBack, errorCallBack }: AuthProps) => {

    const { dispatch } = useContext(store)

    useEffect(() => {
        const Check = async () => {
            const user: AccountProps | null = await authHandler()
            console.log(user)
            if (!user) {
                if (errorCallBack) {
                    errorCallBack()
                }
                return
            }
            if (successCallBack) {
                dispatch({ type: ActionTypes.UPDATE_USER_INFO, payload: user })
                successCallBack()
            }
        }
        Check()
    }, [])
}

export const useIsLoggedIn = async (
    // { successCallBack, errorCallBack }: IsLoggedInProps) => {
    { successCallBack, errorCallBack }: any) => {
    useEffect(() => {
        const Check = async () => {
            const accessToken = localStorage.getItem(tokenName)
            const username = localStorage.getItem(userName)
            const userdept = localStorage.getItem(userDept)
            const isAdmin = localStorage.getItem(userIsAdmin)
            const userrole = localStorage.getItem(userRole)

            if (!accessToken && !username && !userdept) {
                if (errorCallBack) { errorCallBack() }
            }
            if (successCallBack) { successCallBack(username, userdept, userrole, isAdmin) }
        }
        Check()
    }, [])
}

export const useGetAccount = (
    setAll: (val: boolean) => void,
    setAdmin: (val: boolean) => void,
    setVisitor: (val: boolean) => void,
    setHod: (val: boolean) => void,
    setDept: (val: boolean) => void,
    setOther: (val: boolean) => void,
    setUser: (val: string) => void,
) => {

    useEffect(() => {
        console.log(localStorage.getItem(userRole))
        if (localStorage.getItem(userRole) === "admin")
            setAdmin(true)
        if (localStorage.getItem(userRole) === "visitor") // || localStorage.getItem(userRole) === "admin")
            setVisitor(true)
        if (localStorage.getItem(userRole) === "hod") // || localStorage.getItem(userRole) === "admin")
            setHod(true)
        if (localStorage.getItem(userRole) === "dept") // || localStorage.getItem(userRole) === "admin")
            setDept(true)
        if (localStorage.getItem(userRole) === "other") // || localStorage.getItem(userRole) === "admin")
            setOther(true)
    }, [])
}

export const useGetAllAccounts = (
    setAllAccounts: (data: AccountProps[]) => void,
    setFetching: (val: boolean) => void
) => {

    useEffect(() => {
        getAllAccounts(setAllAccounts, setFetching)
    }, [])
}

export const useGetAllAccountNames = (
    setAllAccountNames: (data: AccountNameProps[]) => void,
    setFetching: (val: boolean) => void
) => {

    useEffect(() => {
        getAllAccountNames(setAllAccountNames, setFetching)
    }, [])
}