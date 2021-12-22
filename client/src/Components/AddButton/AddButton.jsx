import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';


const AddButton = ({setModalVisibility, buttonName}) => {
    return (
        <div>

            <Button onClick={() => {setModalVisibility(true)}} 
            style={{ width: "10%", height: "60px",  borderRadius: "20px" }} ghost className='m-3' type="primary" icon={<PlusOutlined />}>
                {buttonName}
            </Button>

        </div>
    );
};

export default AddButton;