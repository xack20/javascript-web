import React from 'react';
import { Form, Input, Button,notification } from 'antd';

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



const EmpEditForm = () => {
    const onFinish = (values) => {

        //setModalVisibility(false);

        notification["success"]({
            message: 'Employee Added Successfully',
            description:'',
            placement:"bottomRight"
          });

        //console.log(values);
    };
    return (
        <div>
              <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='firstname'
                    label="First Name"
                   
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




           


            <Form.Item
                name='id'
                label="Employee ID"
                
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
               
            >
                <Input autoComplete='off' allowClear='true'/>
            </Form.Item>

            <Form.Item
                name= 'designation'
                label="Designation"
                
            >
                <Input autoComplete='off' allowClear='true'/>
            </Form.Item>

            <Form.Item
                name='department'
                label="Department"
               
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

export default EmpEditForm;