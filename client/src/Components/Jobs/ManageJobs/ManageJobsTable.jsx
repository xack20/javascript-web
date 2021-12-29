import React, {useState} from 'react';
import { Button, Space, Table } from 'antd';
import AddButton from "../../AddButton/AddButton";
import MyModal from '../../MyModal/MyModal.jsx';
import "./styles.css"
import ManageJobsForm from './ManageJobsForm';


const columns = [
    {
        title: '#',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Job Title',
        width: 100,
        dataIndex: 'jobTitle',
        key: 'jobTitle',
        fixed: 'left',
    },
    { title: 'Job Position', dataIndex: 'address', key: '1' },
    { title: 'Work Hours', dataIndex: 'address', key: '2' },
    { title: 'Salary', dataIndex: 'address', key: '3', width: 200, },
    { title: 'Job Description', dataIndex: 'address', key: '4',width: 500, },
    

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

const ManageJobsTable = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <div>
            <AddButton setModalVisibility={setModalVisibility} buttonName={"Add Job"}></AddButton>
      <MyModal Width={1200} Title={"Add Job"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
        <ManageJobsForm setModalVisibility={setModalVisibility}></ManageJobsForm>
      </MyModal>

             <Table style={{border:"10px"}} columns={columns} dataSource={data} bordered />
        </div>
    );
};

export default ManageJobsTable;