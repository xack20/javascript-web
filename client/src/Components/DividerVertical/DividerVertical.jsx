import React, { Component } from "react";
import { Divider } from "antd";
import { Card } from "antd";
import { Row, Col } from "antd";


class DividerVertical extends Component {
  render() {
    return (
      <div>
        <Card style={{backgroundColor:"#0050b3",color:"white", borderRadius: "25px"}}>
          <Row >
            <Col span={6}>
              <p>14</p>
              <p>Assigned Token</p>
            </Col>
            <Divider type="vertical" style={{'background-color':'white',  height: "80px" }} />
            <Col span={6}>
              <p>14</p>
              <p>Pending Token</p>
            </Col>
            <Divider type="vertical" style={{'background-color':'white',  height: "80px" }}  />
            <Col span={6}>
              <p>14</p>
              <p>Total Token</p>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default DividerVertical;
