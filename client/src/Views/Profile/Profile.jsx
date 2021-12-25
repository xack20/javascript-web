import React from 'react';
import MyModal from '../../Components/MyModal/MyModal.jsx';

const Profile = (props) => {
    const [modalVisibility, setModalVisibility] = React.useState(true)
   // const history = props.history;
    const e_id = props.match.params.id;
    const changeModalVisibility = () => {
        // back to previous route
        // history.goBack();
        setModalVisibility(!modalVisibility)
    }

    return (
        
        <MyModal Title={`ID ${e_id}'s profile`} Width={1000} modalVisibility={modalVisibility} setModalVisibility={changeModalVisibility}>
        </MyModal>
    );
};

export default Profile;