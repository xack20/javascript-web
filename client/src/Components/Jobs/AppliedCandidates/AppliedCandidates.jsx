import React from 'react';
import { Button, Space, Table } from 'antd';
import "./styles.css"


const columns = [
    {
        title: '#',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'First Name',
        width: 100,
        dataIndex: 'firstName',
        key: 'firstName',
        fixed: 'left',
    },
    { title: 'lastName', dataIndex: 'address', key: '1' },
    { title: 'Email', dataIndex: 'address', key: '2' },
    { title: 'Phone Number', dataIndex: 'address', key: '3', width: 200, },
    { title: 'Description', dataIndex: 'address', key: '4',width: 500, },
    

    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => ( <Space size="middle">
         <Button ghost type="primary" style={{ borderRadius: "10px" }}>Edit</Button>
        <Button ghost type="primary" danger style={{borderRadius:"10px"}}>Delete</Button>
      </Space>)
    },
];


const data = [
    {
        key: '1',
        name: '#'

    },
    {
        key: '2',
        name: '#'
    },
];

const AppliedCandidates = () => {
    return (
        <div>
             <Table style={{border:"10px"}} columns={columns} dataSource={data} bordered />
            
        </div>
    );
};

export default AppliedCandidates;