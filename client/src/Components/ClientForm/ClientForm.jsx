import React from 'react';
import { Form, Input, Button,notification } from 'antd';
import { addClient } from '../../Services/Client';



const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 12,
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




const ClientForm = ({setModalVisibility}) => {


    const onFinish = async(values) => {
        
        try {
            const response = await addClient(values);
            notification["success"]({
                message: 'Client Added Successfully',
                description:'',
                placement:"bottomRight"
              });

            setModalVisibility(false);
        } catch (error) {
            notification["error"]({
                message: error.message,
                description:'',
                placement:"bottomRight"
            });            
        }
        
    };

    return (
        <div>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='firstname'
                    label="First Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name='lastname'
                    label="Last Name"
                >
                    <Input />
                </Form.Item>




                <Form.Item
                    name='username'
                    label="Username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input autoComplete='false'/>
                </Form.Item>




                <Form.Item
                    name='email'
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>




              


                <Form.Item
                    name='client_id'
                    label="Client ID"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>




                <Form.Item
                    name="phone_number"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input

                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>


                <Form.Item
                    name='company_name'
                    label="Company Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>



                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>




        </div>
    );
};

export default ClientForm;