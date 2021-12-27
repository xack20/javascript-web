
import React, { useState } from "react";
import AddButton from "../../Components/AddButton/AddButton";
import CardProgress from "../../Components/CardCustom/CardProgress/CardProgress";
import AppliedCandidates from "../../Components/Jobs/AppliedCandidates/AppliedCandidates";
import ApplyJobDetail from "../../Components/Jobs/ApplyJobs/ApplyJobDetail";
import ApplyJobForm from "../../Components/Jobs/ApplyJobs/ApplyJobForm";
import ManageJobsForm from "../../Components/Jobs/ManageJobs/ManageJobsForm";
import ManageJobsTable from "../../Components/Jobs/ManageJobs/ManageJobsTable";
import MyModal from '../../Components/MyModal/MyModal.jsx';
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


      <ManageJobsForm></ManageJobsForm>

      <ManageJobsTable></ManageJobsTable>

      
        

    </div>
  );
};

export default Tickets;
