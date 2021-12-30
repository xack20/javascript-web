import React, { useState } from "react";
import { Col, Divider, Row, Table } from "antd";
import MyModal from "../../MyModal/MyModal.jsx";
import { useHistory } from "react-router-dom";

const InvoiceDetails = (props) => {
  const [modalVisibility, setModalVisibility] = useState(true);
  const invoice_id = props.match.params.id;
  const history = useHistory();
  const changeModalVisibility = () => {
    // back to previous route
    history.goBack();
    setModalVisibility(!modalVisibility);
  };
  return (
    <MyModal
      Width={1500}
      modalVisibility={modalVisibility}
      setModalVisibility={changeModalVisibility}
      Title={`Invoice : #000${invoice_id}`}
    >
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
            <table style={{float:"right"}}>
              <tbody>
                <tr>
                  <th>Invoice # :</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th>Invoice Date :</th>
                  <td>10-01-2018</td>
                </tr>
                <tr>
                  <th>Due Date :</th>
                  <td>10-01-2018</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <div>
            Bill To: <strong>Strides Shasun Ltd</strong>
          </div>
          <div>Bannerghatt Road,</div>
          <div>Bangalore - 560076</div>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <Col span={24}>
            <Table
              dataSource={[
                {
                  id: 1,
                  name: "Accommodation (Single Occupancy)",
                  description: "Accommodation",
                  price: 1599,
                  quantity: 1,
                },
              ]}
              pagination={false}
            >
              <Table.Column title="Items" dataIndex="name" />
              <Table.Column title="Description" dataIndex="description" />
              <Table.Column title="Quantity" dataIndex="quantity" />
              <Table.Column title="Price" dataIndex="price" />
              <Table.Column title="Line Total" />
            </Table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <Col span={23}>
            <table style={{float:"right"}}>
              <tr>
                <th>Gross Total :</th>
                <td>Rs. 1599</td>
              </tr>
              <tr>
                <th>IGST @6% :</th>
                <td>Rs. 95.94</td>
              </tr>
              <tr>
                <th>CGST @6% :</th>
                <td>Rs. 95.94</td>
              </tr>
              <tr>
                <th>Nett Total :</th>
                <td>Rs. 1790.88</td>
              </tr>
            </table>
          </Col>
        </Row>
      </div>
    </MyModal>
  );
};

export default InvoiceDetails;
