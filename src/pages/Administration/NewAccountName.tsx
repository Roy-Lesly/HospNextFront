import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { notification, Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Checkbox, Upload, Switch} from 'antd';
import { AccountNameUrl } from '@/Utils/Config';
import axios from 'axios';
import { axiosRequest } from '@/Utils/functions';
import { DataProps } from '@/Utils/types';


const NewAccountName: React.FC = () => {

  const [role, setRole] = useState(false)
  const [fetching, setFetching] = useState(false)

  const onCreateAccount = async (values: DataProps) => {
    setFetching(true)
    console.log(values)

    const response = await axiosRequest({
        method: "post",
        url: AccountNameUrl,
        payload: values,
        hasAuth: true,
    })

    setFetching(false)
    if (response) {
        console.log(response)
        notification.success({
            message: "Operation Successful",
            description: "Account Name Created Successfully"
        })
        // onSuccessCallBack()
        // form.resetFields();
    }
}

  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onCreateAccount}
      >
        <Form.Item 
          label="Account / Username"
          name="name"
        >
          <Input />
        </Form.Item>
    
        <Form.Item label="Button">
          <Button htmlType='submit' >Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <NewAccountName />;