import React from 'react';
import { Divider } from "antd";
import { Card } from "antd";
import { Row, Col } from "antd";




const DividerVertical = () => {
  return (
    <div style={{marginTop:"10px"}}>
      <Card style={{ backgroundColor: "#fff7e6", color: "black", borderRadius: "25px", borderColor:"#096dd9" }}>
        <Row style={{height:"140px"}}>
          
         
         <Col span={12} style={{textAlign:"center"}}>
            <p>14</p>
            <p>Assigned Token</p>
          </Col>
          <Divider type="vertical" style={{ 'background-color': 'black', height: "80px", marginRight:"30px" }} />
          <Col span={6} style={{textAlign:"center"}}>
            <p>14</p>
            <p>Pending Token</p>
          </Col>
                  
        </Row>

        <Row>
        <Col span={24} style={{textAlign:"center"}}>
            <p>14</p>
            <p>Total Token</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DividerVertical;
<Card style={{ backgroundColor: "#0050b3", color: "white", borderRadius: "25px" }}>
  <Row >
    <Col span={6}>
      <p>14</p>
      <p>Assigned Token</p>
    </Col>
    <Divider type="vertical" style={{ 'background-color': 'white', height: "80px" }} />
    <Col span={6}>
      <p>14</p>
      <p>Pending Token</p>
    </Col>
    <Divider type="vertical" style={{ 'background-color': 'white', height: "80px" }} />
    <Col span={6}>
      <p>14</p>
      <p>Total Token</p>
    </Col>
  </Row>
</Card>