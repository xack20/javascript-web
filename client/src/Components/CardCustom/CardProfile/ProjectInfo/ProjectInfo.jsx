import React from 'react';
import { Card, Col, Row, Progress } from 'antd';


import AvatarGroup from './AvatarGroup';

const ProjectInfo = () => {
    return (

        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={6}>
                    <Card title="Office Management" bordered style={{ borderColor: "#531dab", height: "50vh" }}>
                        <div>
                            <p>
                                Office management is the technique of planning, organizing, coordinating and controlling office activities with a view to achieve business objectives and is concerned with efficient and effective performance of the office work.
                            </p>
                            <p>
                                Deadline:
                                17 Apr 2019
                            </p>
                        </div>
                        <div>
                            
                            <AvatarGroup></AvatarGroup>

                        </div>
                        <Progress percent={70} status="active" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Project Management" bordered style={{ borderColor: "#7cb305", height: "50vh" }}>
                       <div>
                       <p>
                            Project management is a major component of server-side application development. Having talented coders who are capable of writing intricate and innovative components is not enough. Enterprise applications require architects and software project managers.

                        </p>
                        <p>
                            Deadline:
                            17 Apr 2019
                        </p>
                       </div>

                        <div>
                        <AvatarGroup></AvatarGroup>
                        </div>
                        <Progress percent={70} status="active" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Video Calling App" bordered style={{ borderColor: "#531dab", height: "50vh" }}>
                     <div>
                     <p>
                        Project management is a major component of server-side application development. Having talented coders who are capable of writing intricate and innovative components is not enough. Enterprise applications require architects and software project managers.
                        </p>

                        <p>
                            Deadline:
                            17 Apr 2019
                        </p>
                     </div>

                        <div>
                        <AvatarGroup></AvatarGroup>
                        </div>
                        <Progress percent={70} status="active" />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card title="Hospital Management" bordered style={{ borderColor: "#7cb305", height: "50vh" }}>
                       <div>
                       <p>
                        Project management is a major component of server-side application development. Having talented coders who are capable of writing intricate and innovative components is not enough. Enterprise applications require architects and software project managers.
                        </p>
                        <p>
                            Deadline:
                            17 Apr 2019
                        </p>
                       </div>

                        <div>
                        <AvatarGroup></AvatarGroup>
                        </div>

                        <Progress percent={70} status="active" />
                    </Card>
                </Col>
            </Row>
        </div>




    );
};

export default ProjectInfo;