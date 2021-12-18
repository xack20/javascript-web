import React, { Component } from "react";
import CardProgress from "../../Components/CardCustom/CardProgress/CardProgress";
import TicketSet from "../../Components/TicketSet/TicketSet";

class Tickets extends Component {
  render() {
    return (
        <div>
            <CardProgress></CardProgress>
            <TicketSet></TicketSet>

        </div>
        
        
      
    );
  }
}

export default Tickets;
