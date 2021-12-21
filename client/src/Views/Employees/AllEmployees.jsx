import React from 'react';
import { Row, Col, Card } from 'antd';
import './AllEmployees.css';
import MetaCustom from '../../Components/MetaCustom/MetaCustom.jsx';

import person from '../../Data/persons.js';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import SearchBarClient from '../../Components/SearchBarClient/SearchBarClient';
import AddButton from '../../Components/AddButton/AddButton';

function AllEmployees() {
  return (
    <div>

        <AddButton></AddButton>
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
}

export default AllEmployees;
