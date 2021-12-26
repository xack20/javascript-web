import { Table, Row, Col, Avatar, Card } from 'antd';
import React from 'react';

const { Column } = Table;



const data = [
    {
        key: '1',
        param: 'John Doe',
       

    },
    {
        key: '2',
        param: 'UI/UX Design Team',
        

    },
    {
        key: '3',
        param: 'Web Designer',
        

    },
    {
        key: '4',
        param: 'ID : FT-0001',
        

    },
    
];

const data2 = [
    {
        key: '1',
        param: 'Phone:',
        value: '9876543210',
       

    },
    {
        key: '2',
        param: 'Email:',
        value: 'johndoe@example.com',
        

    },
    {
        key: '3',
        param: 'Birthday:',
        value: '24th July',
        

    },
    {
        key: '4',
        param: 'Address:',
        value: '1861 Bayonne Ave, Manchester Township, NJ, 08759',
        

    },
    {
        key: '5',
        param: 'Gender:',
        value: 'Male',
        

    },
    {
        key: '6',
        param: 'Reports to:',
        value: 'Jeffery Lalor',
        

    },
];

const ProfileTableEmpTop = () => {
    return (
        <div>
            <Row gutter={16}>
                <Col span={12} >
                <Avatar src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png" size={100} />
                    <Table showHeader={false} pagination={false} dataSource={data}>

                        <Column dataIndex="param" />
                    </Table>

                </Col>
                <Col span={12} >
                    <Table showHeader={false} pagination={false} dataSource={data2}>

                        <Column dataIndex="param" />
                        <Column dataIndex="value" />
                    </Table>

                </Col>

            </Row>



        </div >
    );
};

export default ProfileTableEmpTop;