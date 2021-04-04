import React from 'react';

import { Layout } from 'antd';

import MainContent from './MainContent/MainContent.jsx';
import './MainLayout.css';

import { useSelector } from 'react-redux';

function MainLayout() {
  const cssStyle = useSelector((s) => s.common.collapsedDV)
    ? 'site-layout-background'
    : 'site-layout-background-uncollapsed';

  return (
    <Layout className={`${cssStyle} ml`}>
      <MainContent />
    </Layout>
  );
}

export default MainLayout;
