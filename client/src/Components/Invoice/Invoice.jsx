import React from 'react';
import InvoiceSearch from './InvoiceSearch/InvoiceSearch';
import InvoiceTable from './InvoiceTable/InvoiceTable';

//import InvoiceDetails from './InvoiceDetails.jsx/InvoiceDetails';


const Invoice = () => {
   // const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <div>
            


            <InvoiceSearch></InvoiceSearch>

            <InvoiceTable></InvoiceTable>

            {/* <InvoiceDetails></InvoiceDetails> */}

        </div>
    );
};

export default Invoice;