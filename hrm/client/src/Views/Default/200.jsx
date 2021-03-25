import React from 'react';
import { Result } from 'antd';
function Success(props) {
  return <Result status="success" title={`Welcome to ${props.name} Page`} />;
}

export default Success;
