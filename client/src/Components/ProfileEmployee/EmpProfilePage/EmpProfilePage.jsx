import { EditOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import React, { useState, useEffect } from "react";
import LowerPart from "../LowerPart/LowerPart";
import ProfileTableEmpTop from "../ProfileTable/ProfileTableEmpTop";
import { employeeProfile, updateEmployee } from "../../../Services/Employee";

const EmpProfilePage = ({ user_id }) => {
    const [employeeProfileState, setEmployeeProfileState] = useState({});
    const [edit, setEdit] = useState(false)

    const [load,setLoad] = useState({})

    useEffect(() => {
        const callEmployeeProfile = async () => {
            try {
                const response = await employeeProfile(user_id);
                setEmployeeProfileState(response.data.additionalPayload);
            } catch (error) {
                console.log(error.response);
            }
        };
        callEmployeeProfile();
    }, [user_id,edit]);

    const onEdit = () => {
        setEdit(!edit);
    };


    useEffect(() => {

    })


    const onSave = () => {

        // const Load = {...load}
        console.log(load);

        try {
            // console.log();
            const response = updateEmployee(load, user_id);
            notification["success"]({
                message: "Employee Updated Successfully",
                description:'',
                placement:"bottomRight"
            });
        } catch (error) {
            notification["error"]({
                message: error.message,
                description:'',
                placement:"bottomRight"
            });
        }
       setEdit(!edit);
    }

    return (
        <div>
            <div style={{ marginBottom: "30px" }}>

                {!edit  ? <Button
                    onClick={onEdit}
                    primary
                    style={{ float: "right", margin: "10px" }}
                >
                    <EditOutlined key="ellipsis" />
                </Button> : 
                
                <Button
                    onClick={onSave}
                    primary
                    style={{ float: "right", margin: "10px" }}
                >
                    Save
                </Button>
                }

                <br />
            </div>
            <div style={{ marginTop: "30px" }}>
                <ProfileTableEmpTop
                    employeeProfileState={employeeProfileState}
                    load={load}
                    setLoad={setLoad}
                    edit={edit}
                ></ProfileTableEmpTop>
                <LowerPart 
                    employeeProfileState={employeeProfileState}
                    load={load}
                    setLoad={setLoad}
                    edit={edit}
                ></LowerPart>
            </div>
        </div>
    );
};

export default EmpProfilePage;
