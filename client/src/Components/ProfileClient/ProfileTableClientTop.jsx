import { Avatar, Col, Divider, Row, Table, Input } from 'antd';
import React,{useState,useEffect} from 'react';

const { Column } = Table;





const ProfileTableCilentTop = ({clientProfileState,load,setLoad,edit}) => {

    const [data,setData] = useState([
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
    
    const [data2,setData2] = useState([
        {
            key: 'phone_number',
            param: 'Phone:',
            value: '9876543210',
           
    
        },
        {
            key: 'email',
            param: 'Email:',
            value: 'johndoe@example.com',
            
    
        },
        {
            key: 'birthday',
            param: 'Birthday:',
            value: '24th July',
            
    
        },
        {
            key: 'address',
            param: 'Address:',
            value: '1861 Bayonne Ave, Manchester Township, NJ, 08759',
            
    
        },
        {
            key: 'gender',
            param: 'Gender:',
            value: 'Male',
            
    
        },
       
    ]);


    useEffect(() => {
        const DATA = [...data];
        const DATA2 = [...data2];
        
        try {
            DATA[0].value = clientProfileState.company_name;
            DATA[1].value = clientProfileState.client_name;
            DATA[2].value = clientProfileState.designation;
            DATA[3].value = clientProfileState.client_id;

            DATA2[0].value = clientProfileState.phoneNumber;
            DATA2[1].value = clientProfileState.email;
            DATA2[2].value = clientProfileState.birthday;
            DATA2[3].value = clientProfileState.address;
            DATA2[4].value = clientProfileState.gender;
            
        } catch (error) {

        }

        setData(DATA);
        setData2(DATA2);


    }, [clientProfileState]);


    useEffect(() => {
        const Load = {}
        try {
            Load.client_name = clientProfileState.firstname + ' ' + clientProfileState.lastname
            Load.company_name = clientProfileState.company_name
            Load.designation = clientProfileState.designation
            Load.client_id = clientProfileState.client_id
            Load.phone_number = clientProfileState.phone_number
            Load.email = clientProfileState.email
            Load.birthday = clientProfileState.birthday
            Load.address = clientProfileState.address
            Load.gender = clientProfileState.gender
            


            setLoad(Load)
        } catch (error) {
            
        }

        

    },[edit])

    const setChange = (value,key) => {
        const Load = {...load}
        if(key==='client_name'){
            Load.firstname = value.split(" ")[0]
            Load.lastname = value.split(" ")[1]
        }
        else Load[[key]] = value
        setLoad(Load)
    }




    return (
        <div>
            <Row gutter={16}>
                <Col span={12} >
                <Avatar src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png" size={100} />
                    <Table showHeader={false} pagination={false} dataSource={data}>

                        <Column dataIndex="value" 
                        render={(text, index) => {
                                return (edit) ?  <Input  placeholder={index.key} allowClear  onChange={(e)=>{setChange(e.target.value,index.key)}}/> : text
                            }} />
                    </Table>

                </Col>
                <Col span={12} >
                    <Table showHeader={false} pagination={false} dataSource={data2}>

                        <Column dataIndex="param" />
                        <Column dataIndex="value" 
                        render={(text, index) => {
                            return (edit) ?  <Input  placeholder={index.key} allowClear  onChange={(e)=>{setChange(e.target.value,index.key)}}/> : text
                        }}
                        />
                    </Table>

                </Col>

            </Row>

            <Divider></Divider>



        </div >
    );
};

export default ProfileTableCilentTop;