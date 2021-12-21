import { Divider } from "antd";
import { Card } from "antd";
import { Row, Col, Button } from "antd";
import React from 'react';

const DividerVerticalV2 = ({props}) => {

  const onApply = () => {
    console.log("Apply");
  }

  return (
    <div>
      {console.log(props.type,props.data)}
      <Card style={{ backgroundColor: "#006d75", color: "white", borderRadius: "25px" }}>
        <Row >
          <Col span={12}>
            <div>
              <p>14</p>
              <p>Approved</p>
            </div>
          </Col>
          <Divider type="vertical" style={{ 'background-color': 'white', height: "65px" }} />
          <Col span={6}>
            <div>
              <p>14</p>
              <p>Remaining</p>
            </div>
          </Col>
        </Row>


        <div class="row">
          <div class="col text-center">
            <Button type="primary" style={{ background: "#ad6800" }} onClick={onApply}>Apply</Button>
          </div>
        </div>

      </Card>
    </div>
  );
};

export default DividerVerticalV2;
