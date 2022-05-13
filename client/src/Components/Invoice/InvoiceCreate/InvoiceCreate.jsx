import React, { useState } from "react";
import { Col, Input, Row, Table, Button, Card, InputNumber } from "antd";
import { DatePicker, notification } from "antd";
import "./style.css";
import { useEffect } from "react";
import { DeleteTwoTone } from "@ant-design/icons";
import { createInvoice } from "../../../Services/Invoice";
import { useHistory } from "react-router-dom";

const { TextArea } = Input;

const InvoiceCreate = ({ onCreate, setModalVisibility }) => {
  const [newInvoiceData, setNewInvoiceData] = useState({});
  const history = useHistory()
  const [tempTotal,setTempTotal] = useState(0.0);
  const [data, setData] = useState([
    {
      hash: "",
      name: "",
      description: "",
      unit_cost: 0,
      quantity: 0,
      Amount: 0,
      "no-title": "",
    },
  ]);

  const [load, setLoad] = useState({
    item: "",
    desc: "",
    uc: 0,
    qty: 0,
    amount: 0,
    action: "",
  });

  const onAdd = () => {
    const { item, desc, uc, qty, amount } = load;

    if (
      item === "" ||
      desc === "" ||
      uc === "" ||
      qty === "" ||
      amount === ""
    ) {
      notification["error"]({
        message: "All field should be filled!",
        placement: "bottomRight",
        style: { zIndex: 1000000000 },
      });
      return;
    }

    const Data = [...data];

    Data.push({
      hash: Data.length,
      name: item,
      description: desc,
      unit_cost: uc.toString(),
      quantity: qty.toString(),
      Amount: amount,
      "no-title": Data.length,
    });
    setData(Data);

    // const newLoad = {...newInvoiceData}
    var NtempTotal = parseFloat(tempTotal)
    NtempTotal = NtempTotal + parseFloat(Data[Data.length-1].Amount)
    setTempTotal(NtempTotal)
    setNewInvoiceData({...newInvoiceData,amount:NtempTotal})

    const Load = {
      item: "",
      desc: "",
      uc: 0,
      qty: 0,
      amount: 0,
      action: "",
    };
    setLoad(Load);
    
  };
  const onDelete = (index) => {
    const Data = [...data];
    for (var i = 0; i < Data.length; i++) {
      if (Data[i].hash === index) {
        Data.splice(i, 1);
        break;
      }
    }
    setData(Data);
  };

  const setChange = (value, key) => {
    const Load = { ...load };
    Load[key] = value;
    if (Load["uc"] > 0 && Load["qty"] > 0) {
      Load["amount"] = (
        parseFloat(Load["qty"]) * parseFloat(Load["uc"])
      ).toString();
      
      

    }
    setLoad(Load);
  };

  const columns = [
    {
      width: 15,
      align: "center",
      title: "#",
      dataIndex: "hash",
      key: "hash",
      render: (text) => text !== "" && <p>{text}</p>,
    },
    {
      width: 80,
      align: "center",
      title: "Item",
      dataIndex: "name",
      key: "Item",
      render: (text) =>
        text !== "" ? (
          <p>{text}</p>
        ) : (
          <Input
            allowClear
            value={load.item}
            onChange={(e) => {
              setChange(e.target.value, "item");
            }}
          />
        ),
    },
    {
      width: 500,
      align: "center",
      title: "Description",
      dataIndex: "description",
      key: "Description",
      render: (text) =>
        text !== "" ? (
          <p>{text}</p>
        ) : (
          <Input
            allowClear
            value={load.desc}
            onChange={(e) => {
              setChange(e.target.value, "desc");
            }}
          />
        ),
    },
    {
      width: 15,
      align: "center",
      title: "Unit Cost",
      dataIndex: "unit_cost",
      key: "Unit Costs",
      render: (text) =>
      !Number.isInteger(text) > 0 ? (
          <p>{text}</p>
        ) : (
          <Input
            type={"number"}
            value={load.uc}
            onChange={(e) => {
              setChange(e.target.value, "uc");
            }}
          />
        ),
    },
    {
      width: 15,
      align: "center",
      title: "Qty",
      dataIndex: "quantity",
      key: "Qty",
      render: (text) =>
      !Number.isInteger(text) ? (
          <p>{text}</p>
        ) : (
          <Input
            type={"number"}
            value={load.qty}
            onChange={(e) => {
              setChange(e.target.value, "qty");
            }}
          />
        ),
    },
    {
      width: 50,
      align: "center",
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render: (text) =>
        text > 0 ? (
          <p>{text}</p>
        ) : (
          <Input
            readOnly
            type={"number"}
            value={load.amount}
            onChange={(e) => {
              setChange(e.target.value, "amount");
            }}
          />
        ),
    },
    {
      width: 10,
      align: "center",
      title: "",
      dataIndex: "no-title",
      key: "no-title",
      render: (text, index) =>
        parseInt(text) > 0 ? (
          <Button
            icon={<DeleteTwoTone />}
            onClick={() => {
              onDelete(index.hash);
            }}
          />
        ) : (
          <Button onClick={onAdd}>+</Button>
        ),
    },
  ];

  useEffect(() => {
    const Load = {
      item: "",
      desc: "",
      uc: 0,
      qty: 0,
      amount: 0,
      action: "",
    };
    setLoad(Load);
    return () => {
      const LOAD = {
        item: "a",
        desc: "a",
        uc: 0,
        qty: 0,
        amount: 0,
        action: "a",
      };
      setLoad(LOAD);
    };
  }, []);

  const onSubmit = () => {
      const niData = {...newInvoiceData}
      niData.items = data.slice(1);
      niData.amount = (niData.amount*0.15+niData.amount).toString()
      // console.log(niData);
      if(niData.items.length > 0){
        onCreate(niData);
      }
      else{
        notification["error"]({
          message: "Please add atleast one item!",
          placement: "bottomRight",
          style: { zIndex: 1000000000 },
        });
      }
      setNewInvoiceData({})
      setData([
        {
          hash: "",
          name: "",
          description: "",
          unit_cost: 0,
          quantity: 0,
          Amount: 0,
          "no-title": "",
        },
      ])
      setTempTotal(0,0)
      setLoad({
        item: "",
        desc: "",
        uc: 0,
        qty: 0,
        amount: 0,
        action: "",
      })
      setModalVisibility(false);
      window.location.reload()
      history.push('/invoices')
      
  }

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <h6>
            Client
            <Input onChange={(e)=>{ 
              const unLoad = {...newInvoiceData};
              unLoad.client_name = e.target.value;
              setNewInvoiceData(unLoad) }
            } 
              style={{ marginTop: "10px" }} placeholder="Client Name" defaultValue={""}/>
          </h6>
        </Col>

        <Col span={8}>
          <h6>
            Project Name
            <Input
            defaultValue={""}
            onChange={(e)=>{ 
              const unLoad = {...newInvoiceData};
              unLoad.project_name = e.target.value;
              setNewInvoiceData(unLoad) }
            } 
            
            style={{ marginTop: "10px" }} placeholder="Project Name" />
          </h6>
        </Col>

        <Col span={8}>
          <h6>
            Email
            <Input defaultValue={""}
            onChange={(e)=>{ 
              const unLoad = {...newInvoiceData};
              unLoad.client_email = e.target.value;
              setNewInvoiceData(unLoad) }
            }  
            style={{ marginTop: "10px" }} placeholder="Email" />
          </h6>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <h6>
            Client Address
            <TextArea  defaultValue={""}
            onChange={(e)=>{ 
              const unLoad = {...newInvoiceData};
              unLoad.client_address = e.target.value;
              setNewInvoiceData(unLoad) }
            } 
            rows={3} placeholder="Client Address" />
          </h6>
        </Col>

        <Col span={6}>
          <h6>
            Billing Address
            <TextArea  defaultValue={""}
            onChange={(e)=>{ 
              const unLoad = {...newInvoiceData};
              unLoad.billing_address = e.target.value;
              setNewInvoiceData(unLoad) }
            }  
             rows={3} placeholder="Billing Address" />
          </h6>
        </Col>

        <Col span={6}>
          <h6>
            Invoice Date
            <DatePicker  dropdownClassName="popup" onChange={(e)=>{ 
              const unLoad = {...newInvoiceData};
              // console.log(e.format("YYYY-MM-DD"));
              unLoad.invoice_date = e.format("YYYY-MM-DD");
              setNewInvoiceData(unLoad) 
            }
            }  />
          </h6>
        </Col>

        <Col span={6}>
          <h6>
            Due Date
            <DatePicker dropdownClassName="popup" onChange={(e)=>{ 
              const unLoad = {...newInvoiceData};
              // console.log(e);
              unLoad.due_date = e.format("YYYY-MM-DD");
              setNewInvoiceData(unLoad) 
            }
            }  />
          </h6>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={data}
        // pagination={{
        //   position: ["bottomCenter"],
        //   showSizeChanger: true,
        //   defaultPageSize: 10,
        //   pageSizeOptions: ["10", "15", "20"],
        // }}
        pagination={false}
        bordered={false}
        scroll={{ x: true }}
        size="middle"
      />

      <Card>
        <Row>
          <Col span={18}></Col>

          <Col span={6}>
            <p style={{ fontWeight: "bold" }}>
              VAT+Tax
              <span>
                <Input
                  readOnly
                  style={{
                    marginTop: "10px",
                    width: "70%",
                    marginLeft: "10px",
                    textAlign: "right",
                  }}
                  value={"15%"}
                ></Input>
              </span>
            </p>

            <p style={{ fontWeight: "bold" }}>
              Discount (%)
              <span>
                <InputNumber
                  style={{
                    marginTop: "10px",
                    width: "70%",
                    marginLeft: "10px",
                    textAlign : "right"
                  }}
                  
                  onChange={(e)=>{
                    
                      const newLoad = {...newInvoiceData}
                      newLoad.amount = tempTotal-(tempTotal*(e/100.0))
                      setNewInvoiceData(newLoad);
                    
                  }}
                ></InputNumber>
              </span>
            </p>
            <p style={{ fontWeight: "bold" }}>
              Amount
              <span>
                <Input
                  // type={"number"}
                  readOnly
                  value={newInvoiceData.amount*0.15+newInvoiceData.amount}
                  style={{
                    marginTop: "10px",
                    width: "70%",
                    marginLeft: "10px",
                    textAlign: "right",
                  }}
                ></Input>
              </span>
            </p>
          </Col>
        </Row>
      </Card>
      <Row style={{ marginTop: "5px" }}>
        <Col span={12}></Col>
        <Col span={8}>
          <Button
            style={{ marginTop: "20px" }}
            type="primary"
            htmlType="submit"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default InvoiceCreate;
