import React,{useState} from 'react';
import InvoiceSearch from './InvoiceSearch/InvoiceSearch';
//import InvoiceTable from './InvoiceTable/InvoiceTable';

import AddButton from '../../Components/AddButton/AddButton.jsx';
import MyModal from '../../Components/MyModal/MyModal.jsx';
import InvoiceCreate from './InvoiceCreate/InvoiceCreate';
import InvoiceDetails from './InvoiceDetails.jsx/InvoiceDetails';


const Invoice = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <div>
            <AddButton setModalVisibility={setModalVisibility} buttonName={"Create Invoice"}></AddButton>
            <MyModal Width={1200} Title={"Create Invoice"} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} >
                <InvoiceCreate></InvoiceCreate>
            </MyModal>


            <InvoiceSearch></InvoiceSearch>

            {/* <InvoiceTable></InvoiceTable> */}

            <InvoiceDetails></InvoiceDetails>

        </div>
    );
};

export default Invoice;