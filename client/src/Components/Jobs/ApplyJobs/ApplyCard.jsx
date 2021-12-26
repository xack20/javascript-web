import React from 'react';
import { Row, Col, Card, Button } from 'antd';

const ApplyCard = () => {
    return (
        <div style={{margin:"20px"}}>
            <Row gutter={16}>
                <Col span={3}>
                </Col>

                <Col span={9}>
                <Card title="Card title" bordered={true} style={{ width: "100%" }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
                </Col>

                <Col span={9}>
                <Card title="Card title" bordered={true} style={{ width: "100%" }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
                </Col>

                <Col span={3}>
                </Col>

            </Row>

            
        </div>
    );
};

export default ApplyCard;
