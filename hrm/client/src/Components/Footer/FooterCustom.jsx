import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
export default function FooterCustom() {
  return (
    <Footer
      style={{
        marginBottom: '25px',
        marginTop: '125px',
        padding: '0px',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        height: '5px',
        borderTop: '.1px dotted grey',

        position: 'sticky',
        bottom: 0,
      }}
    >
      COPYRIGHT ©2021 All Right Reserved Semicolon IT Solution
    </Footer>
  );
}
