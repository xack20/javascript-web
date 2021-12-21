
import React, { useEffect, useState } from "react";
import CardLogo from "../../Components/CardCustom/CardLogo/CardLogo";
import { default as BiBarChart } from "../../Components/Charts/BiBarChart/BiBarChart";
import BiLineChart from "../../Components/Charts/BiLineChart/BiLineChart";
import { dashboard } from "../../Services/AdminDashboard";




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

      <div class="row">

        <div class="col-md-6 col-sm-6">
          <BiBarChart></BiBarChart>
        </div>
      
        <div class="col-md-6 col-sm-6">
          <BiLineChart></BiLineChart>
        </div>
            
      </div>

    </div>
    );
}
