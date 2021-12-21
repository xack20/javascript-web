import { SearchOutlined } from '@ant-design/icons';
import { Button, Cascader, Input } from 'antd';
import React from 'react';



///////////////////////////////////////////////Search/////////////
const { Search } = Input;
const onSearch = value => console.log(value);

//////////////////////////Cascader///////////////////////////////


const optionsPrio = [
    {
        value: 'BJIT Ltd',
        label: 'BJIT Ltd',

    },
    {
        value: 'Rakuten',
        label: 'Rakuten',

    },
    {
        value: 'Sony',
        label: 'Sony',

    }

];

function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
}

const SearchBarClient = () => {
    return (
        <div>
            <Search className='m-3' placeholder="Client ID" onSearch={onSearch} style={{ width: "25%" }} />
            <Search className='m-3' placeholder="Client Name" onSearch={onSearch} style={{ width: "25%" }} />

            <Cascader className='m-3'
                options={optionsPrio}
                onChange={onChange}
                placeholder="Company Name" 
                style={{ width: "25%" }}
                />

            <Button style={{ width: "14%", background: "#52c41a" , borderRadius: "5px" }} className='m-3' type="primary" icon={<SearchOutlined />}>
                Search
            </Button>

        </div>
    );
};

export default SearchBarClient;