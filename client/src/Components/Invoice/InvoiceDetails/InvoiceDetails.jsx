import React, { useState } from "react";
import { Col, Divider, Row, Table,Spin } from "antd";
import MyModal from "../../MyModal/MyModal.jsx";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { invoiceDetails } from "../../../Services/Invoice.js";
import { clientProfile } from "../../../Services/Client.js";

const InvoiceDetails = (props) => {
  const [modalVisibility, setModalVisibility] = useState(true);
  const [data, setData] = useState({client : {company_name : "",address : "",}});
  // const [grandTotal, setGrandTotal] = useState(0);
  const invoice_id = props.match.params.id;
  const history = useHistory();
  const changeModalVisibility = () => {
    // back to previous route
    history.goBack();
    setModalVisibility(!modalVisibility);
  };

  useEffect(async () => {
    try {
      const invoice = await invoiceDetails(invoice_id);
      const client = await clientProfile(invoice.data.additionalPayload.client_id);
    
      invoice.data.additionalPayload.client = client.data.additionalPayload;
      console.log(invoice.data.additionalPayload);

      setData(invoice.data.additionalPayload);
    } catch (error) {}
  }, []);

  return (
    <MyModal
      Width={1500}
      modalVisibility={modalVisibility}
      setModalVisibility={changeModalVisibility}
      Title={`Invoice : #000${invoice_id}`}
    >
     <Spin spinning={data.client===""}>
     <div style={{ padding: 20 }}>
        {/* <Row>
                <Col>
                    <Divider>Invoice</Divider>
                </Col>
            </Row> 
        */}

        <Row gutter={16} style={{ marginTop: 32 }}>
          <Col span={8}>
            <h3>Eco Haya</h3>
            <div>#944/945, 4th Cross, 9th Main,</div>
            <div>Vijaya Bank Layout,</div>
            <div>Bannerghatta Road,</div>
            <div>Bangalore - 560076</div>
          </Col>
          <Col span={12}>
            <table style={{ float: "right" }}>
              <tbody>
                <tr>
                  <th>Invoice # :</th>
                  <td>000{data.client_id}</td>
                </tr>
                <tr>
                  <th>Invoice Date :</th>
                  <td>{data.invoice_date}</td>
                </tr>
                <tr>
                  <th>Due Date :</th>
                  <td>{data.due_date}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <div>
            Bill To: <strong>{data.client.company_name},&nbsp;</strong>
          </div>
          <div>{data.client.address}</div>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <Col span={24}>
            <Table
              dataSource={data.invoiceItems}
              pagination={false}
            >
              <Table.Column title="Items" dataIndex="name" />
              <Table.Column title="Description" dataIndex="description" />
              <Table.Column title="Quantity" dataIndex="quantity" />
              <Table.Column title="Price" dataIndex="unit_cost" />
              <Table.Column title="Line Total" render={(render) => {
                // setGrandTotal((grandTotal+render.quantity * render.unit_cost));
                return parseFloat(render.unit_cost) * parseFloat(render.quantity)
              }} />
            </Table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <Col span={23}>
            <table style={{ float: "right" }}>
              <tr>
                <th>Gross Total :</th>
                <td>Rs. {data.amount}</td>
              </tr>
              <tr>
                <th>IGST @6% :</th>
                <td>Rs. {(6.0/100)*parseFloat(data.amount)}</td>
              </tr>
              <tr>
                <th>CGST @5% :</th>
                <td>Rs. {(5.0/100)*parseFloat(data.amount)}</td>
              </tr>
              <tr>
                <th>Nett Total :</th>
                <td>Rs. {parseFloat(data.amount)+((6.0/100)*parseFloat(data.amount))+((5.0/100)*parseFloat(data.amount))}</td>
              </tr>
            </table>
          </Col>
        </Row>
      </div>   
    </Spin>
    </MyModal>
  );
};

export default InvoiceDetails;
