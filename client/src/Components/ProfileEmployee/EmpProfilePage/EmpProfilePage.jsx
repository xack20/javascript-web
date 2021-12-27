import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React,{useState,useEffect} from 'react';
import LowerPart from '../LowerPart/LowerPart';
import ProfileTableEmpTop from "../ProfileTable/ProfileTableEmpTop";
import {employeeProfile}  from "../../../Services/Employee";

const EmpProfilePage = ({user_id}) => {
    const [employeeProfileState,setEmployeeProfileState] = useState([]);

    useEffect(()=>{
        const callEmployeeProfile = async ()=>{
          try {
              const response = await employeeProfile(user_id);
              console.log(response);
              setEmployeeProfileState(response.data.additionalPayload);
          } catch (error) {
                console.log(error.response);
          }
          
        }
        callEmployeeProfile();
        return()=>{
            setEmployeeProfileState([]);
        }
    },[])
    return (
        <div style={{marginTop:"30px"}}>
             <Button primary style={{float:"right", margin:"10px"}}>
             <EditOutlined key="ellipsis" />
                 </Button>

            <ProfileTableEmpTop employeeProfileState={employeeProfileState}></ProfileTableEmpTop>
            <LowerPart employeeProfileState={employeeProfileState}></LowerPart>
        </div>
    );
};

export default EmpProfilePage;

