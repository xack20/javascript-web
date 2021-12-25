import React,{useState} from 'react';
import InvoiceSearch from './InvoiceSearch/InvoiceSearch';
import InvoiceTable from './InvoiceTable/InvoiceTable';

import AddButton from '../../Components/AddButton/AddButton.jsx';
import MyModal from '../../Components/MyModal/MyModal.jsx';
import InvoiceCreate from './InvoiceCreate/InvoiceCreate';
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