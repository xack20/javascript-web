import React from 'react';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

function MetaCustom({ data }) {
  return (
    <Meta
      avatar={<Avatar src="https://www.pinclipart.com/picdir/middle/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png" size={100} />}
      title={data.name}
      description={data.role}
      style={{ height: '150px', paddingTop: '30px' }}
    />
  );
}

export default MetaCustom;
