import React, { Component } from "react";
import { Card } from "antd";
import { Avatar } from "antd";

export default class CardAvatar extends Component {
  render() {
    return (
      <div>

        <div>

          <Card style={{  background: "#00474f", borderRadius: "20px" }}>
            <p style={{color:"white"}}> <Avatar src="https://joeschmoe.io/api/v1/random" /> Hello</p>
          </Card>
          <Card style={{  background: "#22075e", borderRadius: "20px" }}>
          <p style={{color:"white"}}> <Avatar src="https://joeschmoe.io/api/v1/random" /> Hello </p>
          </Card>

        </div>

      </div>
    );
  }
}
