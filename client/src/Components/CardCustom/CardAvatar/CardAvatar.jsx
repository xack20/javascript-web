import React from "react";
import { Card } from "antd";
import { Avatar } from "antd";

const CardAvatar = ({index,item}) => {
  return (
    <div>

      <div>
        <Card style={{  background:( index&1 ? "#e6fffb" : "#e6f7ff"), borderColor:( index&1 ? "#531dab" : "#7cb305"), marginTop:"5px", borderRadius: "20px" }}>
          <p style={{color:"black"}}> <Avatar  size={40} src="https://joeschmoe.io/api/v1/random" /> Hello</p>
        </Card>
      </div>

    </div>
  );
};

export default CardAvatar;