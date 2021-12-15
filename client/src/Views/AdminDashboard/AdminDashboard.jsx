import React from "react";
import {useEffect,useState} from 'react';
import { demo } from '../../Services/AdminDashboard';

export default function AdminDashboard() {
  const [data, setdata] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const {data} = await demo();
        console.log(data.message);
        setdata(data.message);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return <div>{data}</div>;
}
