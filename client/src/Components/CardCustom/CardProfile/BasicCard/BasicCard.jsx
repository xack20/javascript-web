import React from 'react';
import { Button, Row } from 'antd';

import { EditOutlined } from '@ant-design/icons';
import NewTry from './NewTry';



const BasicCard = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                <Button ghost type="primary" icon={<EditOutlined />} style={{ borderRadius: "10px" }}></Button>
            </div>
            <div>
                <NewTry></NewTry>


                <Row type="flex" justify="center" align="middle" style={{ minHeight: '10vh' }}>

                    <Button ghost type="primary" style={{ borderRadius: "10px" }}>Save</Button>
                </Row>


            </div>





        </div>
    );
};

export default BasicCard;


