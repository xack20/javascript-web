import React from 'react';
import { Layout } from 'antd';
import MenuList from '../../Components/Menu/Menu.jsx';

import './SiderDrawer.css';
import { useSelector } from 'react-redux';

const { Sider } = Layout;
export default function SideBar() {
  const collapsed = useSelector((s) => s.common.collapsedDV);
  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="sider"
      width="225px"
    >
      <MenuList />
    </Sider>
  );
}
