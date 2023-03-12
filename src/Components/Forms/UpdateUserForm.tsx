import { Form, Input, Modal, Button, Select, notification } from 'antd'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { AccountUrl, UploadImageUrl } from '../../Utils/Config';
import { axiosRequest } from '../../Utils/functions';
import { DataProps, FormModalProps, AccountNameProps, AccountProps } from '../../Utils/types';

const { Option } = Select

interface UpdateUserFormProps extends FormModalProps {
    accountName?: AccountNameProps[]
    record?: any
    onRowClick?: any
    setRecord: (record: AccountProps[]) => void
}

const UpdateUserForm: FC<UpdateUserFormProps> = ({
    isVisible = false,
    onSuccessCallBack,
    setRecord,
    onClose, accountName, record,
}) => {

    console.log(record)

    const [form] = Form.useForm();

    const [accountNameID, setAccountNameID] = useState('')

    const [loading, setLoading] = useState(false)

    const [errors, setErrors] = useState({
        photo_url: "",
    })

    const [imageUrl, setImageUrl] = useState<string | null>()

    const [photo_url, setPhotoUrl] = useState<unknown>("")

    const [file, setFile] = useState(false)

    const fileSelect = useRef<HTMLInputElement>(null)


    const handleImageChange = (e: any) => {
        let photo = e.target.files[0];
        setPhotoUrl(photo);
        setFile(true)
    }

    useEffect(() => {
        console.log(photo_url)
        if (photo_url) {
            setPhotoUrl(photo_url)
            notification.success({
                message: "Operation Info",
                description: "Photo Selected"
            })
        } else {
            console.log("PHOTO NOT SELECTED")
        }
        if (isVisible && record) {
            // setAccountNameID(record.account_name.id)
        }

    }, [photo_url, isVisible, accountNameID])

    const onSubmit = async (values: DataProps) => {
        setLoading(true)
        if (photo_url) {
            values = { ...values, photo: photo_url }//, group_id: groupID }
        } else {
            values = { ...values } //, group_id: groupID }
        }
        if (!values['account_name_id']) {
            values = { ...values, group_id: record.account_name.id }
        } else {
            console.log("Account Name Id OK")
        }
        console.log(values)

        const response = await axiosRequest({
            method: "put",
            url: AccountUrl + "/" + values["id"],
            payload: values,
            hasAuth: true,
            file: file
        })

        setLoading(false)
        if (response) {
            let x: any = response
            console.log(x.data)
            if (x.data.status === "Error") {
                notification.error({
                    message: "Operation Error",
                    description: "InventoryItem Not Updated"
                })
            }
            if (x.data.status === "Updated") {
                notification.success({
                    message: "Operation Successful",
                    description: "InventoryItem Updated Successfully"
                })
                onSuccessCallBack()
                setImageUrl(null);
                form.resetFields()
            }
        }
    }

    // const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         console.log("file", e.target.files[0])
    //         const formItem = new FormData()
    //         formItem.append("file", e.target.files[0])

    //         setLoading(true)

    //         const response = await axiosRequest<>({
    //             method: "post",
    //             url: UploadImageUrl,
    //             payload: formItem,
    //         })
    //         setLoading(false)

    //         if (response) {
    //             setImageUrl(response.data.url)
    //         }
    //     }
    // }

    return (
        <Modal
            title="Update Account"
            visible={isVisible}
            onCancel={onClose}
            footer={false}
            maskClosable={false}

        >
            <Form layout='vertical' onFinish={onSubmit} form={form}>

                {/* <Form.Item
                    label="Item Photo"
                >
                    <div
                        className='imageView'
                        onClick={() => !loading && fileSelect.current?.click()}
                        style={{
                            backgroundImage: `url(${record.photo})`
                        }}
                    />
                    <input type="file" style={{ display: "none" }}
                        accept="image/jpeg,image/jpg,image/png,image/*"
                        ref={fileSelect}
                        onChange={(e) => { handleImageChange(e) }}
                    />
                </Form.Item> */}

                {/* <Form.Item label="User Name" name="name" initialValue={record.name} */}
                <Form.Item label="Account Name" name="name" initialValue=""
                    rules={[{ required: true, message: "Update Inventory Name!" }]}
                >
                    <Input
                        placeholder="" //{record.name}
                    />
                </Form.Item>

                {/* <Form.Item label="ID" name="id" initialValue={record.id} */}
                <Form.Item label="ID" name="id" initialValue=""
                    rules={[{ required: true, message: "Please" }]}
                //hidden
                >
                    <Input placeholder="{record.id}" type='number' readOnly />
                    {/* <Input placeholder={record.id} type='number' readOnly /> */}
                </Form.Item>

                <Form.Item label="Role" name="group_id">
                    <Select defaultValue={isVisible ? "record.group.id" : ""}>
                        <Option value={isVisible ? "record.group.id" : ""}>{isVisible ?" record.group.id" : "none"}</Option>
                        {
                            // accountName.map(
                            //     (item, index) => <Option value={item.id} key={index}>{item.name}</Option>
                            // )
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="IS ADMIN" name="is_admin">
                    <Select defaultValue={isVisible ? "record.group.id" : ""}>
                        <Option value="true">True</Option>
                        <Option value="false">False</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="IS STAFF" name="is_staff">
                    <Select defaultValue={isVisible ? "record.group.id" : ""}>
                        <Option value="true">True</Option>
                        <Option value="false">False</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="IS ACTIVE" name="is_active">
                    <Select defaultValue={isVisible ? "record.group.id" : ""}>
                        <Option value="true">True</Option>
                        <Option value="false">False</Option>
                    </Select>
                </Form.Item>

                <Form.Item className='text-black bg-green-700 rounded-lg'>
                    <Button htmlType='submit' type='primary' block loading={loading} >Update</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default UpdateUserForm;