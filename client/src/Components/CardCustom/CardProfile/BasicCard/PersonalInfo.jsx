import { Card, Table } from 'antd';
import React from 'react';
import { Steps } from 'antd';
import "./NewTry.css";

const { Column } = Table;
const { Step } = Steps;

const data = [
    {
        key: '1',
        info_tag: 'Passport No',
        info_det: '9876543210',

    },
    {
        key: '2',
        info_tag: 'Cell Phone',
        info_det: 'johndoe@example.com',

    },
    {
        key: '3',
        info_tag: 'Nationality',
        info_det: 'Bangladeshi',

    },
    {
        key: '4',
        info_tag: 'Religion',
        info_det: 'Islam',

    },
    {
        key: '5',
        info_tag: 'Marital status',
        info_det: 'Single',

    },


];

const data2 = [
    {
        key: '1',
        info_tag: 'Name',
        info_det: 'John Doe',

    },
    {
        key: '2',
        info_tag: 'Relationship',
        info_det: 'Father',

    },
    {
        key: '3',
        info_tag: 'Phone',
        info_det: '9876543210',

    },
    {
        key: '4',
        info_tag: 'Name',
        info_det: 'Karen Wills',

    },
    {
        key: '5',
        info_tag: 'Relationship',
        info_det: 'Brother',

    },
    {
        key: '6',
        info_tag: 'Phone',
        info_det: '9839997210',

    },


];

const data3 = [
    {
        key: '1',
        info_tag: 'Bank Name',
        info_det: 'ICICI Bank',

    },
    {
        key: '2',
        info_tag: 'Bank account No',
        info_det: '159843014641',

    },
    {
        key: '3',
        info_tag: 'Voter ID',
        info_det: '9876543210',

    },
    {
        key: '4',
        info_tag: 'IFSC Code',
        info_det: 'ICI24504',

    },


];

const data4 = [
    {
        key: '1',
        info_tag: 'Name',
        info_det: 'Brother',

    },
    {
        key: '2',
        info_tag: 'Date of Birth',
        info_det: '24 June',

    },
    {
        key: '3',
        info_tag: 'Phone',
        info_det: '9876543210',

    },

];


const gridStyle = {
    width: '50%',

};

const PersonalInfo = () => {
    return (
        <div>
            <div style={{ marginTop: "30px" }}>


                <Card equal-heights
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>

                    <Card.Grid hoverable={false} style={gridStyle}>
                        <h5>
                        Personal Info
                        </h5>

                        <Table  pagination={false} dataSource={data}>

                            <Column  dataIndex="info_tag" key="info_tag" />
                            <Column dataIndex="info_det" key="info_det" />
                        </Table>
                    </Card.Grid>




                    <Card.Grid hoverable={false} style={gridStyle}>
                    <h5>
                    Emergency Contact
                        </h5>

                        <Table pagination={false} dataSource={data2}>

                            <Column dataIndex="info_tag" key="info_tag" />
                            <Column dataIndex="info_det" key="info_det" />
                        </Table>
                    </Card.Grid>
                </Card>

            </div>






            <div style={{ marginTop: "30px" }}>
                <Card equal-heights
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>

                    <Card.Grid hoverable={false} style={gridStyle}>
                    <h5>
                    Bank Info
                        </h5>

                        <Table pagination={false} dataSource={data3}>

                            <Column dataIndex="info_tag" key="info_tag" />
                            <Column dataIndex="info_det" key="info_det" />
                        </Table>
                    </Card.Grid>




                    <Card.Grid hoverable={false} style={gridStyle}>
                    <h5>
                        Family Info
                        </h5>

                        <Table pagination={false} dataSource={data4}>
                       

                            <Column dataIndex="info_tag" key="info_tag" />
                            <Column dataIndex="info_det" key="info_det" />
                        </Table>
                    </Card.Grid>
                </Card>

            </div>




            <div style={{ marginTop: "30px" }}>
                <Card equal-heights
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>

                    <Card.Grid hoverable={false} style={gridStyle}>
                        <h5>
                        Educational Info
                        </h5>

                        <Steps progressDot current={4} direction="vertical">
                            <Step title="SSC" description="T School and College" />
                            <Step title="HSC" description="T School and College" />
                            <Step title="BSC" description="L University" />
                            
                        </Steps>
                    </Card.Grid>




                    <Card.Grid hoverable={false} style={gridStyle}>

                        <h5>
                        Experience
                        </h5>

                        <Steps progressDot current={0} direction="vertical">
                            <Step title="BJIT" description="2 years 2 months" />
                            <Step title="Web Designer at Ron-tech" description=" 7 months" />
                            <Step title="Web Designer at Dalt Technology" description="1 year" />

                        </Steps>
                    </Card.Grid>

                </Card>

            </div>



        </div>
    );
};

export default PersonalInfo;