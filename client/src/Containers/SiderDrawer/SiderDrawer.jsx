import React from 'react';
import SideBar from './SideBar.jsx';
import DrawerBar from './DrawerBar.jsx';
import { useSelector } from 'react-redux';

export default function SiderDrawer() {
  const width = useSelector((s) => s.common.windowWidth);
  return width < 700 ? <DrawerBar /> : <SideBar />;
}
