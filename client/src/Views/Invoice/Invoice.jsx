import React from 'react';
import InvoiceSearch from '../../Components/Invoice/InvoiceSearch/InvoiceSearch';
import InvoiceTable from '../../Components/Invoice/InvoiceTable/InvoiceTable';

import InvoiceDetails from '../../Components/Invoice/InvoiceDetails/InvoiceDetails';


const Invoice = () => {
  
    return (
        <div>
            


            <InvoiceSearch></InvoiceSearch>

            <InvoiceTable></InvoiceTable>

            <InvoiceDetails></InvoiceDetails>

        </div>
    );
};

export default Invoice;