import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';



const CardProgress = () => {
    return (
         <div className="site-statistic-demo-card">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card style={{  background: "#fff7e6", borderRadius: "20px",}}>
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
                                    '0%': '#f857a6',
                                    '100%': '#ff5858',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{  background: "#fcffe6", borderRadius: "20px" }}>
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
                                    '0%': '#E6DADA',
                                    '100%': '#274046',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>


                    <Col span={6}>
                    <Card style={{  background: "#e6f7ff", borderRadius: "20px" }}>
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
                                    '0%': '#870000',
                                    '100%': '#190A05',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>

                    <Col span={6}>
                    <Card style={{  background: "#e6fffb", borderRadius: "20px" }}>
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
                                    '0%': '#f2709c',
                                    '100%': '#ff9472',
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