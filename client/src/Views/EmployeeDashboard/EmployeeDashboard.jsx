import { Col, Row } from "antd";
import React, { Component } from "react";
import CardAvatar from "../../Components/CardCustom/CardAvatar/CardAvatar";
import DividerVertical from "../../Components/DividerVertical/DividerVertical";

export default class EmployeeDashboard extends Component {
  render() {
    return (
      <div>
        
        <Row gutter={[8, 8]}>
          <Col span={18}>
          <CardAvatar />
          </Col>
          <Col span={6}>
          <DividerVertical></DividerVertical>
          </Col>
        </Row>
      </div>
    );
  }
}
