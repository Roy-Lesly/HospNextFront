import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { DataProps } from '../Utils/types';
import loginImg from '../assets/login.jpg'


interface AuthComponentProps {
    titleText: string
    buttonText: string
    isLogin?: boolean
    isCheckUser?: boolean
    linkPath: string
    linkName: string
    onSubmit: (values: DataProps) => void
    loading?: boolean
    isUpdatePassword?: boolean
}

const AuthComponent: FC<AuthComponentProps> = ({
    titleText, buttonText, linkPath, linkName,
    isLogin, isCheckUser, onSubmit, loading, isUpdatePassword,
}) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover'/>  {/* src={loginImg} alt="" /> */}
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <Form layout='vertical' onFinish={onSubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>

                    <h2 className='text-4xl font-bold text-center py-6'>{titleText}</h2>


                    {!isUpdatePassword && <Form.Item
                        label="USERNAME"
                        name="username"
                        rules={[{ required: true, message: "Please Insert Username or First Name!" }]}
                    >
                        <Input placeholder='Username or First Name' type="first_name" />
                    </Form.Item>}

                    {isLogin && <Form.Item
                        label="PASSWORD"
                        name="password"
                        rules={[{ required: true, message: "Please Insert Password !" }]}
                    >
                        <Input placeholder='Password' type="password" />
                    </Form.Item>}

                    {isUpdatePassword && <Form.Item
                        label="CONFIRM PASSWORD"
                        name="confirm_password"
                        rules={[{ required: true, message: "Please Insert Password Confirmation!" }]}
                    >
                        <Input placeholder='Confirm Password' type="password" />
                    </Form.Item>}

                    <Form.Item>
                        <Button htmlType='submit' className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white' loading={loading}>{buttonText}</Button>
                    </Form.Item>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p><Link href={linkPath}>{linkName}</Link></p>
                    </div>


                </Form>

            </div>
        </div>
    )
}

export default AuthComponent;