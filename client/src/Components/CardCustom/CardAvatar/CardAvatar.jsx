import React from "react";
import { Card } from "antd";
import { Avatar } from "antd";

const CardAvatar = ({index,item}) => {
  return (
    <div>

      <div>
        <Card style={{  background:( index&1 ? "#00474f" : "#22075e"), borderRadius: "20px" }}>
          <p style={{color:"white"}}> <Avatar src="https://joeschmoe.io/api/v1/random" /> Hello</p>
        </Card>
      </div>

    </div>
  );
};

export default CardAvatar;