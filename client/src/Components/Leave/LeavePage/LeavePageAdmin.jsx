import React,{useState} from 'react';
import AddButton from '../../AddButton/AddButton';
import MyModal from '../../MyModal/MyModal';
import LeaveForm from "../LeaveForm/LeaveForm";
import LeavePageCardAdmin from '../LeavePageCard/LeavePageCardAdmin';
import LeavePageTableAdmin from '../LeavePageTableEmp/LeavePageTableAdmin';

const LeavePageAdmin = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <div>

            <AddButton setModalVisibility={setModalVisibility} buttonName={"Add Leave"}></AddButton>
            <MyModal Width={900} Title={"Add Leave"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
                <LeaveForm></LeaveForm>
            </MyModal>

            <LeavePageCardAdmin></LeavePageCardAdmin>
            <LeavePageTableAdmin></LeavePageTableAdmin>

        </div>
    );
};

export default LeavePageAdmin;