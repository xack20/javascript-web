import React from 'react';
import { Row, Col, Card, Button } from 'antd';


const ApplyCard = () => {
    const onApply = () => {
        console.log("Apply");
    }

    return (
        <div style={{ margin: "20px" }}>
            <Row gutter={16}>
                <Col span={3}>
                </Col>

                <Col span={9}>
                    <Card bordered={true} style={{ width: "100%", borderRadius: "20px", borderColor: "#531dab",height:"30vh" }}>


                        <h5>Web Developer</h5>
                        <p>Development</p>
                        <Button ghost type="primary" style={{ borderRadius: "10px", float: "right" }} onClick={onApply}>Details</Button>
                        <p>
                            Full-Time
                        </p>


                    </Card>

                </Col>

                <Col span={9}>
                    <Card bordered={true} style={{ width: "100%", borderRadius: "20px", borderColor: "#7cb305", height:"30vh" }}>
                        <h5>Web Developer</h5>
                        <p>Development</p>
                        <Button ghost type="primary" style={{ borderRadius: "10px", float: "right" }} onClick={onApply}>Apply</Button>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti provident veniam sint ducimus quo possimus!
                             Cum, dolor assumenda? Veritatis provident quas tempora vero quos sint sunt corrupti ipsa vel.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti provident veniam sint ducimus quo possimus!
                             Cum, dolor assumenda? Veritatis provident quas tempora vero quos sint sunt corrupti ipsa vel.
                        </p>
                    </Card>
                </Col>

                <Col span={3}>
                </Col>

            </Row>


        </div>
    );
};

export default ApplyCard;
