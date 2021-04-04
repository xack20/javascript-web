import React from 'react';
import { Skeleton } from 'antd';
export default function SkeletonCustom(props) {
  return (
    <div>
      {[...Array(props.quantity).keys()].map((item) => {
        return (
          <Skeleton active={true} round={true}>
            {item}
          </Skeleton>
        );
      })}
    </div>
  );
}
