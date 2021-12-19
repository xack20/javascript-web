import { Col, Row } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardAvatar from "../../Components/CardCustom/CardAvatar/CardAvatar";
import DividerVertical from "../../Components/DividerVertical/DividerVertical";
import DividerVerticalV2 from "../../Components/DividerVertical/DividerVerticalV2";
import { dashboard } from "../../Services/EmployeeDashboard";


function EmployeeDashboard(props) {
  
  const [today,setToday] = useState([{},{}]);


  // useEffect(() => {
  //   const getToday = async () => {
  //     try {
  //       const { data } = await dashboard();
  //       setToday(data.today);
  //     } catch (error) {
  //       setToday(error.message);
  //     }
  //   };
  //   getToday();
  //   return () =>{
  //     setToday([{},{}]);
  //   }
  // }, []);

  

  return (
    <div>

      <Row gutter={[8, 8]}>

        <Col span={18}>
          <div>
            <p style={{ fontSize: "30px" }}>Today</p>
            {
              today.map((item, index) => {
                return (
                  <CardAvatar index={index} item={item}/>
                )
              })
            }
            
          </div>
          <div>
            <p style={{ fontSize: "30px" }}>Tomorrow</p>
            <CardAvatar />
          </div>
          <div>
            <p style={{ fontSize: "30px" }}>Next 7 Days</p>
            <CardAvatar />
          </div>


        </Col>

        <Col span={6}>
          <div>
            <p style={{ fontSize: "20px" }}>Projects</p>
            <DividerVertical></DividerVertical>
          </div>

          <div>
            <p style={{ fontSize: "20px" }}>Your Leave</p>
            <DividerVerticalV2></DividerVerticalV2>
          </div>

          <div>
            <p style={{ fontSize: "20px" }}>Time-off Allowance</p>
            <DividerVerticalV2></DividerVerticalV2>
          </div>

          <div>
            <p style={{ fontSize: "20px" }}>Upcoming Holiday</p>
            <DividerVerticalV2></DividerVerticalV2>
          </div>

        </Col>

      </Row>



    </div>
  );
}

export default EmployeeDashboard;