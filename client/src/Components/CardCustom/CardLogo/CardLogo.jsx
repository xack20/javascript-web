import React from 'react';
import { Row, Col, Card } from 'antd';
import { ApartmentOutlined,UserOutlined,UsergroupDeleteOutlined,ContainerTwoTone } from '@ant-design/icons';
const CardLogo = () => {
    return (




        <div style={{ margin: '20px' }}>
            <Row gutter={16}>
                <Col span={6}>
                    <Card style={{ height:'140px',borderColor: "#7cb305"}}>
                        <ApartmentOutlined style={{ float: "left", fontSize: '40px', color: '#08c' }} />
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "32px", fontWeight: "bold" }}>112</p>
                            <p>Projects</p>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={{ height:'140px',borderColor: "#096dd9"}}>
                    
                        <UsergroupDeleteOutlined style={{ float: "left", fontSize: '40px', color: '#08c' }} />
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "32px", fontWeight: "bold" }}>112</p>
                            <p>Clients</p>
                        </div>
                    </Card>
                    
                </Col>
                <Col span={6}>
                    <Card style={{ height:'140px',borderColor: "#08979c"}}>
                        <ContainerTwoTone style={{ float: "left", fontSize: '40px', color: '#08c' }} />
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "32px", fontWeight: "bold" }}>112</p>
                            <p>Tasks</p>
                        </div>
                    </Card>
                    
                </Col>
                <Col span={6}>
                    
                    <Card style={{ height:'140px',borderColor: "#531dab"}}>
                        <UserOutlined  style={{ float: "left", fontSize: '40px', color: '#08c' }} />
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "32px", fontWeight: "bold" }}>112</p>
                            <p>Projects</p>
                        </div>
                    </Card>
                    
                </Col>
            </Row>

        </div>
    );
};

export default CardLogo;