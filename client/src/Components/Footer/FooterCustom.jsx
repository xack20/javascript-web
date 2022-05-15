import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
export default function FooterCustom() {
  return (
    <Footer
      style={{
        marginBottom: '25px',
        // marginTop: '125px',
        padding: '0px',
        textAlign: 'center',
        backgroundColor: 'white',
        height: '3px',
        borderTop: '.1px dotted grey',
        position: 'sticky',
        width: '100%',
        bottom: 0,
      }}
    >
      COPYRIGHT ©2021 All Right Reserved | Designed by {'Shaery and Ayesha'} 
    </Footer>
  );
}
