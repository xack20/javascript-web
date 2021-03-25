import React from 'react';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

function MetaCustom({ data }) {
  return (
    <Meta
      avatar={<Avatar src={data.pic_url} size={100} />}
      title={data.name}
      description={data.role}
      style={{ height: '150px', paddingTop: '30px' }}
    />
  );
}

export default MetaCustom;
