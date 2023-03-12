import { notification } from 'antd';
import { FC, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import AuthComponent from '../../Components/AuthComponent';
import { LoginUrl } from '../../Utils/Config';
import { useAuthHook } from '../../Utils/customHooks';
import { axiosRequest } from '../../Utils/functions';
import { store } from '../../Utils/store';
import { ActionTypes, DataProps } from '../../Utils/types';


interface CheckUserProps {
    user_id: number
}

const CheckUser: FC = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const { dispatch } = useContext(store)

    useAuthHook({
        successCallBack: () => { router.push("/") }
    })

    const onSubmit = async (values: DataProps) => {
        setLoading(true)
        const response = await axiosRequest({
            method: 'post',
            url: LoginUrl,
            payload: { ...values, is_new_user: true }
        })
        if (response) {
            console.log({ payload: response.data.user_id })
            dispatch({
                type: ActionTypes.UPDATE_USER_PASSWORD,
                payload: response.data.user_id
            })
            notification.error({
                message: "User Has No Password",
                description: "CREATE PASSWORD",
            })
            router.push({ pathname: "/login/updateuser", })
        }
        setLoading(false)
    }

    return <AuthComponent
        titleText='VERIFY USER'
        buttonText='Check User'
        linkName='Back To Login'
        linkPath='/login'
        isCheckUser
        loading={loading}
        onSubmit={onSubmit}
    />
}

export default CheckUser;