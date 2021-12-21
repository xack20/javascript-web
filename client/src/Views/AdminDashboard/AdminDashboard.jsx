
import React, { useEffect, useState } from "react";
import CardLogo from "../../Components/CardCustom/CardLogo/CardLogo";
import { default as BiBarChart } from "../../Components/Charts/BiBarChart/BiBarChart";
import BiLineChart from "../../Components/Charts/BiLineChart/BiLineChart";
import { dashboard } from "../../Services/AdminDashboard";
import { Card, Col, Row } from 'antd';




export default function AdminDashboard() {
  
  const [RES, setdata] = useState({
    data: "No Data",
    status: null,
  });



  
  useEffect( () => {

    const getDashboard = async () => {
      try {
        const { data, status } = await dashboard();
        setdata({ data: data, status: status });
      } catch (error) {
        setdata({ data: error.message, status: error.status });
      }
    };
    getDashboard();


    return () =>{
      setdata({ data: "No Data", status: null });
    }
  }, []);


  return (
    <div>
      {RES.data.message}
      <CardLogo></CardLogo>

      <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={12}>
        <Card style={{ borderRadius: "20px",borderColor: "#7cb305"}}>
          <BiBarChart></BiBarChart>
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{borderRadius: "20px",borderColor: "#531dab"}}>
          <BiLineChart></BiLineChart>
        </Card>
      </Col>
    </Row>
  </div>
      

    </div>
    );
}
