import { Col, Row, Steps, Table, Input } from "antd";
import React, { useEffect, useState } from "react";

const { Step } = Steps;

const { Column } = Table;

const LowerPart = ({ employeeProfileState, load, setLoad, edit }) => {
  const [data, setData] = useState([
    {
      key: "passport_no",
      param: "Passport No:",
      value: "9876543210",
    },
    {
      key: "telephone",
      param: "Telphone No:",
      value: "9876543210",
    },
    {
      key: "nationality",
      param: "Nationality:",
      value: "Bangladeshi",
    },
    {
      key: "religion",
      param: "Religion:",
      value: "Islam",
    },
    {
      key: "maritial_status",
      param: "Marital status:",
      value: "Single",
    },
    {
      key: "spouse",
      param: "Employment of spouse:",
      value: "No",
    },
  ]);

  const [data2, setData2] = useState([
    {
      key: "name",
      param: "Name:",
      value: "John Doe",
    },
    {
      key: "relashionship",
      param: "Relationship:",
      value: "Father",
    },
    {
      key: "phone",
      param: "Phone:",
      value: "9876543210",
    },
  ]);

  const [data3, setData3] = useState([
    {
      key: "bank_name",
      param: "Bank Name:",
      value: "ICICI Bank",
    },
    {
      key: "account_no",
      param: "Bank account No:",
      value: "159843014641",
    },
    {
      key: "ifsc_code",
      param: "IFSC Code:",
      value: "ICI24504",
    },
  ]);

  const [data4, setData4] = useState([
    {
      key: "name",
      param: "Name:",
      value: "Leo",
    },
    {
      key: "relashionship",
      param: "Relationship:",
      value: "Brother",
    },
    {
      key: "birthday",
      param: "Date of Birth:",
      value: "Feb 16th, 2019",
    },
    {
      key: "phone",
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
    const DATA = [...data];

    const DATA2 = [...data2];

    const DATA3 = [...data3];

    const DATA4 = [...data4];

    const Education = { ...education };

    const Experience = { ...experience };

    try {
      DATA[0].value = employeeProfileState.employee.passport_no;
      DATA[1].value = employeeProfileState["employee"].telephone;
      DATA[2].value = employeeProfileState["employee"].nationality;
      DATA[3].value = employeeProfileState["employee"].religion;
      DATA[4].value = employeeProfileState["employee"].maritial_status;
      DATA[5].value = employeeProfileState["employee"].spouse;

      DATA2[0].value = employeeProfileState.emergencyContact.name;
      DATA2[1].value = employeeProfileState.emergencyContact.relashionship;
      DATA2[2].value = employeeProfileState.emergencyContact.phone;

      DATA3[0].value = employeeProfileState.bankInfo.bank_name;
      DATA3[1].value = employeeProfileState.bankInfo.account_no;
      DATA3[2].value = employeeProfileState.bankInfo.ifsc_code;

      DATA4[0].value = employeeProfileState.familyInfo.name;
      DATA4[1].value = employeeProfileState.familyInfo.relashionship;
      DATA4[2].value = employeeProfileState.familyInfo.birthday;
      DATA4[3].value = employeeProfileState.familyInfo.phone;

      Education.ssc = employeeProfileState.education.ssc;
      Education.hsc = employeeProfileState.education.hsc;
      Education.bsc = employeeProfileState.education.bsc;

      Experience.company_name = employeeProfileState.experience.company_name;
      Experience.designation = employeeProfileState.experience.designation;

      setData(DATA);
      setData2(DATA2);
      setData3(DATA3);
      setData4(DATA4);
      setEducation(Education);
      setExperience(Experience);
    } catch (error) {}
  }, [employeeProfileState]);

  const setChange = (value, key, sup) => {
    const Load = { ...load };

    Load[[sup]][[key]] = value;
    setLoad(Load);
  };

  useEffect(() => {
    const Load = {
      employee: {},
      emergencyContact: {},
      bankInfo: {},
      familyInfo: {},
      education: {},
      experience: {},
    };
    try {
      Load.employee.passport_no = employeeProfileState.employee.passport_no;
      Load.employee.telephone = employeeProfileState["employee"].telephone;
      Load.employee.nationality = employeeProfileState["employee"].nationality;
      Load.employee.religion = employeeProfileState["employee"].religion;
      Load.employee.maritial_status =
        employeeProfileState["employee"].maritial_status;
      Load.employee.spouse = employeeProfileState["employee"].spouse;

      Load.emergencyContact.name = employeeProfileState.emergencyContact.name;
      Load.emergencyContact.relashionship =
        employeeProfileState.emergencyContact.relashionship;
      Load.emergencyContact.phone = employeeProfileState.emergencyContact.phone;

      Load.bankInfo.bank_name = employeeProfileState.bankInfo.bank_name;
      Load.bankInfo.account_no = employeeProfileState.bankInfo.account_no;
      Load.bankInfo.ifsc_code = employeeProfileState.bankInfo.ifsc_code;

      Load.familyInfo.name = employeeProfileState.familyInfo.name;
      Load.familyInfo.relashionship =
        employeeProfileState.familyInfo.relashionship;
      Load.familyInfo.birthday = employeeProfileState.familyInfo.birthday;
      Load.familyInfo.phone = employeeProfileState.familyInfo.phone;

      Load.education.ssc = employeeProfileState.education.ssc;
      Load.education.hsc = employeeProfileState.education.hsc;
      Load.education.bsc = employeeProfileState.education.bsc;

      Load.experience.company_name =
        employeeProfileState.experience.company_name;
      Load.experience.designation = employeeProfileState.experience.designation;

      setLoad(Load);
    } catch (error) {}
  }, [employeeProfileState,edit]);

  return (
    <div style={{ marginTop: "50px", marginLeft: "20px" }}>
      <Row style={{ marginTop: "20px" }} gutter={16}>
        <Col span={12}>
          <h5>Personal Info</h5>
          <Table showHeader={false} pagination={false} dataSource={data}>
            <Column dataIndex="param" />
            <Column
              dataIndex="value"
              render={(text, index) => {
                return edit ? (
                  <Input
                    placeholder={index.key}
                    allowClear
                    onChange={(e) => {
                      setChange(e.target.value, index.key, "employee");
                    }}
                  />
                ) : (
                  text
                );
              }}
            />
          </Table>
        </Col>

        <Col span={12}>
          <h5>Emergency Contact</h5>
          <Table showHeader={false} pagination={false} dataSource={data2}>
            <Column dataIndex="param" />
            <Column
              dataIndex="value"
              render={(text, index) => {
                return edit ? (
                  <Input
                    placeholder={index.key}
                    allowClear
                    onChange={(e) => {
                      setChange(e.target.value, index.key, "emergencyContact");
                    }}
                  />
                ) : (
                  text
                );
              }}
            />
          </Table>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "50px" }}>
        <Col span={12}>
          <h5>Bank Information</h5>
          <Table showHeader={false} pagination={false} dataSource={data3}>
            <Column dataIndex="param" />
            <Column
              dataIndex="value"
              render={(text, index) => {
                return edit ? (
                  <Input
                    placeholder={index.key}
                    allowClear
                    onChange={(e) => {
                      setChange(e.target.value, index.key, "bankInfo");
                    }}
                  />
                ) : (
                  text
                );
              }}
            />
          </Table>
        </Col>

        <Col span={12}>
          <h5>Family Information</h5>
          <Table showHeader={false} pagination={false} dataSource={data4}>
            <Column dataIndex="param" />
            <Column
              dataIndex="value"
              render={(text, index) => {
                return edit ? (
                  <Input
                    placeholder={index.key}
                    allowClear
                    onChange={(e) => {
                      setChange(e.target.value, index.key, "familyInfo");
                    }}
                  />
                ) : (
                  text
                );
              }}
            />
          </Table>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "50px" }}>
        <Col span={12}>
          <h5>Education Informations</h5>

          {edit ? (
            <div style={{ marginBottom: "50px" }}>
              <Input
                allowClear
                onChange={(e) => {
                  setChange(e.target.value, "ssc", "education");
                }}
                style={{ marginBottom: "10px", width: "70%" }}
                placeholder="SSC"
              />
              <Input
                allowClear
                onChange={(e) => {
                  setChange(e.target.value, "hsc", "education");
                }}
                style={{ marginBottom: "10px", width: "70%", float: "left" }}
                placeholder="HSC"
              />
              <Input
                allowClear
                onChange={(e) => {
                  setChange(e.target.value, "bsc", "education");
                }}
                style={{ width: "70%" }}
                placeholder="BSC"
              />
            </div>
          ) : (
            <Steps progressDot current={3} direction="vertical">
              <Step title={education.ssc} description="SSc" />
              <Step title={education.hsc} description="HSc" />
              <Step title={education.bsc} description="BSc" />
            </Steps>
          )}
        </Col>

        <Col span={12}>
          <h5>Experience</h5>

          {edit ? (
            <div style={{ marginBottom: "50px" }}>
              <Input
                allowClear
                onChange={(e) => {
                  setChange(e.target.value,  "company_name","experience");
                }}
                style={{ marginBottom: "10px", width: "70%" }}
                placeholder="Company Name"
              />
              <Input
                allowClear
                onChange={(e) => {
                  setChange(e.target.value, "designation", "experience");
                }}
                style={{ width: "70%", float: "left" }}
                placeholder="Designation"
              />
            </div>
          ) : (
            <Steps progressDot current={3} direction="vertical">
              <Step
                title={experience.company_name}
                description={experience.designation}
              />
            </Steps>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LowerPart;
