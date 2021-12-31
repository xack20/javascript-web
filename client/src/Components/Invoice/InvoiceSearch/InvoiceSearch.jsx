import React, { useState } from "react";

import { DatePicker, Button, Col, Row, Cascader } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import InvoiceCreate from "../InvoiceCreate/InvoiceCreate";
import AddButton from "../../AddButton/AddButton";
import MyModal from "../../MyModal/MyModal";


const optionsPrio = [
  {
    value: "Paid",
    label: "Paid",
  },
  {
    value: "Pending",
    label: "Pending",
  },

  {
    value: "Pertially Paid",
    label: "Pertially Paid",
  },
];

const InvoiceSearch = ({onCreate}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <div>
      <AddButton
        setModalVisibility={setModalVisibility}
        buttonName={"Create Invoice"}
      ></AddButton>
      <MyModal
        Width={1600}
        Title={"Create Invoice"}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      >
        <InvoiceCreate onCreate={onCreate}></InvoiceCreate>
      </MyModal>

      <Row gutter={16} style={{ marginTop: "10px" }}>
        <Col span={6}>
          <DatePicker
            placeholder={"Select Date from"}
            style={{ width: "100%" }}
          />
        </Col>

        <Col span={6}>
          <DatePicker
            placeholder={"Select Date To"}
            style={{ width: "100%" }}
            // onChange={onChange}
          />
        </Col>

        <Col span={6}>
          <Cascader
            options={optionsPrio}
            // onChange={onChange}
            placeholder="Status"
            style={{ borderColor: "#135200", width: "100%" }}
          />
        </Col>

        <Col span={6}>
          <Button
            style={{ width: "100%" }}
            ghost
            type="primary"
            icon={<SearchOutlined />}
          >
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceSearch;
