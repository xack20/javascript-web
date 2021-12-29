import React,{useState} from 'react';
import AddButton from '../../Components/AddButton/AddButton';
import MyModal from '../../Components/MyModal/MyModal';
import LeaveForm from "../../Components/Leave/LeaveForm/LeaveForm";
import LeavePageCardAdmin from '../../Components/Leave/LeavePageCard/LeavePageCardAdmin';
import LeavePageTableAdmin from '../../Components/Leave/LeavePageTableEmp/LeavePageTableAdmin';

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