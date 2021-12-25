import React from 'react';
import { Row, Col } from 'antd';

const BasicInfo = () => {
    return (
        <div>
            <Row>
                <Col span={24}>col</Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>

        </div>
    );
};

export default BasicInfo;