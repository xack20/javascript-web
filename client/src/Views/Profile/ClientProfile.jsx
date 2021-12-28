import React from 'react';

import MyModal from '../../Components/MyModal/MyModal.jsx';
import ProfileClient from "../../Components/ProfileClient/ProfileClient"

const ClientProfile = (props) => {
    const [modalVisibility, setModalVisibility] = React.useState(true)
    const history = props.history;
    const client_id = props.match.params.id;
    const changeModalVisibility = () => {
        // back to previous route
        history.goBack();
        setModalVisibility(!modalVisibility)
    }
    return (
        <MyModal Title={`Client_ID ${client_id}'s profile`} Width={1600} modalVisibility={modalVisibility} setModalVisibility={changeModalVisibility}>
        <ProfileClient client_id={client_id}/>
    </MyModal>
    );
};

export default ClientProfile;