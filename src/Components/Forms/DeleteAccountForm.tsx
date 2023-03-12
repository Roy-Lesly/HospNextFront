import { Form, Input, Modal, Button, Select, notification } from 'antd'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { AccountUrl } from '../../Utils/Config';
import { axiosRequest } from '../../Utils/functions';
import { DataProps, FormModalProps, GroupProps } from '../../Utils/types';
import SvgFemaleCompUser from '../../assets/SvgFemaleCompUser.svg'

const { Option } = Select

interface DeleteAccountFormProps extends FormModalProps {
    record?: any
}

const DeleteAccountForm: FC<DeleteAccountFormProps> = ({
    isVisible = false,
    onSuccessCallBack,
    onClose,
    record
}) => {

    const [loading, setLoading] = useState(false)

    const [file, setFile] = useState(false)

    const onDelete = async (values: DataProps) => {
        setLoading(true)

        console.log(record.id)

        const response = await axiosRequest({
            method: "delete",
            url: AccountUrl + "/" + record["id"],
            //payload: record,
            hasAuth: true,
            file: file
        })

        setLoading(false)
        if (response) {
            console.log(response)
            notification.success({
                message: "Operation Successful",
                description: "Account Deleted Successfully"
            })
            onSuccessCallBack()
            window.location.reload()
        }
    }

    return (
        <Modal
            title="Delete Account"
            visible={isVisible}
            onCancel={onClose}
            footer={false}
            maskClosable={false}
        // closable={false}
        >
            <div>
                <h2>Do You Want To Delete Item?</h2>
                {/* <h2><b>Name:</b> <i>{record.name}</i></h2>
                <h3><b>Code:</b> <code><i>{record.code}</i></code></h3>
                <h3><b>ID:</b> {record.id}</h3> */}
            </div>

            <div>
                <Button
                    htmlType='submit'
                    type='primary'
                    loading={loading}
                    onClick={onDelete}
                >
                    Delete
                </Button>

                <Button
                    htmlType='submit'
                    type='default'
                    loading={loading}
                    onClick={onClose}
                >
                    Cancel
                </Button>
            </div>
        </Modal>
    )
}

export default DeleteAccountForm;