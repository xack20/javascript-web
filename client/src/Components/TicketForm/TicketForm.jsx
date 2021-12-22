import React from 'react';
import { Form, Input, Radio, Button } from 'antd';



const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 12,
    },
};


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




const TicketForm = () => {


    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['ticket', 'subject']}
                    label="Ticket Subject"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name={['ticket', 'id']}
                    label="Ticket ID"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>




                <Form.Item
                    name={['assigned', 'staff']}
                    label="Assigned Staff"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>




                <Form.Item
                    name={['client', 'name']}
                    label="Client Name"

                >
                    <Input />
                </Form.Item>




                {/* Password field */}


                <Form.Item name="radio-group" label="Priority">
                    <Radio.Group>
                        <Radio value="high">High</Radio>
                        <Radio value="normal">Normal</Radio>
                        <Radio value="low">Low</Radio>
                    </Radio.Group>
                </Form.Item>


                <Form.Item
                    name={['employee', 'assigned']}
                    label="Assigned to"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>






                <Form.Item
                    name={['ticket', 'description']}
                    label="Description"
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

export default TicketForm;