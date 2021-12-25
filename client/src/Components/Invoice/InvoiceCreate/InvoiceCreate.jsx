import React from 'react';
import { Col, Input, Row } from 'antd';
import { DatePicker, Table } from 'antd';
 import "./style.css";

const { TextArea } = Input;

function onChange(date, dateString) {
    console.log(date, dateString);
}


const InvoiceCreate = () => {

    return (
        <div>
            <Row gutter={16}>
                <Col span={6}>
                    <h6>
                        Client
                        <Input style={{ marginTop: "10px" }} placeholder="Client Name" />

                    </h6>

                </Col>

                <Col span={6}>
                    <h6>
                        Project Name
                        <Input style={{ marginTop: "10px" }} placeholder="Project Name" />

                    </h6>


                </Col>



                <Col span={6}>
                    <h6>
                        Email
                        <Input style={{ marginTop: "10px" }} placeholder="Email" />

                    </h6>


                </Col>


                <Col span={6}>
                    <h6>
                        Tax
                        <Input style={{ marginTop: "10px" }} addonBefore="%" placeholder="Tax" />

                    </h6>


                </Col>



            </Row>


            <Row gutter={16}>
                <Col span={6}>

                    <h6>
                        Client Address
                        <TextArea rows={3} placeholder='Client Address' />

                    </h6>

                </Col>

                <Col span={6}>

                    <h6>
                        Billing Address
                        <TextArea rows={3} placeholder='Billing Address' />

                    </h6>


                </Col>

                <Col span={6}>

                    <h6>
                        Invoice Date
                        <DatePicker dropdownClassName="popup" onChange={onChange} />

                    </h6>


                </Col>

                <Col span={6}>
                    <h6>
                        Due Date
                        <DatePicker dropdownClassName="popup" onChange={onChange} />

                    </h6>

                </Col>

            </Row>



           


        </div>
    );
};

export default InvoiceCreate;