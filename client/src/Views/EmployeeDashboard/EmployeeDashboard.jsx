import { Col, Row } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardAvatar from "../../Components/CardCustom/CardAvatar/CardAvatar";
import DividerVertical from "../../Components/DividerVertical/DividerVertical";
import DividerVerticalV2 from "../../Components/DividerVertical/DividerVerticalV2";
import { dashboard } from "../../Services/EmployeeDashboard";
import CardNew from "../../Components/CardCustom/CardAvatar/CardNew";


function EmployeeDashboard(props) {
  
  const [today,setToday] = useState([{},{}]);
  const [leave,setLeave] = useState([{},{}]);
  const [toa,setTOA] = useState([{},{}]);


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

        <Col span={17}>
          <div>
            <p style={{ fontSize: "30px" }}>Today
            {
              today.map((item, index) => {
                return (
                  <CardAvatar  index={index} item={item}/>
                )
              })
            }
            </p>
          </div>
          <div>
            <p style={{ fontSize: "30px" }}>Tomorrow
            <CardAvatar />
            </p>
            
          </div>
          <div>
            <p style={{ fontSize: "30px" }}>Next 7 Days
            <CardAvatar />
            </p>
           
          </div>


        </Col>

        <Col span={6}>
          <div>
            <p style={{ fontSize: "20px", textAlign:"center"}}>Projects
            <DividerVertical></DividerVertical>
            </p>
            
          </div>

          <div>
            <p style={{ fontSize: "20px" , textAlign:"center"}}>Your Leave
            <DividerVerticalV2 props={ {type : "leave", data  : leave} } />
            </p>
           
          </div>

          <div>
            <p style={{ fontSize: "20px" , textAlign:"center" }}>Time-off Allowance
            <DividerVerticalV2 props={{type : "toa", data  : toa}} />
            </p>
            
          </div>

          <div>
            <p style={{ fontSize: "20px" , textAlign:"center"  }}>Upcoming Holiday
            <CardNew/>
            </p>
            
          </div>

        </Col>

      </Row>



    </div>
  );
}


export default EmployeeDashboard;