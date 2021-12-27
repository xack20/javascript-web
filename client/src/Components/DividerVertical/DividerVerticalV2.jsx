import { Divider } from "antd";
import { Card } from "antd";
import { Row, Col, Button } from "antd";
import React from 'react';

const DividerVerticalV2 = ({props}) => {

  const onApply = () => {
    console.log("Apply");
  }

  return (
    <div style={{marginTop:"10px"}}>
      {console.log(props.type,props.data)}
      <Card style={{ backgroundColor: "#e6fffb", color: "black", borderRadius: "25px", borderColor:"#096dd9" }}>
        <Row style={{height:"150px"}} >
          <Col span={12}>
            <div style={{textAlign:"center"}}>
              <p>14</p>
              <p>Approved</p>
            </div>
          </Col>
          <Divider type="vertical" style={{ 'background-color': 'black', height: "70px" , marginRight:"50px"}} />
          <Col span={6}>
            <div style={{textAlign:"center"}}>
              <p>14</p>
              <p>Remaining</p>
            </div>
          </Col>
        </Row>


        <div class="row">
          <div class="col text-center">
            <Button ghost type="primary" style={{  borderRadius:"10px", height:"50px", width:"100px" }} onClick={onApply}>Apply</Button>
          </div>
        </div>

      </Card>
    </div>
  );
};

export default DividerVerticalV2;
