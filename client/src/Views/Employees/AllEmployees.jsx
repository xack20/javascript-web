import { DeleteOutlined } from "@ant-design/icons";
import { Card, Col, notification, Row } from "antd";
import React, { useEffect, useState } from "react";
import AddButton from "../../Components/AddButton/AddButton";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import MetaCustom from "../../Components/MetaCustom/MetaCustom.jsx";
import MyModal from "../../Components/MyModal/MyModal.jsx";
import SearchBarClient from "../../Components/SearchBarClient/SearchBarClient";
import { allEmployees, deleteEmployee } from "../../Services/Employee";
import "./AllEmployees.css";


const AllEmployees = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [allEmployee, setAllEmployee] = useState([]);

  useEffect(() => {
    const callAllEmployee = async () => {
      try {
        const response = await allEmployees();
        setAllEmployee(response.data.additionalPayload);
      } catch (error) {}
    };
    callAllEmployee();
  }, []);

  useEffect(() => {
    const callAllEmployee = async () => {
      try {
        const response = await allEmployees();
        setAllEmployee(response.data.additionalPayload);
      } catch (error) {}
    };
    callAllEmployee();
  }, [modalVisibility]);

  const onDelete = async (idx) => {
    try {
      await deleteEmployee(allEmployee[idx].user_id);
      const AE = [...allEmployee];
      AE.splice(idx, 1);
      setAllEmployee(AE);

      notification["success"]({
        message: "Employee Deleted Successfully",
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
      <AddButton
        setModalVisibility={setModalVisibility}
        buttonName={"Add Employee"}
      ></AddButton>

      <MyModal
        Width={900}
        Title={"Add Employee"}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      >
        <EmployeeForm setModalVisibility={setModalVisibility}></EmployeeForm>
      </MyModal>

      <SearchBarClient></SearchBarClient>

      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24 },
          { xs: 8, sm: 16, md: 24 },
        ]}
      >
        {allEmployee.map((element, idx) => {
          return (
            <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={6} key={idx}>
              <Card
                style={{
                  borderColor: idx & 1 ? "#531dab" : "#7cb305",
                  borderRadius: " 10px",
                }}
                actions={[
                  // <EditOutlined
                  //   key="ellipsis"
                  //   onClick={() => {
                  //     console.log("Edit");
                  //   }}
                  // />,
                  <DeleteOutlined
                    key="delete"
                    onClick={() => {
                      console.log("Delete");
                      onDelete(idx);
                    }}
                  />,
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

export default AllEmployees;
