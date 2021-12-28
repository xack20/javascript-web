import React , {useState,useEffect} from 'react';
import ProfileTableClientTop from './ProfileTableClientTop';
import Project from "../Project/Project";
import { Button } from 'antd';
import {EditOutlined} from '@ant-design/icons'

import {clientProfile}  from "../../Services/Client";

const ProfileClient = ({user_id}) => {
    const [clientProfileState,setClientProfileState] = useState({});

    useEffect(()=>{
        const callClientProfile = async ()=>{
          try {
              const response = await clientProfile(user_id);
              setClientProfileState(response.data.additionalPayload);
          } catch (error) {
                console.log(error.response);
          }
          
        }
        callClientProfile();
    },[user_id]);

    const onEdit = () => {
        setClientProfileState({...setClientProfileState,edit:!setClientProfileState.edit});
    }

    return (
        <div  style={{marginBottom:"30px"}}>
             <Button onClick={onEdit} primary style={{float:"right", margin:"10px"}}>
                <EditOutlined key="ellipsis" />
             </Button>
             <Button onClick={onEdit} primary style={{float:"right", margin:"10px"}}>
               Save
             </Button>

             <br/>
             <div style={{marginTop:"30px"}}>
             <ProfileTableClientTop clientProfileState={clientProfileState}></ProfileTableClientTop>
            <Project></Project>

             </div>
            
            
            
        </div>
    );
};

export default ProfileClient;
