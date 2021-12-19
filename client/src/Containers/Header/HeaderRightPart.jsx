import React from 'react';
import { Menu, Dropdown, Button, Avatar } from 'antd';
import SearchBar from '../../Components/Search/SearchBar.jsx';
import './HeaderRightPart.css';

const menu = (
  <Menu>
    <Menu.Item>
    <Button type="text">Profile</Button>
    </Menu.Item>
    <Menu.Item>
    <Button type="text">Settings</Button>
    </Menu.Item>
    <Menu.Item>
    <Button type="text">Logout</Button>
    </Menu.Item>
  </Menu>
);

const HeaderRightPart = () => {
  return (
    <div className="header-extention">
    <SearchBar />

    <Dropdown overlay={menu} placement="topRight" arrow>
      <Button style={{height:'48px'}}>
        <p>
        <Avatar  style={{marginRight:"15px"}} src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png" size={40} />
        Admin
        </p>
        
      </Button>
    </Dropdown>

  </div>
  );
};

export default HeaderRightPart;
