import { DeleteOutlined, EditOutlined,PlusOutlined } from '@ant-design/icons';
import { Card, Col, Row,Button } from 'antd';
import React from 'react';
import MetaCustom from '../../Components/MetaCustom/MetaCustom.jsx';
import SearchBarClient from '../../Components/SearchBarClient/SearchBarClient.jsx';
import person from '../../Data/persons.js';
import './Clients.css';


const Clients = () => {
  return (
    <div>
      <Button style={{ width: "10%", height:"40px", background: "#fa8c16" , borderRadius:"20px" }} className='m-3' type="primary" icon={<PlusOutlined />}>
                Add Client
            </Button>

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
            <Card
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
};

export default Clients;
