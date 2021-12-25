import React,{useState} from 'react';
import AddButton from '../../AddButton/AddButton';
import MyModal from '../../MyModal/MyModal';
import LeaveForm from "../LeaveForm/LeaveForm";
import LeavePageCard from '../LeavePageCard/LeavePageCard';

const LeavePage = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <div>

            <AddButton setModalVisibility={setModalVisibility} buttonName={"Add Leave"}></AddButton>
            <MyModal Width={900} Title={"Add Leave"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
                <LeaveForm></LeaveForm>
            </MyModal>

            <LeavePageCard></LeavePageCard>

        </div>
    );
};

export default LeavePage;