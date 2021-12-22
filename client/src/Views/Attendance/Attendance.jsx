import React, { useState } from 'react';
import {
  Table,
  Card,
  Avatar,
  Tooltip,
  Button,
  DatePicker,
  Row,
  Col,
  Input,
  Timeline,
} from 'antd';

// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment';
import person from '../../Data/persons';
import MyModal from '../../Components/MyModal/MyModal';
import {
  StopTwoTone,
  CheckCircleTwoTone,
  SearchOutlined,
  CalendarTwoTone,
  ClockCircleOutlined,
} from '@ant-design/icons';


const ModalContent = ({cell,DATE}) => {
  return (
    <Row
        gutter={[
          { xs: 8, sm: 16, md: 24 },
          { xs: 8, sm: 16, md: 24 },
        ]}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          {' '}
          <Card
            style={{
              borderRadius: '10px',
            }}
            className="shadow-sm bg-body rounded"
          >
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24 },
                { xs: 8, sm: 16, md: 24 },
              ]}
              style={{ justifyContent: 'center' }}
            >
              <Col>
                <h4 style={{ paddingBottom: '20px' }}>TimeSheet</h4>
              </Col>
              <Col>
                <h5 style={{ color: 'grey', paddingTop: '3px' }}>
                  {moment(moment(DATE).set('date', cell.J)).format('L')}
                </h5>
              </Col>
            </Row>
            <Card
              style={{
                marginBottom: '15px',
                borderRadius: '10px',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>
                Checked in at
                <br />
              </span>
              {moment(DATE).format('MMMM Do YYYY, h:mm:ss a')}
            </Card>
            <Card
              style={{
                borderRadius: '75px',
                height: '150px',
                width: '150px',
                margin: 'auto',
              }}
              hoverable={true}
              className="mb-3"
            >
              <h4 style={{ textAlign: 'center', marginTop: '15px' }}>
                4.5 Hours
              </h4>
            </Card>
            <Card style={{ marginBottom: '15px', borderRadius: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>
                Checked Out at
                <br />
              </span>
              {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </Card>
            <Row
              gutter={[
                { xs: 8, sm: 16, md: 24 },
                { xs: 8, sm: 16, md: 24 },
              ]}
              style={{ justifyContent: 'center' }}
            >
              <Col span={'12'}>
                <Card
                  style={{
                    borderRadius: '10px',
                    // width: '170px',
                    textAlign: 'center',
                  }}
                >
                  Break
                  <br />
                  1.21 hours
                </Card>
              </Col>
              <Col span={'12'}>
                <Card
                  style={{
                    borderRadius: '10px',
                    // width: '170px',
                    textAlign: 'center',
                  }}
                >
                  OverTime
                  <br />3 hours
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card
            style={{ borderRadius: '10px', height: '100%' }}
            className="shadow-sm bg-body rounded"
          >
            <h4 style={{ textAlign: 'center', paddingBottom: '20px' }}>
              Activity
            </h4>
            <Timeline mode={'left'} pending={<h6>{'Recording...'}</h6>}>
              <Timeline.Item
                label="2015-09-01"
                style={{ fontSize: '15px' }}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: '17px', color: '' }}
                  />
                }
              >
                Checked In
              </Timeline.Item>
              <Timeline.Item
                label="2015-09-01"
                style={{ fontSize: '15px' }}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: '17px', color: '' }}
                  />
                }
              >
                Checked Out <br />
                09:12:11
              </Timeline.Item>
              <Timeline.Item
                style={{ fontSize: '15px' }}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: '17px', color: '' }}
                  />
                }
              >
                Checked In
              </Timeline.Item>
              <Timeline.Item
                label="2015-09-01"
                style={{ fontSize: '15px' }}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: '17px', color: '' }}
                  />
                }
              >
                Checked Out <br />
                09:12:11
              </Timeline.Item>
              <Timeline.Item
                style={{ fontSize: '15px' }}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: '17px', color: '' }}
                  />
                }
              >
                Checked In
              </Timeline.Item>
              <Timeline.Item
                label="2015-09-01"
                style={{ fontSize: '15px' }}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: '17px', color: '' }}
                  />
                }
              >
                Checked Out <br />
                09:12:11
              </Timeline.Item>
              <Timeline.Item
                label="2015-09-01"
                style={{ fontSize: '15px' }}
                dot={
                  <ClockCircleOutlined
                    style={{ fontSize: '17px', color: '' }}
                  />
                }
              >
                Checked Out <br />
                09:12:11
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
      </Row>
  )
}

