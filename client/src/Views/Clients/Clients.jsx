import { DeleteOutlined } from '@ant-design/icons';
import { Card, Col, Row , notification} from 'antd';
import React, { useEffect, useState } from 'react';
import base64 from "react-native-base64";
import AddButton from '../../Components/AddButton/AddButton.jsx';
import ClientForm from '../../Components/ClientForm/ClientForm.jsx';
import MetaCustom from '../../Components/MetaCustom/MetaCustom.jsx';
import MyModal from '../../Components/MyModal/MyModal.jsx';
import SearchBarClient from '../../Components/SearchBarClient/SearchBarClient.jsx';
import { deleteClient, allClient } from "../../Services/Client";
import './Clients.css';



const Clients = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [allClients, setAllClient] = useState([]);

  useEffect(() => {
    const callAllClient = async () => {
      try {
        const response = await allClient();
        setAllClient(response.data.additionalPayload);
      } catch (error) {}
    };
    callAllClient();
  }, []);

  useEffect(() => {
    const callAllClient = async () => {
      try {
        const response = await allClient();
        setAllClient(response.data.additionalPayload);
      } catch (error) {}
    };
    callAllClient();
  }, [modalVisibility]);

  const onDelete = async (idx) => {
    try {
      await deleteClient(allClients[idx].client_id);
      const AC = [...allClients];
      AC.splice(idx, 1);
      setAllClient(AC);

      notification["success"]({
        message: "Client Deleted Successfully",
        description:'',
        placement:"bottomRight"
      });
    } catch (error) {
      notification["error"]({
        message: error.message,
        description:'',
        placement:"bottomRight"
      });
    }
  };


  return (
    <div>
      {
        base64.decode(window.localStorage.getItem("_usrl_")) === "ADMIN" &&
        <AddButton
        setModalVisibility={setModalVisibility}
        buttonName={"Add Client"}/>
      }

      <MyModal
        Width={900}
        Title={"Add Client"}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      >
        <ClientForm setModalVisibility={setModalVisibility}></ClientForm>
      </MyModal>

      <SearchBarClient></SearchBarClient>

    <Row
      gutter={[
        { xs: 8, sm: 16, md: 24 },
        { xs: 8, sm: 16, md: 24 },
      ]}
    >
      {allClients.map((element, idx) => {
        return (
          <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={6} key={idx}>
            <Card style={{borderColor:( idx&1 ? "#531dab" : "#7cb305") , borderRadius:" 10px"}}
             actions={[
              // <EditOutlined
              //   key="ellipsis"
              //   onClick={() => {
              //     console.log("Edit");
              //   }}
              // />,
              (base64.decode(window.localStorage.getItem("_usrl_")) === "ADMIN" &&
              <DeleteOutlined
                key="delete"
                onClick={() => {
                  console.log("Delete");
                  onDelete(idx);
                }}
              />),
            ]}
            hoverable={true}
            loading={false}
          >
              <MetaCustom data={element} />
            </Card>
          </Col>
        );
      })}
    </Row>


    

    
  </div>
  );
};

export default Clients;
