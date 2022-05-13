import React from "react";
import { notification, Spin } from "antd";
import InvoiceSearch from "../../Components/Invoice/InvoiceSearch/InvoiceSearch";
import InvoiceTable from "../../Components/Invoice/InvoiceTable/InvoiceTable";
import { allInvoices, createInvoice, deleteInvoice } from "../../Services/Invoice";

const Invoice = () => {
  
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const callBackend = async () => {
      try {
        const res = await allInvoices();
        setData(res.data.additionalPayload);
      } catch (error) {
        notification.error({
          message: "Error",
          description:
            error.message || "Sorry! Something went wrong. Please try again!",
            placement : "bottomRight",
        });
      }
    };
    callBackend();
  }, []);



  // const onDelete = async(invoice_id,index) => {
  //   // console.log(invoice_id,index);
  //     try {
  //       const res = await deleteInvoice(invoice_id);
  //       notification.success({
  //         message: "Success",
  //         description: "Invoice Deleted Successfully!",
  //         placement : "bottomRight",
  //       });
  //       // const Data = [...data];
  //       // Data.splice(index, 1);
  //       // setData(Data);

  //     } catch (error) {
  //       notification.error({
  //         message: "Error",
  //         description:error.message || "Sorry! Something went wrong. Please try again!",
  //         placement : "bottomRight",
            
  //       });
  //     }
  // };

  const onCreate = async(newData) => {
    // console.log(newData);
    try {
      const res = await createInvoice(newData);

      const Data = [...data];
      Data.push(res.data.additionalPayload);
      setData(Data);

      notification.success({
        message: "Success",
        description: "Invoice Created Successfully",
        placement: "bottomRight",
      });
    }
    catch (error) {
      notification.error({
        message: "Error",
        description:
          error.message || "Sorry! Something went wrong. Please try again!",
          placement : "bottomRight",
      });
    }

    
  };

  return (
    <div>
      <InvoiceSearch onCreate={onCreate}/>

      <InvoiceTable data={data}  setData={setData}/>
    </div>
  );
};

export default Invoice;
