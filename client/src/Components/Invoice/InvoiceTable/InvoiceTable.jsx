import React from 'react';

import { Space, Table,Button } from 'antd';
import "./style.css";

const columns = [
    {
        title: '#',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Invoice Number',
        width: 100,
        dataIndex: 'Task ID',
        key: 'Task ID',
        fixed: 'left',
    },
    { title: 'Client', dataIndex: 'address', key: '1' },
    { title: 'Created Date', dataIndex: 'address', key: '2' },
    { title: 'Due Date', dataIndex: 'address', key: '3' },
    { title: 'Amount', dataIndex: 'address', key: '4' },
    { title: 'Status', dataIndex: 'address', key: '5' },
    
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


const InvoiceTable = () => {
    return (
        <div style={{marginTop:"10px"}}>
             <Table bordered columns={columns} dataSource={data} />

            
        </div>
    );
};

export default InvoiceTable;