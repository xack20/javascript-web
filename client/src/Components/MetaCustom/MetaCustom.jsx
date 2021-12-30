import React from 'react';
import { Card, Avatar, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import base64 from 'react-native-base64';

const { Meta } = Card;



function MetaCustom({ data }) {
  const history = useHistory();

  const viewProfile = (id) => {
    if(base64.decode(window.localStorage.getItem("_usrl_")) !== "ADMIN" && id != window.localStorage.getItem("_uid_")){
      notification["error"]({
        message: "You are not authorized to view this profile",
        description:'',
        placement:"bottomRight"
      });
    }
    else{
      if(window.location.pathname === "/clients"){
        history.push(`/client/profile/${data.client_id}`);
      }
      else {
        history.push(`/employee/profile/${id}`);
      }
    }
  }

  return (
    <Meta
      avatar={<Avatar src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png" size={100} />}
      title={data.firstname + " " + data.lastname}
      description={data.designation}
      style={{ height: '150px', paddingTop: '30px' }}
      onClick={()=>{viewProfile(data.user_id)}}
    />
  );
}

export default MetaCustom;
