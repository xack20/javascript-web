
import React from 'react';
import { Space, Table,Button } from 'antd';
import "./TableLeads.css";

const columns = [
    {
        title: '#',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Lead Name',
        width: 100,
        dataIndex: 'Task ID',
        key: 'Task ID',
        fixed: 'left',
    },
    { title: 'Email', dataIndex: 'address', key: '1' },
    { title: 'Mobile', dataIndex: 'address', key: '2' },
    { title: 'Project', dataIndex: 'address', key: '3' },
    { title: 'Assigned Staff', dataIndex: 'address', key: '4' },
    { title: 'Status', dataIndex: 'address', key: '5' },
    { title: 'Created', dataIndex: 'address', key: '6' },
    
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => ( <Space size="middle">
       <Button type="primary" style={{ background: "#531dab", borderRadius: "10px" }}>Edit</Button>
        <Button type="primary" danger style={{borderRadius:"10px"}}>Delete</Button>
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



const TableLeads = () => {
    return (
        <div>
             <Table bordered columns={columns} dataSource={data} />

            
        </div>
    );
};

export default TableLeads;

 <Table columns={columns} dataSource={data} />
