import React, { Component } from "react";
import { Divider } from "antd";
import { Card } from "antd";
import { Row, Col, Button } from "antd";


class DividerVerticalV2 extends Component {
  render() {
    return (
      <div>
        <Card style={{ backgroundColor: "#006d75", color: "white", borderRadius: "25px" }}>
          <Row >
            <Col span={"50%"}>
              <div>
                <p>14</p>
                <p>Approved</p>
              </div>
            </Col>
            <Divider type="vertical" style={{ 'background-color': 'white', height: "65px" }} />
            <Col span={"50%"}>
              <div>
                <p>14</p>
                <p>Remaining</p>
              </div>
            </Col>
          </Row>


          <div class="row">
            <div class="col text-center">
              <Button type="primary" style={{ background: "#ad6800" }}>Apply</Button>
            </div>
          </div>

        </Card>
      </div>
    );
  }
}

export default DividerVerticalV2;
