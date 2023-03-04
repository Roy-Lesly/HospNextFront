import { notification } from 'antd';
import { FC, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthComponent from '../../Components/AuthComponent';
import { UpdatePasswordUrl } from '../../Utils/Config';
import { useAuthHook } from '../../Utils/customHooks';
import { axiosRequest } from '../../Utils/functions';
import { store } from '../../Utils/store';
import { ActionTypes, DataProps } from '../../Utils/types';


const UpdateUserPassword: FC = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { state: { updatePasswordUserId }, dispatch } = useContext(store)

    useEffect(() => {
        if (!updatePasswordUserId) {
            router.push("/login/checkuser")
        }
    }, [])

    useAuthHook({
        successCallBack: () => { router.push("/") }
    })

    const onSubmit = async (values: DataProps) => {
        setLoading(true)
        if (values["password"] !== values["confirm_password"]) {
            notification.error({
                message: "Invalid Password",
                description: "Password Do Not Match",
            })
            setLoading(false)
            return
        }
        const updated_values = { "password": values["password"], "account_id": updatePasswordUserId}
        console.log(updated_values)
        const response = await axiosRequest({
            method: 'put',
            url: UpdatePasswordUrl + `/${updatePasswordUserId}`,
            payload: { ...updated_values }
        })

        if (response) {
            console.log(response.data)
            dispatch({
                type: ActionTypes.UPDATE_USER_PASSWORD,
                payload: null
            })
            notification.success({
                message: "Creation Successfully",
                description: "PASSWORD CREATED SUCCESSFULLY"
            })

            router.push("/login")
        }

        setLoading(false)
    }

    return <AuthComponent
        titleText='CREATE PASSWORD'
        buttonText='Submit'
        linkName='Go Back'
        linkPath='/checkuser'
        isLogin={true}
        isUpdatePassword={true}
        loading={loading}
        onSubmit={onSubmit}
    />
}

export default UpdateUserPassword;