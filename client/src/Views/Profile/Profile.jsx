import React from 'react';
import MyModal from '../../Components/MyModal/MyModal.jsx';
import EmpProfilePage from '../../Components/ProfileEmployee/EmpProfilePage/EmpProfilePage.jsx';

const Profile = (props) => {
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
            <EmpProfilePage e_id={user_id}/>
        </MyModal>
    );
};

export default Profile;