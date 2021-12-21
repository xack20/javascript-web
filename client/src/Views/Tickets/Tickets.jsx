
import React from "react";
import AddButton from "../../Components/AddButton/AddButton";
import CardProgress from "../../Components/CardCustom/CardProgress/CardProgress";
import TicketSet from "../../Components/TicketSet/TicketSet";


const Tickets = () => {
  return (
    <div>
      <AddButton></AddButton>
      <CardProgress></CardProgress>
      <TicketSet></TicketSet>

    </div>
  );
};

export default Tickets;
