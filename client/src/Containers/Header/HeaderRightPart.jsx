import React from 'react';
import { Menu, Dropdown, Button, Avatar } from 'antd';
import SearchBar from '../../Components/Search/SearchBar.jsx';
import './HeaderRightPart.css';
import base64 from 'react-native-base64';
import {logout} from '../../Services/Auth';
import {useHistory} from 'react-router-dom';



const HeaderRightPart = () => {

  const history = useHistory();

  const LogOut = async() => {
    
    try {
      const res = await logout();
      console.log(res.status);
    } catch (error) {
      console.log(error.message);
    }
    
    window.localStorage.clear();
    window.location.reload();
  }

  const menu = (
    <Menu>
      <Menu.Item>
      <Button type="text" onClick={()=>{history.push("/employee/profile/"+parseInt(window.localStorage.getItem("_uid_")))}}>Profile</Button>
      </Menu.Item>
      {base64.decode(window.localStorage.getItem("_usrl_"))==="ADMIN" && <Menu.Item><Button type="text">Settings</Button></Menu.Item>}
      <Menu.Item>
      <Button type="text" onClick={LogOut}>Logout</Button>
      </Menu.Item>
    </Menu>
  );


  return (
    <div className="header-extention">
    <SearchBar />

    <Dropdown overlay={menu} placement="topRight" arrow>
      <Button style={{height:'48px', borderRadius:"10px"}}>
        <p>
        <Avatar  style={{marginRight:"15px"}} src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png" size={40} />
        {base64.decode(window.localStorage.getItem("_usnm_"))}
        </p>
        
      </Button>
    </Dropdown>

  </div>
  );
};

export default HeaderRightPart;
