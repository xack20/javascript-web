import { EditOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import React, { useEffect, useState } from "react";
import { clientProfile, updateClient } from "../../Services/Client";
import Project from "../Project/Project";
import ProfileTableClientTop from "./ProfileTableClientTop";


const ProfileClient = ({ client_id }) => {
    const [clientProfileState, setClientProfileState] = useState({});
    const [edit, setEdit] = useState(false)

    const [load,setLoad] = useState({})

    useEffect(() => {
        const callClientProfile = async () => {
            try {
                const response = await clientProfile(client_id);
                setClientProfileState(response.data.additionalPayload);
            } catch (error) {
                console.log(error.response);
            }
        };
        callClientProfile();
    }, [client_id,edit]);

    const onEdit = () => {
        setEdit(!edit);
    };


    const onSave = () => {

        const Load = {...load}
        

        try {
            const response = updateClient(Load, client_id);
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
                {!edit ? (
                    <Button
                        onClick={onEdit}
                        primary
                        style={{ float: "right", margin: "10px" }}
                    >
                        <EditOutlined key="ellipsis" />
                    </Button>
                ) : (
                    <Button
                        onClick={onSave}
                        primary
                        style={{ float: "right", margin: "10px" }}
                    >
                        Save
                    </Button>
                )}

                <br />
            </div>

            <div style={{ marginTop: "30px" }}>
                <ProfileTableClientTop
                    clientProfileState={clientProfileState}
                    load={load}
                    setLoad={setLoad}
                    edit={edit}
                ></ProfileTableClientTop>
                <Project></Project>
            </div>
        </div>
    );
};

export default ProfileClient;
