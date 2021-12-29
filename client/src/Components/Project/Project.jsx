import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Progress, Row, Tooltip } from 'antd';
import React from 'react';

const Project = () => {
    return (
        <div className="site-card-wrapper" style={{ marginTop: "15px" }}>
            <Row gutter={16}>
            <Col span={6}>
                    <Card title="Employee Management" bordered style={{ borderColor: "#7cb305", borderRadius: " 10px", height: "50vh" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                        <div style={{ marginTop: "20px" }}>
                            <h6>Deadline:</h6>
                            <p>21 Apr 2022</p>

                        </div>

                        <div style={{ marginTop: "20px" }}>

                            <h6>Project Leader :</h6>
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            />

                        </div>
                        <div style={{ marginTop: "20px" }}>

                            <h6>Team :</h6>
                            <Avatar.Group>
                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1890ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>


                        </div>


                        <Progress style={{ marginTop: "20px" }} percent={50} status="active" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Hospital Management" bordered style={{ borderColor: "#7cb305", borderRadius: " 10px", height: "50vh" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                        <div style={{ marginTop: "20px" }}>
                            <h6>Deadline:</h6>
                            <p>19 Apr 2023</p>

                        </div>

                        <div style={{ marginTop: "20px" }}>

                            <h6>Project Leader :</h6>
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            />

                        </div>
                        <div style={{ marginTop: "20px" }}>

                            <h6>Team :</h6>
                            <Avatar.Group>
                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1890ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>


                        </div>


                        <Progress style={{ marginTop: "20px" }} percent={30} status="active" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="ERP System" bordered style={{ borderColor: "#7cb305", borderRadius: " 10px", height: "50vh" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                        <div style={{ marginTop: "20px" }}>
                            <h6>Deadline:</h6>
                            <p>17 January 2019</p>

                        </div>

                        <div style={{ marginTop: "20px" }}>

                            <h6>Project Leader :</h6>
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            />

                        </div>
                        <div style={{ marginTop: "20px" }}>

                            <h6>Team :</h6>
                            <Avatar.Group>
                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1890ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>


                        </div>


                        <Progress style={{ marginTop: "20px" }} percent={80} status="active" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="University Management" bordered style={{ borderColor: "#7cb305", borderRadius: " 10px", height: "50vh" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...
                        <div style={{ marginTop: "20px" }}>
                            <h6>Deadline:</h6>
                            <p>17 Apr 2022</p>

                        </div>

                        <div style={{ marginTop: "20px" }}>

                            <h6>Project Leader :</h6>
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            />

                        </div>
                        <div style={{ marginTop: "20px" }}>

                            <h6>Team :</h6>
                            <Avatar.Group>
                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: '#87d068',
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: '#1890ff',
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>


                        </div>


                        <Progress style={{ marginTop: "20px" }} percent={45} status="active" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Project;