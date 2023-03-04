import React from 'react';
import { Button, Form, Input, InputNumber, Checkbox, Select } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const CreateUserForm = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form className="form" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'username']}
                label="Username"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'password']}
                label="Password"
                rules={[
                    {
                        // type: 'password',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'is_admin']}
                label="Is Admin"
                rules={[
                    {
                        // type: 'checkbox',
                    },
                ]}
            >
                <Checkbox />
            </Form.Item>
            <Form.Item name={['user', 'role']} label="Role">
                <Select />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            
        </Form>
    );
};

export default CreateUserForm;