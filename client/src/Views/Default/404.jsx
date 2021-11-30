import React from 'react';
import { Result, Button } from 'antd';
function NotFound(props) {
  return (
    <Result
      status="404"
      title="404"
      subTitle={`Sorry, ${props.name} page does not exist.`}
      extra={<Button type="primary">Back Home</Button>}
    />
  );
}

export default NotFound;
