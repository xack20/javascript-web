
import React, { useState } from "react";
import AddButton from "../../Components/AddButton/AddButton";
import CardProgress from "../../Components/CardCustom/CardProgress/CardProgress";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import MyModal from '../../Components/MyModal/MyModal.jsx';
import EmpEditForm from "../../Components/ProfileEmployee/EmpEditForm/EmpEditForm";
import TicketForm from "../../Components/TicketForm/TicketForm";
import TicketSet from "../../Components/TicketSet/TicketSet";

const Tickets = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <div>
      <AddButton setModalVisibility={setModalVisibility} buttonName={"Add Ticket"}></AddButton>
      <MyModal Width={900} Title={"Add Ticket"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
        <TicketForm></TicketForm>
      </MyModal>
      <CardProgress></CardProgress>
      <TicketSet></TicketSet>


      {/* <EmpEditForm></EmpEditForm> */}

      
        

    </div>
  );
};

export default Tickets;
