import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useState } from 'react';



const CardProgress = () => {
    const [newTicketChangeStat,setNewTicketChangeStat] = useState(20)
    const [oldTicketChangeStat,setOldTicketChangeStat] = useState(-9.3)
    


    return (
         <div className="site-statistic-demo-card">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card style={{  background: `${ newTicketChangeStat >= 0 ?   "#e6fffb"  : "#fff1f0"}`, borderRadius: "20px",borderColor: "#096dd9"}}>
                            <Statistic
                                title="New Tickets"
                                value={newTicketChangeStat}
                                precision={2}
                                valueStyle={{ color: `${ newTicketChangeStat >= 0 ? "#3f8600" : "#cf1322" }` }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                                style={{fontWeight: "bold"}}
                            />
                            <Progress
                                strokeColor={{
                                    '0%': '#00474f',
                                    '100%': '#00474f',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{  background: `${ oldTicketChangeStat < 0 ?      "#fff1f0" : "#e6fffb"}`, borderRadius: "20px",borderColor: "#08979c" }}>
                            <Statistic
                                title="Solved Tickets"
                                value={Math.abs(oldTicketChangeStat)}
                                precision={2}
                                valueStyle={{ color: `${ oldTicketChangeStat < 0 ?  "#cf1322" : "#3f8600"}` }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                                style={{fontWeight: "bold"}}
                                
                            />
                             <Progress
                                strokeColor={{
                                    '0%': '#00474f',
                                    '100%': '#00474f',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>


                    <Col span={6}>
                    <Card style={{  background: `${ oldTicketChangeStat < 0 ?      "#fff1f0" : "#e6fffb"}`, borderRadius: "20px",borderColor: "#531dab" }}>
                            <Statistic
                                title="Open Tickets"
                                value={Math.abs(oldTicketChangeStat)}
                                precision={2}
                                valueStyle={{ color: `${ oldTicketChangeStat < 0 ?  "#cf1322" : "#3f8600"}`}}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                                style={{fontWeight: "bold"}}
                                
                            />
                             <Progress
                                strokeColor={{
                                    '0%': '#00474f',
                                    '100%': '#00474f',
                                }}
                                percent={99.9}
                            />
                        </Card>
                    </Col>

                    <Col span={6}>
                    <Card style={{  background: `${ newTicketChangeStat >= 0 ?   "#e6fffb"  : "#fff1f0"}` , borderRadius: "20px",borderColor: "#7cb305" }}>
                            <Statistic
                                title="Pending Tickets"
                                value={newTicketChangeStat}
                                precision={2}
                                valueStyle={{ color: `${ newTicketChangeStat >= 0 ?   "#3f8600"  : "#cf1322"}` }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                                style={{fontWeight: "bold"}}
                            />
                            <Progress
                                strokeColor={{
                                    '0%': '#00474f',
                                    '100%': '#00474f',
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