import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React,{useState,useEffect} from 'react';
import LowerPart from '../LowerPart/LowerPart';
import ProfileTableEmpTop from "../ProfileTable/ProfileTableEmpTop";
import {employeeProfile}  from "../../../Services/Employee";

const EmpProfilePage = ({user_id}) => {
    const [employeeProfileState,setEmployeeProfileState] = useState({});

    useEffect(()=>{
        const callEmployeeProfile = async ()=>{
          try {
              const response = await employeeProfile(user_id);
              response.data.additionalPayload.edit = false;
              setEmployeeProfileState(response.data.additionalPayload);
          } catch (error) {
                console.log(error.response);
          }
          
        }
        callEmployeeProfile();
    },[user_id]);

    const onEdit = () => {
        setEmployeeProfileState({...employeeProfileState,edit:!employeeProfileState.edit});
    }

    return (
        <div>
             <div  style={{marginBottom:"30px"}}>
             <Button onClick={onEdit} primary style={{float:"right", margin:"10px"}}>
                <EditOutlined key="ellipsis" />
             </Button>
             <Button onClick={onEdit} primary style={{float:"right", margin:"10px"}}>
               Save
             </Button>

             <br/>

             </div>
             <div style={{marginTop:"30px"}}>
             <ProfileTableEmpTop employeeProfileState={employeeProfileState}></ProfileTableEmpTop>
            <LowerPart employeeProfileState={employeeProfileState}></LowerPart>

             </div>
             

           
           
        </div>
    );
};

export default EmpProfilePage;

