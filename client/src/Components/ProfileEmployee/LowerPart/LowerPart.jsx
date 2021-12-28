import { Col, Row, Steps, Table } from "antd";
import React, { useEffect, useState } from "react";


const { Step } = Steps;

const { Column } = Table;

const LowerPart = ({ employeeProfileState }) => {
  const [data, setData] = useState([
    {
      key: "1",
      param: "Passport No:",
      value: "9876543210",
    },
    {
      key: "2",
      param: "Telphone No:",
      value: "9876543210",
    },
    {
      key: "3",
      param: "Nationality:",
      value: "Bangladeshi",
    },
    {
      key: "4",
      param: "Religion:",
      value: "Islam",
    },
    {
      key: "5",
      param: "Marital status:",
      value: "Single",
    },
    {
      key: "6",
      param: "Employment of spouse:",
      value: "No",
    },
  ]);

  const [data2, setData2] = useState([
    {
      key: "1",
      param: "Name:",
      value: "John Doe",
    },
    {
      key: "2",
      param: "Relationship:",
      value: "Father",
    },
    {
      key: "3",
      param: "Phone:",
      value: "9876543210",
    },
  ]);

  const [data3, setData3] = useState([
    {
      key: "1",
      param: "Bank Name:",
      value: "ICICI Bank",
    },
    {
      key: "2",
      param: "Bank account No:",
      value: "159843014641",
    },
    {
      key: "3",
      param: "IFSC Code:",
      value: "ICI24504",
    },
  ]);

  const [data4, setData4] = useState([
    {
      key: "1",
      param: "Name:",
      value: "Leo",
    },
    {
      key: "2",
      param: "Relationship:",
      value: "Brother",
    },
    {
      key: "3",
      param: "Date of Birth:",
      value: "Feb 16th, 2019",
    },
    {
      key: "4",
      param: "Phone:",
      value: "9876543210",
    },
  ]);

  const [education, setEducation] = useState({
    ssc: "",
    hsc: "",
    bsc: "",
  });

  const [experience, setExperience] = useState({
    company_name: "",
    designation: "",
    from_date: "",
    to_date: "",
  });

  useEffect(() => {
    const Education = { ...education };
    try {
      Education.ssc = employeeProfileState.education.ssc;
      Education.hsc = employeeProfileState.education.hsc;
      Education.bsc = employeeProfileState.education.bsc;

      setEducation(Education);
    } catch (error) {}
  }, [employeeProfileState]);

  useEffect(() => {
    const Experience = { ...experience };
    try {
      Experience.company_name = employeeProfileState.experience.company_name;
      Experience.designation = employeeProfileState.experience.designation;
      Experience.from_date =
        employeeProfileState.experience.from_date +
        " " +
        employeeProfileState.experience.to_date;

      setExperience(Experience);
    } catch (error) {}
  }, [employeeProfileState]);

  useEffect(() => {
    const DATA = [...data];
   
    try {
      DATA[0].value = employeeProfileState.employee.passport_no;
      DATA[1].value = employeeProfileState["employee"].telephone;
      DATA[2].value = employeeProfileState["employee"].nationality;
      DATA[3].value = employeeProfileState["employee"].religion;
      DATA[4].value = employeeProfileState["employee"].maritial_status;
      DATA[5].value = employeeProfileState["employee"].spouse;
    } catch (error) {}

    setData(DATA);
  }, [employeeProfileState]);

  useEffect(() => {
    const DATA = [...data2];
    
    try {
      DATA[0].value = employeeProfileState.emergencyContact.name;
      DATA[1].value = employeeProfileState.emergencyContact.relashionship;
      DATA[2].value = employeeProfileState.emergencyContact.phone;
    } catch (error) {}

    setData2(DATA);
  }, [employeeProfileState]);

  useEffect(() => {
    const DATA = [...data3];
    
    try {
      DATA[0].value = employeeProfileState.bankInfo.bank_name;
      DATA[1].value = employeeProfileState.bankInfo.account_no;
      DATA[2].value = employeeProfileState.bankInfo.ifsc_code;
    } catch (error) {}

    setData3(DATA);
  }, [employeeProfileState]);

  useEffect(() => {
    const DATA = [...data4];
    
    try {
      DATA[0].value = employeeProfileState.familyInfo.name;
      DATA[1].value = employeeProfileState.familyInfo.relashionship;
      DATA[2].value = employeeProfileState.familyInfo.birthday;
      DATA[3].value = employeeProfileState.familyInfo.phone;
    } catch (error) {}

    setData4(DATA);
  }, [employeeProfileState]);


//   const [current, setCurrent] = useState();
//   const handleClick = (e) => {
        
//     setCurrent({ current: e.key });
// };

  return (
    <div style={{ marginTop: "50px" }}>
      {/* <Row gutter={16} style={{ marginTop: "50px" }}>
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
      </Row> */}

      <Row style={{ marginTop: "20px" }} gutter={16}>
        <Col span={12}>
          <h5>Personal Info</h5>
          <Table showHeader={false} pagination={false} dataSource={data}>
            <Column dataIndex="param" />
            <Column dataIndex="value" />
          </Table>
        </Col>

        <Col span={12}>
          <h5>Emergency Contact</h5>
          <Table showHeader={false} pagination={false} dataSource={data2}>
            <Column dataIndex="param" />
            <Column dataIndex="value" />
          </Table>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "50px" }}>
        <Col span={12}>
          <h5>Bank Information</h5>
          <Table showHeader={false} pagination={false} dataSource={data3}>
            <Column dataIndex="param" />
            <Column dataIndex="value" />
          </Table>
        </Col>

        <Col span={12}>
          <h5>Family Information</h5>
          <Table showHeader={false} pagination={false} dataSource={data4}>
            <Column dataIndex="param" />
            <Column dataIndex="value" />
          </Table>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "50px" }}>
        <Col span={12}>
          <h5>Education Informations</h5>

          <Steps progressDot current={3} direction="vertical">
            <Step title={education.bsc} description="BSC" />
            <Step title={education.hsc} description="HSC" />
            <Step title={education.ssc} description="SSC" />
          </Steps>
        </Col>

        <Col span={12}>
          <h5>Experience</h5>

          <Steps progressDot current={3} direction="vertical">
            <Step
              title={experience.company_name}
              description={experience.designation}
            />
          </Steps>
        </Col>
      </Row>
    </div>
  );
};

export default LowerPart;
