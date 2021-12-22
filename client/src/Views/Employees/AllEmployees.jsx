import React,{useState} from 'react';
import { Row, Col, Card } from 'antd';
import './AllEmployees.css';
import MetaCustom from '../../Components/MetaCustom/MetaCustom.jsx';
import MyModal from '../../Components/MyModal/MyModal.jsx';

import person from '../../Data/persons.js';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import SearchBarClient from '../../Components/SearchBarClient/SearchBarClient';
import AddButton from '../../Components/AddButton/AddButton';

const AllEmployees = ()=> {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    
    <div>
    <AddButton setModalVisibility={setModalVisibility} buttonName={"Add Employee"}></AddButton>
      <MyModal Width={900} Title={"Add Employee"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
        <p>Hello</p>
        <p>Hello</p>
      </MyModal>
        
      <SearchBarClient></SearchBarClient>


      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24 },
          { xs: 8, sm: 16, md: 24 },
        ]}
      >
        {person.map((element, idx) => {
          return (
            <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={6} key={idx}>
              <Card style={{borderColor:( idx&1 ? "#531dab" : "#7cb305") , borderRadius:" 10px"}}
                actions={[
                  <EditOutlined key="ellipsis" />,
                  <DeleteOutlined key="delete" />,
                ]}
                hoverable={true}
                loading={false}
              >
                <MetaCustom data={element} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default AllEmployees;
