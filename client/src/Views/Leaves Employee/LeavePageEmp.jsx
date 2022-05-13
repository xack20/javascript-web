import React,{useState} from 'react';
import AddButton from '../../Components/AddButton/AddButton';
import MyModal from '../../Components/MyModal/MyModal';
import LeaveForm from "../../Components/Leave/LeaveForm/LeaveForm";
import LeavePageCardEmp from '../../Components/Leave/LeavePageCard/LeavePageCardEmp';
import LeavePageTableEmp from '../../Components/Leave/LeavePageTableEmp/LeavePageTableEmp';

const LeavePage = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <div>

            <AddButton setModalVisibility={setModalVisibility} buttonName={"Add Leave"}></AddButton>
            <MyModal Width={900} Title={"Add Leave"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
                <LeaveForm></LeaveForm>
            </MyModal>

            <LeavePageCardEmp></LeavePageCardEmp>
            <LeavePageTableEmp></LeavePageTableEmp>

        </div>
    );
};

export default LeavePage;