import { SearchOutlined } from '@ant-design/icons';
import { Button, Cascader, DatePicker, Input, Space } from 'antd';
import moment from 'moment';
import React from 'react';
import TicketTable from '../TicketTable/TicketTable';





///////////////////////////////////////////////Search/////////////
const { Search } = Input;
const onSearch = value => console.log(value);

//////////////////////////Cascader///////////////////////////////
const optionsStatus = [
    {
        value: 'Pending',
        label: 'Pending',

    },
    {
        value: 'Approved',
        label: 'Approved',

    },
    {
        value: 'Returned',
        label: 'Returned',

    }

];

const optionsPrio = [
    {
        value: 'High',
        label: 'High',

    },
    {
        value: 'Medium',
        label: 'Medium',

    },
    {
        value: 'Low',
        label: 'Low',

    }

];

function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
}
//////////////////////////////////////////////////////

///////////////Date Picker///////////////////////////////////
const { RangePicker } = DatePicker;

function onChangeDate(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}


const TicketSet = () => {
    return (
        <div className='m-3'>

        <Search className='m-3' placeholder="Employee Name" onSearch={onSearch} style={{ width: 200 }} />
        <Cascader className='m-3'
            options={optionsStatus}
            onChange={onChange}
            placeholder="Status" />

        <Cascader className='m-3'
            options={optionsPrio}
            onChange={onChange}
            placeholder="Priority" />



        <Space direction="vertical" size={12}>
            <RangePicker
                ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                }}
                onChange={onChangeDate}
            />
        </Space>


        <Button className='m-3' type="primary" icon={<SearchOutlined />}>
            Search
        </Button>

        <TicketTable></TicketTable>
            



    </div>
    );
};

export default TicketSet;
