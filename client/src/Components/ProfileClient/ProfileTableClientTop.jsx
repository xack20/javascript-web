import { Avatar, Col, Divider, Row, Table } from 'antd';
import React,{useState,useEffect} from 'react';

const { Column } = Table;





const ProfileTableCilentTop = ({clientProfileState}) => {

    const [data,setData] = useEffect([
        {
            key: 'company_name',
            value: 'Global Technologies',
           
    
        },
        {
            key: 'client_name',
            value: 'Barry Cuda',
            
    
        },
        {
            key: 'designation',
            value: 'CEO',
            
    
        },
        {
            key: 'client_id',
            value: 'CLT-0001',
            
    
        },
        
    ]);
    
    const [data2,setData2] = useEffect([
        {
            key: 'Phone',
            param: 'Phone:',
            value: '9876543210',
           
    
        },
        {
            key: 'Email',
            param: 'Email:',
            value: 'johndoe@example.com',
            
    
        },
        {
            key: 'Birthday',
            param: 'Birthday:',
            value: '24th July',
            
    
        },
        {
            key: 'Address',
            param: 'Address:',
            value: '1861 Bayonne Ave, Manchester Township, NJ, 08759',
            
    
        },
        {
            key: 'Gender',
            param: 'Gender:',
            value: 'Male',
            
    
        },
       
    ]);


    useEffect(() => {
        const DATA = [...data];
        
        try {
            DATA[0].value = clientProfileState.client.company_name;
            DATA[1].value = clientProfileState.client.client_name;
            DATA[2].value = clientProfileState.client.designation;
            DATA[3].value = clientProfileState.client.client_id;
            
        } catch (error) {

        }

        setData(DATA);


    }, [clientProfileState]);


    useEffect(() => {
        const DATA = [...data2];
        
        try {
            DATA[0].value = clientProfileState.client.phone;
            DATA[1].value = clientProfileState.client.email;
            DATA[2].value = clientProfileState.client.birthday;
            DATA[3].value = clientProfileState.client.address;
            DATA[4].value = clientProfileState.client.gender;
            
        } catch (error) {

        }

        setData2(DATA);


    }, [clientProfileState]);




    return (
        <div>
            <Row gutter={16}>
                <Col span={12} >
                <Avatar src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png" size={100} />
                    <Table showHeader={false} pagination={false} dataSource={data}>

                        <Column dataIndex="value" />
                    </Table>

                </Col>
                <Col span={12} >
                    <Table showHeader={false} pagination={false} dataSource={data2}>

                        <Column dataIndex="param" />
                        <Column dataIndex="value" />
                    </Table>

                </Col>

            </Row>

            <Divider></Divider>



        </div >
    );
};

export default ProfileTableCilentTop;