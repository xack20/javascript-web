import React from 'react';
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import './BreadCrumb.css';

function BreadCrumb() {
  const activeKey = useSelector((s) => s.common.activeTab);
  const panes = useSelector((s) => s.common.panes);
  const cssStyle = panes.length ? 'breadcrumb' : 'breadcrumb-hide';
  return (
    <Breadcrumb className={`${cssStyle}`}>
      {panes.map((item, idx) => {
        if (item.title === activeKey) {
          return item.path.map((p, id) => {
            return (
              <Breadcrumb.Item
                key={p}
                style={id + 1 === item.path.length ? { fontSize: '17px' } : {}}
              >
                {p}
              </Breadcrumb.Item>
            );
          });
        } else return <React.Fragment key={idx}></React.Fragment>;
      })}
    </Breadcrumb>
  );
}

export default BreadCrumb;
