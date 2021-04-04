import React from 'react';
import { Drawer } from 'antd';
import MenuList from '../../Components/Menu/Menu.jsx';

import './SiderDrawer.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeMV } from '../../Redux/CommonSlice';

export default function DrawerBar(props) {
  const dispatch = useDispatch();
  const collapsedMV = useSelector((s) => s.common.collapsedMV);

  return (
    <Drawer
      theme="light"
      placement="left"
      onClose={() => {
        dispatch(changeMV());
      }}
      closable={true}
      visible={collapsedMV}
      bodyStyle={{
        backgroundColor: '#001529',
        padding: '0',
        marginTop: '65px',
      }}
      width={200}
    >
      <MenuList />
    </Drawer>
  );
}
