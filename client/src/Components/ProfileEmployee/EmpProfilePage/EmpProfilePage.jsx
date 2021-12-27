import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import LowerPart from '../LowerPart/LowerPart';
import ProfileTableEmpTop from "../ProfileTable/ProfileTableEmpTop";

const EmpProfilePage = ({user_id}) => {
    return (
        <div style={{marginTop:"30px"}}>
             <Button primary style={{float:"right", margin:"10px"}}>
             <EditOutlined key="ellipsis" />
                 </Button>

            <ProfileTableEmpTop></ProfileTableEmpTop>
            <LowerPart></LowerPart>
        </div>
    );
};

export default EmpProfilePage;

