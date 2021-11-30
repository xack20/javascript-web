import React, { useState } from 'react';
import { Layout } from 'antd';
import './HeaderMain.css';

import { useSelector, useDispatch } from 'react-redux';
import { changeDV, changeMV } from '../../Redux/CommonSlice';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
} from '@ant-design/icons';

import Title from '../../Components/Title/Title.jsx';
import logo from '../../Resources/Logo/favicon.png';

import HeaderRightPart from './HeaderRightPart.jsx';

const { Header } = Layout;

const HeaderMain = (props) => {
  const dispatch = useDispatch();
  const collapsedDV = useSelector((s) => s.common.collapsedDV);

  const [util, setUtil] = useState({
    logo_collapsed_string: 'logo-uncollapsed',
  });

  return (
    <Header className="main-head fixed-top">
      <div className="left-logo">
        <img
          src={logo}
          alt="Semicolon Logo"
          className={`logo ${util.logo_collapsed_string}`}
        />
      </div>

      {React.createElement(
        util.collapsedDV ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: () => {
            dispatch(changeDV());
            setUtil({
              ...util,
              logo_collapsed_string: collapsedDV ? 'logo-uncollapsed' : 'logo',
            });
          },
        }
      )}

      <BarsOutlined
        className="trigger-copy"
        onClick={() => dispatch(changeMV())}
      />

      <div className="right-logo">
        <img
          src={logo}
          alt="Semicolon Logo"
          className={`logo-again ${util.logo_collapsed_string}`}
        />
      </div>
      <Title />

      <HeaderRightPart />
    </Header>
  );
};

export default HeaderMain;
