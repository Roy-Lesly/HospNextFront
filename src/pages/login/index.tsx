import { FC, useState } from 'react';
import AuthComponent from '../../Components/AuthComponent'
import { DataProps } from '../../Utils/types';
import { LoginUrl } from '../../Utils/Config';
import { tokenName, userName, userRole, userIsAdmin, userDept } from '../../Utils/data';
import { useRouter } from 'next/router';
import { useAuthHook } from '../../Utils/customHooks';
import { axiosRequest } from '../../Utils/functions';

interface LoginDataProps {
    access: string
    user_name: string
    user_role: string
    user_dept: string
    is_admin: string
}

const Login: FC = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false)

    useAuthHook({
        // successCallBack: () => { router.push(`${}`) }
        successCallBack: () => { router.push("/home") }
    })

    const onSubmit = async (values: DataProps) => {
        setLoading(true)
        console.log(values)
        // const response = await axiosRequest<LoginDataProps>({
        const response = await axiosRequest({
            method: "post",
            url: LoginUrl,
            payload: values,
            errorObject: {
                message: "Login Error"
            }
        })

        if (response) {
            console.log(response.data.user_name)
            localStorage.setItem(tokenName, response.data.access)
            localStorage.setItem(userName, response.data.user_name)
            localStorage.setItem(userIsAdmin, response.data.user_is_admin)
            localStorage.setItem(userRole, response.data.user_role)
            localStorage.setItem(userDept, response.data.dept_name)
            
            console.log(response)
            router.push(`/${response.data.dept_name}`)
        }
        setLoading(false)
    }

    return <AuthComponent
        titleText='LOGIN'
        buttonText='LOGIN'
        linkName='Check User !'
        linkPath='/login/checkuser'
        isLogin
        onSubmit={onSubmit}
        loading={loading}
    />
}

export default Login;