import { Avatar, Col, Divider, Menu, Row, Table } from "antd";
import React, { useState,useEffect } from "react";

const { Column } = Table;

const data2 = [
  {
    key: "1",
    param: "Phone:",
    value: "9876543210",
  },
  {
    key: "2",
    param: "Email:",
    value: "johndoe@example.com",
  },
  {
    key: "3",
    param: "Birthday:",
    value: "24th July",
  },
  {
    key: "4",
    param: "Address:",
    value: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
  },
  {
    key: "5",
    param: "Gender:",
    value: "Male",
  },
  {
    key: "6",
    param: "Reports to:",
    value: "Jeffery Lalor",
  },
];

const ProfileTableEmpTop = ({employeeProfileState}) => {

  // const propsData = employeeProfileState;

  const [data, setData] = useState([
    {
      key: "1",
      param: "John Doe",
    },
    {
      key: "2",
      param: "UI/UX Design Team",
    },
    {
      key: "3",
      param: "Web Designer",
    },
    {
      key: "4",
      param: "ID : FT-0001",
    },
  ]);

  

  const [current, setCurrent] = useState();
  

  useEffect(() => {
      const DATA=[...data];
      console.log(employeeProfileState);
      try {
        DATA[0].param=employeeProfileState.employee.firstname;
      } catch (error) {
        
      }
      // DATA[1].param=employeeProfileState["employee"].department;
      // DATA[2].param=employeeProfileState["employee"].designation;
      // DATA[3].param=employeeProfileState["employee"].employee_id;
      setData(DATA);

      
  }, [employeeProfileState]);

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Row gutter={16}>
        <Col span={12}>
          <Avatar
            src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png"
            size={100}
          />
          <Table showHeader={false} pagination={false} dataSource={data}>
            <Column dataIndex="param" />
          </Table>
        </Col>
        <Col span={12}>
          <Table showHeader={false} pagination={false} dataSource={data2}>
            <Column dataIndex="param" />
            <Column dataIndex="value" />
          </Table>
        </Col>
      </Row>
      <Divider></Divider>

      <Row gutter={16}>
        <Col span={4}>
          <Menu
            style={{ marginTop: "20px" }}
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="profile">Profile</Menu.Item>
          </Menu>
        </Col>

        <Col span={4}>
          <Menu
            style={{ marginTop: "20px" }}
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="profile">Project</Menu.Item>
          </Menu>
        </Col>

        <Col span={4}>
          <Menu
            style={{ marginTop: "20px" }}
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="profile">Bank $ Statutory</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileTableEmpTop;
