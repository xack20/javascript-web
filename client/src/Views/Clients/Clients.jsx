import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import AddButton from '../../Components/AddButton/AddButton.jsx';
import ClientForm from '../../Components/ClientForm/ClientForm.jsx';
import MetaCustom from '../../Components/MetaCustom/MetaCustom.jsx';
import MyModal from '../../Components/MyModal/MyModal.jsx';
import Project from '../../Components/Project/Project.jsx';
import SearchBarClient from '../../Components/SearchBarClient/SearchBarClient.jsx';
import person from '../../Data/persons.js';
import './Clients.css';



const Clients = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <div>
      <AddButton setModalVisibility={setModalVisibility} buttonName={"Add Client"}></AddButton>
      <MyModal Width={900} Title={"Add Client"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
        <ClientForm></ClientForm>
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


    <Project></Project>

    
  </div>
  );
};

export default Clients;
