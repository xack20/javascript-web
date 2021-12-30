import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Cascader, Input } from 'antd';

const onSearch = value => console.log(value);

const SearchBarEmployee = () => {
    return (
        <div>
            <Input className='m-3' placeholder="Employee ID" onSearch={onSearch} style={{ width: "33%" }} />
            <Input className='m-3' placeholder="Employee Name" onSearch={onSearch} style={{ width: "33%" }} />

           

            <Button ghost style={{ width: "20%", borderColor:"#135200", borderRadius: "5px" }} className='m-3' type="primary" icon={<SearchOutlined />}>
                Search
            </Button>

        </div>
    );
};

export default SearchBarEmployee;