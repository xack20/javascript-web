
import React, { useEffect, useState } from "react";
import Composed from "../../Components/Charts/Composed";
import PiChart from "../../Components/Charts/PiChart/PiChart";
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

      <div class="row">

        <div class="col-md-6 col-sm-6">
          <Composed></Composed>
        </div>
      
        <div class="col-md-6 col-sm-6">
          <PiChart></PiChart>
        </div>
            
      </div>

      



    </div>
    );
}
