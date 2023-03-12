import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { notification, Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Checkbox, Upload, Switch} from 'antd';
import { AccountUrl } from '@/Utils/Config';
import axios from 'axios';
import { axiosRequest } from '@/Utils/functions';


const NewAccount: React.FC = () => {

  const [role, setRole] = useState(false)
  const [fetching, setFetching] = useState(false)

  // const onCreateAccount = async (value: object) => {
  //   console.log(value);
  //   const response = await axios({
  //     method: "post",
  //     url: AccountUrl,
  //     data: value,
  //     headers: { "Content-Type": "multipart/form-data"}
  //   });
  //   console.log(response)
  // }

  const onCreateAccount = async (values: any) => {
    setFetching(true)
    console.log(values)

    const response = await axiosRequest({
        method: "post",
        url: AccountUrl,
        payload: values,
        hasAuth: true,
    })

    setFetching(false)
    if (response) {
        console.log(response)
        notification.success({
            message: "Operation Successful",
            description: "Account Created Successfully"
        })
        // onSuccessCallBack()
        // form.resetFields();
    }
}



  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onCreateAccount}
      >
        <Form.Item 
          label="Username"
          name="username"
        >
          <Input />
        </Form.Item>
    
        <Form.Item 
          label="Account Name"
          name="account_name_id"
        >
          <Select>
            <Select.Option value="1">Administration</Select.Option>
            <Select.Option value="2">Registration</Select.Option>
            <Select.Option value="3">Radiology</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item 
          label="Role"
          name="role"
        >
          <Select>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="hod">HOD</Select.Option>
            <Select.Option value="dept">Dept</Select.Option>
            <Select.Option value="staff">Staff</Select.Option>
            <Select.Option value="visitor">Visitor</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="is_admin">
          <Select>
            <Select.Option value="true">TRUE</Select.Option>
            <Select.Option value="false">FALSE</Select.Option>
          </Select>
        </Form.Item>
  
        <Form.Item label="Button">
          <Button htmlType='submit' >Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <NewAccount />;