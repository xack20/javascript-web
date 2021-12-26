
import React, { useState } from "react";
import AddButton from "../../Components/AddButton/AddButton";
import CardProgress from "../../Components/CardCustom/CardProgress/CardProgress";
import MyModal from '../../Components/MyModal/MyModal.jsx';
import ProfileTableEmpTop from "../../Components/ProfileEmployee/ProfileTable/ProfileTableEmpTop";
import TicketForm from "../../Components/TicketForm/TicketForm";
import TicketSet from "../../Components/TicketSet/TicketSet";
import LeavePage from '../../Components/Leave/LeavePage/LeavePageAdmin';
import ProfileTableCilentTop from "../../Components/ProfileClient/ProfileTableClientTop";
import ProfileClient from "../../Components/ProfileClient/ProfileClient";

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


      {/* <ProfileTableEmpTop></ProfileTableEmpTop> */}
      <ProfileClient></ProfileClient>    

    </div>
  );
};

export default Tickets;
