
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TicketTable from '../TicketTable/TicketTable';






const TicketSet = () => {
    return (
        <div className='m-3'>

            <SearchBar></SearchBar>

            <TicketTable></TicketTable>
        </div>
    );
};

export default TicketSet;
