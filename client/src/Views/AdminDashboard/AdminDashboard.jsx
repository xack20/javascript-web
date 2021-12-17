import React from "react";
import { useEffect, useState } from "react";
import { demo } from "../../Services/AdminDashboard";


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
    </div>
    );
}
