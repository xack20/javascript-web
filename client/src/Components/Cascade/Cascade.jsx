import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Cascader, DatePicker, Input, Space } from 'antd';

const stats = [
    {
        value: 'pending',
        label: 'Pending',

    },
    {
        value: 'approved',
        label: 'Approved',

    },
    {
        value: 'declined',
        label: 'Declined',

    }

];



function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
}

const Cascade = () => {
    return (
        <div>

            <Cascader className='m-2'
                options={stats}
                onChange={onChange}
                placeholder="Status"
                style={{ borderColor: "#135200" }}
            />

        </div>
    );
};

export default Cascade;