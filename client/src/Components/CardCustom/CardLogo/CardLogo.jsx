import React from 'react';
import { Row, Col, Card } from 'antd';
import { ApartmentOutlined,UserOutlined,UsergroupDeleteOutlined,ContainerTwoTone } from '@ant-design/icons';
const CardLogo = () => {
    return (




        <div style={{ margin: '20px' }}>
            <Row gutter={16}>
                <Col span={6}>
                    <Card style={{ height:'140px',borderColor: "#7cb305", borderRadius:"10px"}}>
                        <ApartmentOutlined style={{ float: "left", fontSize: '40px', color: '#531dab' }} />
                        <div style={{ float: "right" }}>
                            
                            <p style={{ fontSize: "20px"}}><span style={{ fontSize: "30px", fontWeight: "bold" }}>112 </span> <br /> Projects </p>
                        </div>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={{ height:'140px',borderColor: "#096dd9", borderRadius:"10px"}}>
                    
                        <UsergroupDeleteOutlined style={{ float: "left", fontSize: '40px', color: '#00474f' }} />
                        <div style={{ float: "right" }}>
                            <p style={{ fontSize: "20px"}}><span style={{ fontSize: "30px", fontWeight: "bold" }}>112 </span> <br /> Clients </p>
                        </div>
                    </Card>
                    
                </Col>
                <Col span={6}>
                    <Card style={{ height:'140px',borderColor: "#08979c", borderRadius:"10px"}}>
                        <ContainerTwoTone style={{ float: "left", fontSize: '40px', color: '#08c' }} />
                        <div style={{ float: "right" }}>
                        <p style={{ fontSize: "20px"}}><span style={{ fontSize: "30px", fontWeight: "bold" }}>112 </span> <br /> Tasks </p>
                            
                        </div>
                    </Card>
                    
                </Col>
                <Col span={6}>
                    
                    <Card style={{ height:'140px',borderColor: "#531dab", borderRadius:"10px"}}>
                        <UserOutlined  style={{  fontSize: '40px', color: '#096dd9' }} />
                        <div style={{ float: "right" }}>
                        <p style={{ fontSize: "20px"}}><span style={{ fontSize: "30px", fontWeight: "bold" }}>112 </span> <br /> Employees </p>
                            
                        </div>
                    </Card>
                    
                </Col>
            </Row>

        </div>
    );
};

export default CardLogo;