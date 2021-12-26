import React,{useState} from 'react';
import AddButton from '../../AddButton/AddButton';
import MyModal from '../../MyModal/MyModal';
import LeaveForm from "../LeaveForm/LeaveForm";
import LeavePageCardEmp from '../LeavePageCard/LeavePageCardEmp';
import LeavePageTableEmp from '../LeavePageTableEmp/LeavePageTableEmp';

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