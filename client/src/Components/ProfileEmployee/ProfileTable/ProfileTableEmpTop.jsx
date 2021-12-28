import { Avatar, Col, Divider, Menu, Row, Table,Input } from 'antd'
import React, { useState, useEffect } from 'react'

const { Column } = Table

const ProfileTableEmpTop = ({ employeeProfileState,load,setLoad,edit }) => {
    

    const [data, setData] = useState([
        {
            key: 'fullname',
            value: 'John Doe',
        },
        {
            key: 'department',
            value: 'UI/UX Design Team',
        },
        {
            key: 'designation',
            value: 'Web Designer',
        },
        {
            key: 'employee_id',
            value: 'ID : FT-0001',
        },
    ])

    const [data2, setData2] = useState([
        {
            key: 'phoneNumber',
            param: 'Phone:',
            value: '9876543210',
        },
        {
            key: 'email',
            param: 'Email:',
            value: 'johndoe@example.com',
        },
        {
            key: 'birthday',
            param: 'Birthday:',
            value: '24th July',
        },
        {
            key: 'address',
            param: 'Address:',
            value: '1861 Bayonne Ave, Manchester Township, NJ, 08759',
        },
        {
            key: 'gender',
            param: 'Gender:',
            value: 'Male',
        },
        {
            key: 'report_to',
            param: 'Reports-To:',
            value: 'Jeffery Lalor',
        },
    ])

    useEffect(() => {
        const DATA = [...data]
        const DATA2 = [...data2]

        try {
            DATA[0].value =
                employeeProfileState.employee.firstname +
                ' ' +
                employeeProfileState.employee.lastname
            DATA[1].value = employeeProfileState['employee'].department
            DATA[2].value = employeeProfileState['employee'].designation
            DATA[3].value = employeeProfileState['employee'].employee_id

            DATA2[0].value = employeeProfileState.employee.phoneNumber
            DATA2[1].value = employeeProfileState.employee.email
            DATA2[2].value = employeeProfileState.employee.birthday
            DATA2[3].value = employeeProfileState.employee.address
            DATA2[4].value = employeeProfileState.employee.gender
            DATA2[5].value = employeeProfileState.employee.report_to


            

            setData(DATA)
            setData2(DATA2)
        } catch (error) { }
    }, [employeeProfileState])

    useEffect(() => {
        const Load = {"employee" : {
                
        }}
        try {
            Load.employee.fullname = employeeProfileState.employee.firstname + ' ' + employeeProfileState.employee.lastname
            Load.employee.department = employeeProfileState['employee'].department
            Load.employee.designation = employeeProfileState['employee'].designation
            Load.employee.employee_id = employeeProfileState['employee'].employee_id
            Load.employee.phoneNumber = employeeProfileState['employee'].phoneNumber
            Load.employee.email = employeeProfileState['employee'].email
            Load.employee.birthday = employeeProfileState['employee'].birthday
            Load.employee.address = employeeProfileState['employee'].address
            Load.employee.gender = employeeProfileState['employee'].gender
            Load.employee.report_to = employeeProfileState['employee'].report_to


            setLoad(Load)
        } catch (error) {
            
        }

        

    },[edit])



    const setChange = (value,key) => {
        const Load = {...load}
        if(key==='fullname'){
            Load.employee.firstname = value.split(" ")[0]
            Load.employee.lastname = value.split(" ")[1]
        }
        else Load.employee[[key]] = value
        setLoad(Load)
    }

    return (
        <div style={{ marginTop: '40px' }}>
            <Row gutter={16}>
                <Col span={12}>
                    <Avatar
                        src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png"
                        size={100}
                    />
                    <Table showHeader={false} pagination={false} dataSource={data}>
                        <Column
                            dataIndex="value" 
                            render={(text, index) => {
                                return (edit) ?  <Input  placeholder={index.key} allowClear  onChange={(e)=>{setChange(e.target.value,index.key)}}/> : text
                            }}
                        />
                    </Table>
                </Col>
                <Col span={12}>
                    <Table showHeader={false} pagination={false} dataSource={data2}>
                        <Column dataIndex="param" />
                        <Column
                            dataIndex="value"
                            render={(text, index) => {
                                return (edit) ?  <Input  placeholder={index.key} allowClear  onChange={(e)=>{setChange(e.target.value,index.key)}}/> : text
                            }}
                        />
                    </Table>
                </Col>
            </Row>
            <Divider></Divider>
        </div>
    )
}

export default ProfileTableEmpTop
