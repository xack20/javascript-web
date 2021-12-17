
import React from "react";
import { useEffect, useState } from "react";
import { demo } from "../../Services/AdminDashboard";
import Composed from "../../Components/Charts/Composed";
import  PiChart  from "../../Components/Charts/PiChart/PiChart";


export default function AdminDashboard() {
  const [RES, setdata] = useState({
    data: "No Data",
    status: null,
  });

  
  useEffect( () => {
    let dbcall = async() => {
      try {
        const { data, status } = await demo();
        setdata({ data: data, status: status });
      } catch (error) {
        setdata({ data: error.message, status: error.status });
      }
    };
    dbcall();

    return () =>{
      setdata({ data: "No Data", status: null });
    }
  }, []);


  return (
    <div>
      {RES.data.message}
      <div class="d-flex justify-content-evenly">
      <Composed></Composed>
      <PiChart></PiChart>
      </div>
            
    </div>
    );
}
