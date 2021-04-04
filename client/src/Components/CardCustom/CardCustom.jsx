import React, { useState, useEffect } from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

function CardCustom({ data }) {
  const [state, setState] = useState({ loading: false });

  const onChange = (checked) => {
    setState({ loading: !checked });
  };

  return (
    <Card
      style={{ width: 250, marginTop: 16 }}
      actions={[
        <EditOutlined key="ellipsis" />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <Skeleton loading={state.loading} avatar active>
        <Meta
          avatar={<Avatar src={data.pic_url} size={50} />}
          title={data.name}
          description={data.role}
        />
      </Skeleton>
    </Card>
  );
}

export default CardCustom;
