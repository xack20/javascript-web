import React from 'react';
import { Form, Input, Button, notification } from 'antd';

const { TextArea } = Input;



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



const ManageJobsForm = ({setModalVisibility}) => {

    const onFinish = (values) => {

        setModalVisibility(false);

        notification["success"]({
            message: 'Application Added Successfully',
            description: '',
            placement: "bottomRight"
        });

        //console.log(values);
    };

    return (


        <div>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='jobTitle'
                    label="Job Title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input autoComplete='off' allowClear='true' />
                </Form.Item>


                <Form.Item
                    name='jobPosition'
                    label="Job Position"
                >
                    <Input autoComplete='off' allowClear='true' />
                </Form.Item>


                <Form.Item
                    name='workHours'
                    label="Work Hours"
                >
                    <Input autoComplete='off' allowClear='true' />
                </Form.Item>






                <Form.Item
                    name="salary"
                    label="Salary"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input

                        style={{
                            width: '100%',
                        }}

                        autoComplete='off' allowClear='true'
                    />
                </Form.Item>



                <Form.Item
                    name='jobDescription'
                    label="Job Description"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextArea rows={4} />
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

export default ManageJobsForm;