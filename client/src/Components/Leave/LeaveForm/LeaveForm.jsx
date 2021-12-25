import React from 'react';
import { Form, Input,Cascader, Button,notification, DatePicker } from 'antd';
import './style.css';


const { TextArea } = Input;
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
        value: 'Casual Leave',
        label: 'Casual Leave',

    },
    {
        value: 'Medical Leave',
        label: 'Medical Leave',

    },
    {
        value: 'Loss of Pay',
        label: 'Loss of Pay',

    }

];




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



const LeaveForm = ({setModalVisibility}) => {

    function onChange(value, selectedOptions) {
        console.log(value, selectedOptions);
    }


    const onFinish = (values) => {

        setModalVisibility(false);

        notification["success"]({
            message: 'Leave Application Added Successfully',
            description:'',
            placement:"bottomRight"
          });

        //console.log(values);
    };

    return (
        <div>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='leaveType'
                    label="Leave Type"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                     <Cascader dropdownClassName='popup'
                options={optionsPrio}
                onChange={onChange}
                placeholder="Select Leave Type" 
                style={{ borderColor: "#135200"}}
                />
                </Form.Item>


                <Form.Item
                    name='leaveFrom'
                    label="Leave From"
                >
                   <DatePicker style={{width:"100%"}} dropdownClassName="popup" onChange={onChange} />
                </Form.Item>

            


            <Form.Item
                name='leaveTo'
                label="Leave To"
                
            >
               <DatePicker style={{width:"100%"}} dropdownClassName="popup" onChange={onChange} />
            </Form.Item>




            <Form.Item
                name='numOfDays'
                label="Number of days"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input readOnly = {true}/>
            </Form.Item>



            <Form.Item
                name='remainingLeaves'
                label="Remaining Leaves"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input readOnly/>
            </Form.Item>




            <Form.Item
                name="leaveReason"
                label="Leave Reason"
            >
                <TextArea rows={3} />
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

export default LeaveForm;