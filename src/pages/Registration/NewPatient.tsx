import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Checkbox, Upload, Switch} from 'antd';
import axios from 'axios';
import { PatientUrl } from '@/Utils/Config';

const NewPatient: React.FC = () => {

  const onFinish = async (value: object) => {
    console.log(value);
    const response = await axios({
      method: "post",
      url: PatientUrl,
      data: value,
      headers: { "Content-Type": "multipart/form-data"}
    });
    console.log(response)
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item 
          label="Reg Num"
          name="reg_num"
          rules={[{required: true, message: "Reg Num Required"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="First Name"
          name="first_name"
          rules={[{required: true, message: "First Name Required"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Last Name"
          name="last_name"
          rules={[{required: true, message: "Last Name Required"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Address"
          name="address"
          rules={[{required: true, message: "Address Required"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Sex"
          name="sex"
          rules={[{required: true, message: "Sex Required"}]}
        >
          <Select>
            <Select.Option value="FEMALE">Female</Select.Option>
            <Select.Option value="MALE">Male</Select.Option>
          </Select>
        </Form.Item>
         
        <Form.Item 
          label="Date Of Birth"
          name="dob"
          rules={[{required: true, message: "Select Date of Birth"}]}
        >
          <DatePicker />
        </Form.Item>
      
        <Form.Item 
          label="Telephone"
          name="phone"
          rules={[{required: true, message: "Telephone Required"}]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item 
          label="Tel of Carer"
          name="phone_of_carer"
          rules={[{required: false, message: "Telephone Optional"}]}
        >
          <InputNumber />
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <NewPatient />;