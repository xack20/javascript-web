import React from "react";

import { Space, Table, Button,Spin } from "antd";
import {Link} from "react-router-dom";
import "./style.css";

const InvoiceTable = ({ data, onDelete }) => {
  const [Data, setData] = React.useState([]);
  const [spinning, setSpinning] = React.useState(true);
  const OnDelete = (index,render,text) => {
    onDelete(render.INV_ID,index);
  };
  const columns = [
    {
      title: "#",
      width: 100,
      dataIndex: "key",
      key: "key",
      fixed: "left",
    },
    {
      title: "Invoice Number",
      width: 100,
      dataIndex: "invoice_id",
      key: "Task ID",
      fixed: "left",
      render : (text,record) => {
        return <Link to={`/invoice/${record.INV_ID}`}>{text}</Link>
      }
    },
    { title: "Client", dataIndex: "client", key: "1" },
    { title: "Created Date", dataIndex: "invoice_date", key: "2" },
    { title: "Due Date", dataIndex: "due_date", key: "3" },
    { title: "Amount", dataIndex: "amount", key: "4" },
    { title: "Status", dataIndex: "status", key: "5" },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (text,render,index) => (
        <Space size="middle">
          <Button ghost type="primary" danger style={{ borderRadius: "10px" }} onClick={()=>{OnDelete(text,render,index)}} >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  React.useEffect(() => {
    if(data !== undefined){
      const load = []
      data.map((item, index) => {
        load.push({
          key: index+1,
          INV_ID : item.invoice_id,
          invoice_id : `INV-000${item.invoice_id}`,
          client : item.client_name,
          invoice_date : item.invoice_date,
          due_date : item.due_date,
          amount : item.amount,
          status : item.status,
        })
      })

      setData(load);
      setSpinning(false);
    }
  }, [data]);

  return (
    <Spin size="large" spinning={spinning} tip={"fetching data..."}>
      <div style={{ marginTop: "10px" }}>
        <Table bordered columns={columns} dataSource={Data} />
      </div>
    </Spin>
  );
};

export default InvoiceTable;
