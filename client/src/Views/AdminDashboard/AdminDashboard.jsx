import React, { useEffect, useState } from "react";
import CardLogo from "../../Components/CardCustom/CardLogo/CardLogo";
import { default as BiBarChart } from "../../Components/Charts/BiBarChart/BiBarChart";
import BiLineChart from "../../Components/Charts/BiLineChart/BiLineChart";
import { dashboard } from "../../Services/AdminDashboard";
import { accessTokenRefresh } from "../../Services/Auth";
import { Card, Col, Row } from "antd";

export default function AdminDashboard() {
  const [RES, setData] = useState({
    data: "No Data",
    status: null,
  });

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const { data, status } = await dashboard();
        setData({ data: data, status: status });
        
        console.log("All data fetched successfully");
      
      } catch (error) {
        
        // access token refresh
        console.log("Error in fetching data");

        const statusCode = error.message.split(" ")[error.message.split(" ").length - 1];
        if (statusCode === "401") {
          try {
              const { data } = await accessTokenRefresh();
              const { accessToken, refreshToken } = data;
              localStorage.setItem("_tkn_", accessToken);
              localStorage.setItem("_rftkn_", refreshToken);

              console.log(accessToken, refreshToken);
              console.log("Access token refreshed successfully");

              try {
                  // try to get data again
                const { data, status } = await dashboard();
                setData({ data: data, status: status });
              } catch (error) {
                // window.location.href = "/";
                console.log("Error in fetching data, again!");
              }
              
          } catch (error) {
            // refresh token expired
            console.log("Refresh token expired");
            
            window.localStorage.clear();
            window.location.reload();
          }
        }
      }
    };
    getDashboard();

    return () => {
      setData({ data: "No Data", status: null });
    };
  }, []);

  return (
    <div>
      {RES.data.message}
      <CardLogo></CardLogo>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={12}>
            <Card style={{ borderRadius: "20px", borderColor: "#7cb305" }}>
              <BiBarChart></BiBarChart>
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ borderRadius: "20px", borderColor: "#531dab" }}>
              <BiLineChart></BiLineChart>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
