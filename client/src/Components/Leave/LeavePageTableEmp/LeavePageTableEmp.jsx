import React from 'react';
import { Space, Table,Button } from 'antd';




const columns = [
    {
        title: '#',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Leave Type',
        width: 100,
        dataIndex: 'Task ID',
        key: 'Task ID',
        fixed: 'left',
    },
    { title: 'From', dataIndex: 'address', key: '1' },
    { title: 'To', dataIndex: 'address', key: '2' },
    { title: 'No of days', dataIndex: 'address', key: '3' },
    { title: 'Reason', dataIndex: 'address', key: '4' },
    { title: 'Status', dataIndex: 'address', key: '5' },
    { title: 'Approved By', dataIndex: 'address', key: '6' },
    
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


const LeavePageTable = () => {
    return (
        <div style={{marginTop:"20px"}}>
              <Table bordered columns={columns} dataSource={data} />
            
        </div>
    );
};

export default LeavePageTable;