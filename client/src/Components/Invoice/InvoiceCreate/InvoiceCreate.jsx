import React, { useState } from "react";
import { Col, Input, Row, Table, Button, Card } from "antd";
import { DatePicker,notification} from "antd";
import "./style.css";
import { useEffect } from "react";
import { DeleteTwoTone  } from '@ant-design/icons';

const { TextArea } = Input;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const InvoiceCreate = ({onCreate}) => {

    const [ data, setData ] = useState([{
        "hash": "",
        "Item": "",
        "Description": "",
        "Unit Cost": 0,
        "Qty": 0,
        "Amount": 0,
        "no-title": "",
      }]);

    const [load,setLoad] = useState({
        item : "",
        desc : "",
        uc : 0,
        qty: 0,
        amount : 0,
        action: ""
    })


    const onAdd = () =>{

        

        const {item,desc,uc,qty,amount} = load;

        if(item==="" || desc==="" || uc==="" || qty==="" || amount===""){
            notification["error"]({
                message: 'All field should be filled!',
                placement : "bottomRight",
                style : {zIndex:1000000000},
            });
            return;
        }

        const Data = [...data];

        Data.push({
            "hash": Data.length,
            "Item": item,
            "Description": desc,
            "Unit Cost": uc,
            "Qty": qty,
            "Amount": amount,
            "no-title": Data.length,
          })
        setData(Data)

        const Load = {
            item : "",
            desc : "",
            uc : 0,
            qty: 0,
            amount : 0,
            action: ""
        };
        setLoad(Load)
            
    }
    const onDelete = (index) => {
        const Data = [...data]
        for( var i = 0; i < Data.length; i++){ 
            if ( Data[i].hash === index) { 
                Data.splice(i, 1); 
                break;
            }
        }
        setData(Data);
    }

    const setChange = (value,key)=>{
        const Load = {...load};
        Load[key]=value
        if(Load["uc"] > 0 && Load["qty"] > 0){
            Load["amount"] = (parseFloat(Load["qty"])*parseFloat(Load["uc"])).toString()
        }
        setLoad(Load)
    }

    const columns = [
        {
          width: 15,
          align: "center",
          title: "#",
          dataIndex: "hash",
          key: "hash",
          render: (text) => (
            text!=="" && <p>{text}</p> 
          ),
        },
        {
          width: 80,
          align: "center",
          title: "Item",
          dataIndex: "Item",
          key: "Item",
          render: (text) => (
            text!=="" ? <p>{text}</p> : <Input allowClear value={load.item} onChange={(e)=>{setChange(e.target.value,"item")}}/>
          ),
        },
        {
          width: 500,
          align: "center",
          title: "Description",
          dataIndex: "Description",
          key: "Description",
          render: (text) => (
            text!=="" ? <p>{text}</p> : <Input allowClear value={load.desc} onChange={(e)=>{setChange(e.target.value,"desc")}}/>
          ),
        },
        {
          width: 15,
          align: "center",
          title: "Unit Cost",
          dataIndex: "Unit Cost",
          key: "Unit Costs",
          render: (text) => (
            text > 0 ? <p>{text}</p> : <Input type={"number"} value={load.uc} onChange={(e)=>{setChange(e.target.value,"uc")}}/>
          ),
        },
        {
          width: 15,
          align: "center",
          title: "Qty",
          dataIndex: "Qty",
          key: "Qty",
          render: (text) => (
            text > 0 ? <p>{text}</p> : <Input type={"number"} value={load.qty} onChange={(e)=>{setChange(e.target.value,"qty")}}/>
          ),
        },
        {
          width: 50,
          align: "center",
          title: "Amount",
          dataIndex: "Amount",
          key: "Amount",
          render: (text) => (
            text > 0 ? <p>{text}</p> : <Input readOnly type={"number"} value={load.amount} onChange={(e)=>{setChange(e.target.value,"amount")}}/>
          ),
        },
        {
          width: 10,
          align: "center",
          title: "",
          dataIndex: "no-title",
          key: "no-title",
          render: (text,index) => (
            parseInt(text) > 0 ? <Button icon={<DeleteTwoTone />} onClick={()=>{onDelete(index.hash)}}/> : <Button  onClick={onAdd}>+</Button>
          ),
        },
      ];

      
      useEffect(()=>{
        const Load = {
            item : "",
            desc : "",
            uc : 0,
            qty: 0,
            amount : 0,
            action: ""
        };
        setLoad(Load)
        return ()=>{
            const LOAD = {
                item : "a",
                desc : "a",
                uc : 0,
                qty: 0,
                amount : 0,
                action: "a"
            };
            setLoad(LOAD)  
        }
      },[])


        


  

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <h6>
            Client
            <Input style={{ marginTop: "10px" }} placeholder="Client Name" />
          </h6>
        </Col>

        <Col span={8}>
          <h6>
            Project Name
            <Input style={{ marginTop: "10px" }} placeholder="Project Name" />
          </h6>
        </Col>

        <Col span={8}>
          <h6>
            Email
            <Input style={{ marginTop: "10px" }} placeholder="Email" />
          </h6>
        </Col>

       
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <h6>
            Client Address
            <TextArea rows={3} placeholder="Client Address" />
          </h6>
        </Col>

        <Col span={6}>
          <h6>
            Billing Address
            <TextArea rows={3} placeholder="Billing Address" />
          </h6>
        </Col>

        <Col span={6}>
          <h6>
            Invoice Date
            <DatePicker dropdownClassName="popup" onChange={onChange} />
          </h6>
        </Col>

        <Col span={6}>
          <h6>
            Due Date
            <DatePicker dropdownClassName="popup" onChange={onChange} />
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
        <Col span={18}>
        </Col>

        <Col span={6}>
          <p style={{fontWeight:"bold"}}>VAT+Tax
            <span>
            <Input readOnly style={{ marginTop: "10px", width:"70%", marginLeft:"10px" , textAlign:"right"}} value={"15%"}></Input>

            </span>
          </p>
        
          <p style={{fontWeight:"bold"}}>Discount
            <span>
            <Input style={{ marginTop: "10px", width:"70%", marginLeft:"10px" , textAlign:"right"}} ></Input>

            </span>
          </p>
          <p style={{fontWeight:"bold"}}>Amount
            <span>
            <Input readOnly style={{ marginTop: "10px", width:"70%", marginLeft:"10px" , textAlign:"right"}} ></Input>

            </span>
          </p>

        </Col>
      </Row>

     

    </Card>
    <Row style={{marginTop:"5px"}}>
      <Col span={12}>
      
      </Col>
      <Col span={8}>
      <Button style={{marginTop:"20px"}} type="primary" htmlType="submit">
                        Submit
                    </Button>
      </Col>
      <Col span={8}>
     
      </Col>
     
    </Row>

   

    </div>
  );
};

export default InvoiceCreate;
