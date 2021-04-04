import React, { useState } from 'react';
import { Table, Card, DatePicker, Row, Col, Timeline } from 'antd';
import moment from 'moment';

import { CalendarTwoTone, ClockCircleOutlined } from '@ant-design/icons';

export default function AttendanceEmp() {
  const [DATE, dateChange] = useState(moment().startOf('month'));
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Checked In',
      dataIndex: 'checkedin',
      key: 'checkedin',
    },
    {
      title: 'Checked Out',
      dataIndex: 'checkedout',
      key: 'checkedout',
    },
    {
      title: 'Production',
      dataIndex: 'production',
      key: 'production',
    },
    {
      title: 'Break',
      dataIndex: 'break',
      key: 'break',
    },
    {
      title: 'Overtime',
      dataIndex: 'overtime',
      key: 'overtime',
    },
  ];

  let data = [];

  for (
    let m = moment(DATE).startOf('month');
    m.isBefore(moment(DATE).endOf('month'));
    m.add(1, 'days')
  ) {
    data.push({
      date: m.format('DD MMM YYYY'),
      checkedin: '9:00 AM',
      checkedout: '6:00 PM',
      production: '8 Hours',
      break: '1 Hour',
      overtime: '0 hour',
    });
  }

  return (
    <>
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
                  {DATE.format('L')}
                </h5>
              </Col>
            </Row>
            <Card
              style={{
                marginBottom: '15px',
                borderRadius: '10px',
              }}
              className="shadow-sm bg-body rounded"
            >
              <span style={{ fontWeight: 'bold' }}>
                Checked in at
                <br />
              </span>
              {DATE.format('MMMM Do YYYY, h:mm:ss a')}
            </Card>
            <Card
              style={{
                borderRadius: '75px',
                height: '150px',
                width: '150px',
                margin: 'auto',
              }}
              hoverable={true}
              className="mb-3 shadow-sm bg-body"
            >
              <h4 style={{ textAlign: 'center', marginTop: '15px' }}>
                4.5 Hours
              </h4>
            </Card>
            <Card
              style={{ marginBottom: '15px', borderRadius: '10px' }}
              className="shadow-sm bg-body rounded"
            >
              <span
                style={{ fontWeight: 'bold' }}
                className="shadow-sm bg-body rounded"
              >
                Checked Out at
                <br />
              </span>
              {DATE.add(1, 'days').format('MMMM Do YYYY, h:mm:ss a')}
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
                    fontSize: '15px',
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
                    fontSize: '15px',
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
      <Row
        className="mt-5 mb-3"
        style={{ justifyContent: 'center', textAlign: 'center' }}
      >
        <Col xs={24} sm={24} md={24}>
          <DatePicker
            allowClear={false}
            defaultValue={moment()}
            format={'MMMM, YYYY'}
            picker="month"
            size={'large'}
            inputReadOnly={true}
            // disabledDate={disabledDate}
            onChange={(DATE) => {
              dateChange(DATE);
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
    </>
  );
}
