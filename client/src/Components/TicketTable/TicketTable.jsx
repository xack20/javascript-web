
import { Button, Space, Table } from 'antd';
import  React from 'react';



const columns = [
    {
        title: '#',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Task ID',
        width: 100,
        dataIndex: 'Task ID',
        key: 'Task ID',
        fixed: 'left',
    },
    { title: 'Assigned Staff', dataIndex: 'address', key: '1' },
    { title: 'Start Date', dataIndex: 'address', key: '2' },
    { title: 'End Date', dataIndex: 'address', key: '3' },
    { title: 'Last Reply', dataIndex: 'address', key: '4' },
    { title: 'Priority', dataIndex: 'address', key: '5' },
    { title: 'Status', dataIndex: 'address', key: '6' },

    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => ( <Space size="middle">
        <Button type="primary" style={{ background: "#531dab" }}>Edit</Button>
        <Button type="primary" danger>Delete</Button>
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


const TicketTable = () => {
    return (
        <div>
              <Table columns={columns} dataSource={data} />
            
        </div>
    );
};

export default TicketTable;
