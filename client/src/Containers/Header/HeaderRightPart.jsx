import React, { Component } from 'react';
import { Avatar } from 'antd';
import './HeaderRightPart.css';
import SearchBar from '../../Components/Search/SearchBar.jsx';
class HeaderRightPart extends Component {
  render() {
    return (
      <div className="header-extention">
        <SearchBar />
        <Avatar
          src="https://semicolonit.com/wp-content/uploads/2021/02/biprodas-roy.jpg"
          size={40}
        />
      </div>
    );
  }
}

export default HeaderRightPart;
