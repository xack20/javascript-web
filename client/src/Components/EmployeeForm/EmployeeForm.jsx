import React from 'react';
import { Form, Input, Button,Cascader } from 'antd';



const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 12,
    },
};


const optionsPrio = [
    {
        value: 'High',
        label: 'High',

    },
    {
        value: 'Medium',
        label: 'Medium',

    },
    {
        value: 'Low',
        label: 'Low',

    }

];

function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
}


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



const EmployeeForm = () => {


    const onFinish = (values) => {
        console.log(values);
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
                    <Input autoComplete='off' allowClear='true'/>
                </Form.Item>


                <Form.Item
                    name='lastname'
                    label="Last Name"
                >
                    <Input autoComplete='off' allowClear='true'/>
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
                <Input  autoComplete='off' allowClear='true'/>
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
                <Input autoComplete='off' allowClear='true'/>
            </Form.Item>




            {/* Password field */}


            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    {
                            
                        min: 3, 
                        max: 8,
                        message: 'Password must be in between 3 to 8 characters.'
                    },
                ]}
                hasFeedback
            >
                <Input.Password autoComplete='off' allowClear='true'/>
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password autoComplete='off' allowClear='true'/>
            </Form.Item>


            <Form.Item
                name='id'
                label="Employee ID"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input autoComplete='off' allowClear='true'/>
            </Form.Item>




            <Form.Item
                name="phone"
                label="Phone Number"
            >
                <Input

                    style={{
                        width: '100%',
                    }}
                    autoComplete='off' allowClear='true'
                />
            </Form.Item>


            <Form.Item
                name='role'
                label="Role"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input autoComplete='off' allowClear='true'/>
            </Form.Item>

            <Form.Item
                name= 'designation'
                label="Designation"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input autoComplete='off' allowClear='true'/>
            </Form.Item>

            <Form.Item
                name='department'
                label="Department"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
               <Input autoComplete='off' allowClear='true'/>
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

export default EmployeeForm;