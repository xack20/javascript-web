import React from "react";
import { Card } from "antd";


const CardNew = ({index,item}) => {
  return (
    <div>

      <div style={{marginTop:"20px"}}>
        <Card style={{  background:( index&1 ? "#e6fffb" : "#e6f7ff"), borderColor:( index&1 ? "#531dab" : "#7cb305"), marginTop:"5px", borderRadius: "20px", height:"9vh",width:"90%" }}>
          <p style={{color:"black"}}> Hello</p>
        </Card>
      </div>

    </div>
  );
};

export default CardNew;