import React from 'react';
import ProfileTableClientTop from './ProfileTableClientTop';
import Project from "../Project/Project";
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

    return (
        <div style={{marginTop:"30px"}}>
             <Button primary style={{float:"right", margin:"10px"}}>
             <EditOutlined key="ellipsis" />
                 </Button>
            <ProfileTableClientTop clientProfileState={clientProfileState}></ProfileTableClientTop>
            <Project></Project>
            
            
        </div>
    );
};

export default ProfileClient;
