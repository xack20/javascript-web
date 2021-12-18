import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import slugify from 'react-slugify';

import { useSelector, useDispatch } from 'react-redux';
import { changeActiveTab, removePane, addPane } from '../../Redux/CommonSlice';

import './Tab.css';
import { useHistory } from 'react-router-dom';

const { TabPane } = Tabs;

function Tab(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const activeTab = useSelector((s) => s.common.activeTab);
  const Panes = useSelector((s) => s.common.panes);

  useEffect(() => {
    dispatch(changeActiveTab(props.Key));
    dispatch(
      addPane({
        title: props.Key,
        key: props.Key,
        path: props.BC,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    history.push(`/${slugify(activeTab)}`);
  }, [activeTab,history]);

  const onHit = (activeKey) => {
    dispatch(changeActiveTab(activeKey));
    history.push(`/${slugify(activeTab)}`);
  };

  const remove = (targetKey) => {
    dispatch(removePane(targetKey));
  };

  return (
    <Tabs
      onChange={onHit}
      activeKey={props.Key}
      type="editable-card"
      onEdit={remove}
      className={`${Panes.length ? 'tab-bar' : 'tab-bar-hide'}`}
      hideAdd
    >
      {/* {console.log(history)}
      {console.log(activeTab)} */}
      {Panes.map((pane) => {
        return (
          <TabPane
            tab={pane.title}
            key={pane.key}
            closable={pane.closable}
          ></TabPane>
        );
      })}
    </Tabs>
  );
}

export default Tab;
