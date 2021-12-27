import React from 'react';
import ProfileClient from "../../Components/ProfileClient/ProfileClient"

const ClientProfile = () => {
    const [modalVisibility, setModalVisibility] = React.useState(true)
    const history = props.history;
    const user_id = props.match.params.id;
    const changeModalVisibility = () => {
        // back to previous route
        history.goBack();
        setModalVisibility(!modalVisibility)
    }
    return (
        <MyModal Title={`ID ${user_id}'s profile`} Width={1000} modalVisibility={modalVisibility} setModalVisibility={changeModalVisibility}>
        <ProfileClient user_id={user_id}/>
    </MyModal>
    );
};

export default ClientProfile;