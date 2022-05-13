import { UserOutlined,ProjectOutlined,BankOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';

const MenuBar = () => {

    const [current, setCurrent] = useState()

    const handleClick = e => {
        console.log('click ', e.key);
        setCurrent(e.key)
    };

    return (
        <div style={{marginTop:"5px"}}>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="profile" icon={<UserOutlined />}>
                    Profile
                </Menu.Item>
                <Menu.Item key="project" icon={<ProjectOutlined />}>
                    Projects
                </Menu.Item>
                <Menu.Item key="bank" icon={<BankOutlined />}>
                    Bank and Statutory
                </Menu.Item>
            </Menu>

        </div>
    );
};

export default MenuBar;