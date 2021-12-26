import { Row, Col, Table, } from 'antd';
import React from 'react';

import { Steps, Divider } from 'antd';

const { Step } = Steps;

const { Column } = Table;


const data = [
    {
        key: '1',
        param: 'Passport No:',
        value: '9876543210',


    },
    {
        key: '2',
        param: 'Telphone No:',
        value: '9876543210',


    },
    {
        key: '3',
        param: 'Nationality:',
        value: 'Bangladeshi',


    },
    {
        key: '4',
        param: 'Religion:',
        value: 'Islam',


    },
    {
        key: '5',
        param: 'Marital status:',
        value: 'Single',


    },
    {
        key: '6',
        param: 'Employment of spouse:',
        value: 'No',


    },
];


const data2 = [
    {
        key: '1',
        param: 'Name:',
        value: 'John Doe',


    },
    {
        key: '2',
        param: 'Relationship:',
        value: 'Father',


    },
    {
        key: '3',
        param: 'Phone:',
        value: '9876543210',


    },
    {
        key: '4',
        param: 'Name:',
        value: 'Karen Wills',


    },
    {
        key: '5',
        param: 'Relationship:',
        value: 'Brother',


    },
    {
        key: '6',
        param: 'Phone:',
        value: '9876543210',


    },
];

const data3 = [
    {
        key: '1',
        param: 'Bank Name:',
        value: 'ICICI Bank',


    },
    {
        key: '2',
        param: 'Bank account No:',
        value: '159843014641',


    },
    {
        key: '3',
        param: 'IFSC Code:',
        value: 'ICI24504',


    },
    {
        key: '4',
        param: 'ID No:',
        value: '948583200',


    },
];



const data4 = [
    {
        key: '1',
        param: 'Name:',
        value: 'Leo',


    },
    {
        key: '2',
        param: 'Relationship:',
        value: 'Brother',


    },
    {
        key: '3',
        param: 'Date of Birth:',
        value: 'Feb 16th, 2019',


    },
    {
        key: '4',
        param: 'Phone:',
        value: '9876543210',


    },

];






const LowerPart = () => {
    return (
        <div style={{marginTop:"50px"}}>
            <Row style={{marginTop:"20px"}} gutter={16}>

                <Col span={12}>
                    <h5>Personal Info</h5>
                    <Table showHeader={false} pagination={false} dataSource={data}>

                        <Column dataIndex="param" />
                        <Column dataIndex="value" />
                    </Table>

                </Col>


                <Col span={12}>
                    <h5>Emergency Contact</h5>
                    <Table showHeader={false} pagination={false} dataSource={data2}>

                        <Column dataIndex="param" />
                        <Column dataIndex="value" />
                    </Table>

                </Col>
            </Row>





            <Row gutter={16} style={{ marginTop: "50px" }}>

                <Col span={12}>
                    <h5>Bank Information</h5>
                    <Table showHeader={false} pagination={false} dataSource={data3}>

                        <Column dataIndex="param" />
                        <Column dataIndex="value" />
                    </Table>

                </Col>


                <Col span={12}>
                    <h5>Family Information</h5>
                    <Table showHeader={false} pagination={false} dataSource={data4}>

                        <Column dataIndex="param" />
                        <Column dataIndex="value" />
                    </Table>

                </Col>
            </Row>




            <Row gutter={16} style={{marginTop:"50px"}}>
                <Col span={12}>
                    <h5>Education Informations</h5>

                    <Steps progressDot current={3} direction="vertical">
                        <Step title="P University" description="BSC in CSE" />
                        <Step title="C College" description="HSC" />
                        <Step title="D School" description="SSC" />
                    </Steps>

                </Col>

                <Col span={12}>
                <h5>Experience</h5>

                <Steps progressDot current={0} direction="vertical">
                        <Step title="BJIT" description="Software Engineer" />
                        <Step title="Web Designer at Ron-tech" description="Software Engineer" />
                        <Step title="Web Designer at Zen Corporation" description="Trainee" />
                    </Steps>

                </Col>
            </Row>

        </div>
    );
};

export default LowerPart;