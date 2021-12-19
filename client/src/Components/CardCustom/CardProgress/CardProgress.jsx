import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';



const CardProgress = () => {
    return (
         <div className="site-statistic-demo-card">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card style={{  background: "#fff7e6", borderRadius: "20px",borderColor: "#096dd9"}}>
                            <Statistic
                                title="New Tickets"
                                value={20}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                                style={{fontWeight: "bold"}}
                            />
                            <Progress
                                strokeColor={{
                                    '0%': '#fa8c16',
                                    '100%': '#fa8c16',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{  background: "#fcffe6", borderRadius: "20px",borderColor: "#08979c" }}>
                            <Statistic
                                title="Solved Tickets"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                                style={{fontWeight: "bold"}}
                                
                            />
                             <Progress
                                strokeColor={{
                                    '0%': '#fa8c16',
                                    '100%': '#fa8c16',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>


                    <Col span={6}>
                    <Card style={{  background: "#e6f7ff", borderRadius: "20px",borderColor: "#531dab" }}>
                            <Statistic
                                title="Open Tickets"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                                style={{fontWeight: "bold"}}
                                
                            />
                             <Progress
                                strokeColor={{
                                    '0%': '#fa8c16',
                                    '100%': '#fa8c16',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>

                    <Col span={6}>
                    <Card style={{  background: "#e6fffb", borderRadius: "20px",borderColor: "#7cb305" }}>
                            <Statistic
                                title="Pending Tickets"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                                style={{fontWeight: "bold"}}
                            />
                            <Progress
                                strokeColor={{
                                    '0%': '#fa8c16',
                                    '100%': '#fa8c16',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>

                    
                </Row>
            </div>
    );
}; 
export default CardProgress;