import { Avatar, Col, Divider, Menu, Row, Table,Input } from 'antd'
import React, { useState, useEffect } from 'react'

const { Column } = Table

const ProfileTableEmpTop = ({ employeeProfileState }) => {
    const [edit, setEdit] = useState(false)


    const [load,setLoad] = useState({
        "FullName" : "",
        "Department" : "",
        "Designation" : "",
        "EmployeeId" : "",
        "Phone" : "",
        "Email" : "",
        "Address" : "",
        "Birthday" : "",
        "Gender" : "",
        "Reports-To" : "",
    })

    const [data, setData] = useState([
        {
            key: 'FullName',
            value: 'John Doe',
        },
        {
            key: 'Department',
            value: 'UI/UX Design Team',
        },
        {
            key: 'Designation',
            value: 'Web Designer',
        },
        {
            key: 'EmployeeId',
            value: 'ID : FT-0001',
        },
    ])

    const [data2, setData2] = useState([
        {
            key: 'Phone',
            param: 'Phone:',
            value: '9876543210',
        },
        {
            key: 'Email',
            param: 'Email:',
            value: 'johndoe@example.com',
        },
        {
            key: 'Birthday',
            param: 'Birthday:',
            value: '24th July',
        },
        {
            key: 'Address',
            param: 'Address:',
            value: '1861 Bayonne Ave, Manchester Township, NJ, 08759',
        },
        {
            key: 'Gender',
            param: 'Gender:',
            value: 'Male',
        },
        {
            key: 'Reports-To',
            param: 'Reports-To:',
            value: 'Jeffery Lalor',
        },
    ])

    useEffect(() => {
        const DATA = [...data]

        try {
            DATA[0].value =
                employeeProfileState.employee.firstname +
                ' ' +
                employeeProfileState.employee.lastname
            DATA[1].value = employeeProfileState['employee'].department
            DATA[2].value = employeeProfileState['employee'].designation
            DATA[3].value = employeeProfileState['employee'].employee_id

            setEdit(employeeProfileState.edit)
            setData(DATA)
        } catch (error) { }
    }, [employeeProfileState])

    useEffect(() => {
        const DATA = [...data2]

        try {
            DATA[0].value = employeeProfileState.employee.phoneNumber
            DATA[1].value = employeeProfileState.employee.email
            DATA[2].value = employeeProfileState.employee.birthday
            DATA[3].value = employeeProfileState.employee.address
            DATA[4].value = employeeProfileState.employee.gender
            DATA[5].value = employeeProfileState.employee.report_to

            setData2(DATA)
        } catch (error) { }
    }, [employeeProfileState])


    const setChange = (value,key) => {
        setLoad({...load,[key]:value})
        console.log(load);
    }

    return (
        <div style={{ marginTop: '20px' }}>
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
                                return (edit) ?  <Input placeholder={index.key} allowClear value={load[index.key]} onChange={(e)=>{setChange(e.target.value,index.key)}}/> : text
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
                                return (edit) ?  <Input placeholder={index.key} allowClear value={load[index.key]} onChange={(e)=>{setChange(e.target.value,index.key)}}/> : text
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