export default function Attendance() {

  const [modalVis, setModalVisibility] = useState(false);
  const [cell, setCell] = useState({});
  const [DATE, dateChange] = useState(moment());




  function getDay(j) {
    return moment(
      DATE.format('YYYY') +
        DATE.format('L').split('/')[0] +
        j.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      'YYYYMMDD'
    ).format('dddd');
  }

  // Column Creation

  let columns = [
    {
      width: 80,
      align: 'center',
      title: 'Employee',
      dataIndex: 'pic_url',
      key: 'pic_url',
      fixed: 'left',
      render: (text) => (
        <Tooltip
          title={text.split('<>')[1]}
          color={'#85a5ff'}
          key={'#85a5ff'}
          placement={'right'}
        >
          {/* <a href="#"> */}
          <Avatar src={text.split('<>')[0]} size={50} />
          {/* </a> */}
        </Tooltip>
      ),
    },
  ];


  for (let i = 1; i <= DATE.daysInMonth(); i++) {

    columns.push({
      title: i.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }),
      dataIndex: i,
      align: 'center',
      key: 'i',
      width: 50,
    });

    if (
      i === moment(DATE).date() &&
      DATE.format('L') === moment().format('L')
    ) {
      // columns[i].fixed = 'right'
      columns[i].className = 'shadow-lg mr-3 bg-white rounded';
      columns[i].title = (
        <p style={{ fontWeight: 'bold', fontSize: '17px', paddingTop: '15px' }}>
          {i}
        </p>
      );
    }
  }



  // Data Initialization

  let data = [],
    idx = 0;

  for (let i = 0; i < person.length; i++) {
    data.push({
      pic_url: person[i].pic_url + '<>' + person[i].name,
    });
    // const days = (DATE.format('L') === moment().format('L')) ? Math.min(DATE.daysInMonth(), parseInt(DATE.format('l').split('/')[1])) : DATE.daysInMonth();
    for (let j = 1; j <= DATE.daysInMonth(); j++) {
      if (getDay(j) === 'Friday') {
        data[i][j] = (
          <Tooltip
            title="Friday"
            color={'#d9d9d9'}
            key={'#d9d9d9'}
            placement={'topLeft'}
          >
            <StopTwoTone twoToneColor="#d9d9d9" style={{ fontSize: '20px' }} />
          </Tooltip>
        );
        data[i].key = idx++;
      } else {
        data[i][j] = (
          <Tooltip
            title="In Time"
            color={'#95de64'}
            key={idx}
            placement={'topLeft'}
          >
            <Button
              type="link"
              size={'small'}
              style={{ margin: '0px', padding: '0px' }}
              onClick={() => {
                setCell({ I: i, J: j });
                setModalVisibility(true);
                // toast('hi brp');
              }}
            >
              <CheckCircleTwoTone
                twoToneColor="#52c41a"
                style={{ fontSize: '20px' }}
              />
            </Button>
          </Tooltip>
        );
        data[i].key = idx++;
      }
    }
  }



  return (
    <>
      <Row>
        <Col xs={24} sm={12} md={12} style={{ marginBottom: '10px' }}>
          <Input
            bordered={false}
            size="large"
            placeholder="Employee Name"
            prefix={<SearchOutlined />}
            width={50}
          />
        </Col>
        <Col xs={24} sm={12} md={12} style={{ marginBottom: '10px' }}>
          <DatePicker
            allowClear={false}
            defaultValue={moment()}
            format={'MMMM, YYYY'}
            picker="month"
            size={'large'}
            inputReadOnly={true}
            // disabledDate={disabledDate}
            onChange={(date) => {
              dateChange(moment(date));
            }}
            suffixIcon={
              <CalendarTwoTone
                twoToneColor="#bfbfbf"
                style={{ fontSize: '25px' }}
              />
            }
          />
        </Col>
      </Row>



      <Table
        columns={columns}
        dataSource={data}
          pagination={{
            position: ['bottomCenter'],
            showSizeChanger: true,
            defaultPageSize: 10,
            pageSizeOptions: ['10', '15', '20'],
          }}
        bordered
        scroll={{ x: true }}
        size="middle"
      />



      <MyModal Width={900} Title={"Attendance Info"} modalVisibility={modalVis} setModalVisibility={setModalVisibility}>
        <ModalContent cell={cell} DATE={DATE}/>
      </MyModal>


    </>
  );
}
