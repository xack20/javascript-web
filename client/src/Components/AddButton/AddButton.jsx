import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const AddButton = () => {
    return (
        <div>

            <Button style={{ width: "10%", height: "40px", background: "#fa8c16", borderRadius: "20px" }} className='m-3' type="primary" icon={<PlusOutlined />}>
                Add Ticket
            </Button>

        </div>
    );
};

export default AddButton;