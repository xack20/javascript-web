import React from 'react';
import { Layout, Empty } from 'antd';
import slugify from 'react-slugify';
import { Switch, Route, Redirect } from 'react-router-dom';

import './MainContent.css';
import data from '../../../Data/Menu.js';

import NotFound from '../../../Views/Default/404.jsx';

import Tab from '../../../Components/Tab/Tab.jsx';
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb.jsx';
// import LoadSpin from '../../../Components/Spinner/LoadSpin';
import PassThrough from './PassThrough';
// const PassThrough = React.lazy(() => import('./PassThrough'));

// import { changeActiveTab } from '../../../Redux/CommonSlice';

const { Content } = Layout;
function MainContent() {
  // const activeTab = useSelector((s) => s.common.activeTab);
  // const ChangeURL = (j) => {
  //   useDispatch(changeActiveTab(j));
  // };
  return (
    <Content className="main-content">
      <Switch>
        <Route exact path="/">
          <Redirect to="/admin-dashboard" />
        </Route>

        {data.map((item) => {
          return item.child.map((i) => {
            return i.child.length ? (
              i.child.map((j) => {
                return (
                  <Route path={`/${slugify(j)}`} /*render={ChangeURL(j)}*/>
                    <Tab Key={j} BC={[item.title, i.title, j]}></Tab>

                    <BreadCrumb />
                    <PassThrough page={j} />
                  </Route>
                );
              })
            ) : (
              <Route path={`/${slugify(i.title)}`}>
                <Tab Key={i.title} BC={[item.title, i.title]} />
                <BreadCrumb />
                <PassThrough page={i.title} />
              </Route>
            );
          });
        })}

        <Route path="/empty">
          <Empty
            description={'Nothing To Display'}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            style={{ marginTop: '300px' }}
          ></Empty>
        </Route>
        <Route path="*">
          <NotFound name={'This'} />
        </Route>
      </Switch>
    </Content>
  );
}

export default MainContent;
