import React from 'react';
import { Card, Col, Row } from 'antd';

const LeavePageCard = () => {
    return (
        <div className="site-statistic-demo-card">
        <Row gutter={16}>
            <Col span={6}>
                <Card style={{ textAlign:"center", background: "#fff7e6", borderRadius: "20px",borderColor: "#096dd9"}}>
                    <h5>Annual Leave</h5>
                    <h3 style={{fontWeight:"bold"}}>12</h3>
                </Card>
            </Col>
            <Col span={6}>
                <Card style={{ textAlign:"center", background: "#fcffe6", borderRadius: "20px",borderColor: "#08979c" }}>
                <h5>Medical Leave</h5>
                    <h3 style={{fontWeight:"bold"}}>12</h3>
                </Card>
            </Col>


            <Col span={6}>
            <Card style={{  textAlign:"center",background: "#e6f7ff", borderRadius: "20px",borderColor: "#531dab" }}>
            <h5>Other Leave</h5>
                    <h3 style={{fontWeight:"bold"}}>12</h3>
                </Card>
            </Col>

            <Col span={6}>
            <Card style={{ textAlign:"center", background: "#e6fffb", borderRadius: "20px",borderColor: "#7cb305" }}>
            <h5>Remaining Leave</h5>
                    <h3 style={{fontWeight:"bold"}}>12</h3>
                </Card>
            </Col>

            
        </Row>
    </div>
    );
};

export default LeavePageCard;