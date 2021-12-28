// Modules Import
import React from 'react'
import slugify from 'react-slugify'

import { Layout, Empty } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

// JS/JSX Imports
import data from '../../Data/Menu.js'

import PassThrough from './PassThrough.jsx'
import NotFound from '../../Views/Default/404.jsx'
import Tab from '../../Components/Tab/Tab.jsx'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb.jsx'
import ClientProfile from '../../Views/Profile/ClientProfile.jsx'

// CSS Imports
import './MainContent.css'
import Profile from '../../Views/Profile/Profile.jsx'

// De-Structuring Components
const { Content } = Layout






/*************************                   Code Starts                *********************/

function MainContent () {
  const cssStyle = useSelector(s => s.common.collapsedDV)
    ? 'site-layout-background'
    : 'site-layout-background-uncollapsed'


  // const activeTab = useSelector((s) => s.common.activeTab);
  // const ChangeURL = (j) => {
  //   useDispatch(changeActiveTab(j));
  // };
  return (
    <Layout className={`${cssStyle} ml`}>
      <Content className='main-content'>
        <Switch>
          
          <Route exact path='/'>
            <Redirect to='/admin-dashboard' />
          </Route>

          {data.map(item => {
            return item.child.map(i => {
              return i.child.length ? (
                i.child.map(j => {
                  return (
                    <Route path={`/${slugify(j)}`} /*render={ChangeURL(j)}*/>
                      <Tab Key={j} BC={[item.title, i.title, j]}></Tab>
                      <BreadCrumb />
                      <PassThrough page={j} />
                    </Route>
                  )
                })
              ) : (
                <Route path={`/${slugify(i.title)}`}>
                  <Tab Key={i.title} BC={[item.title, i.title]} />
                  <BreadCrumb />
                  <PassThrough page={i.title} />
                </Route>
              )
            })
          })}

          <Route exact path='/empty'>
            <Empty
              description={'Nothing To Display'}
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              style={{ marginTop: '300px' }}
            />
          </Route>

          {/* <Route exact path='/employee/profile'>
            <Profile/>
          </Route> */}

         

          <Route exact path='/employee/profile/:id' component={Profile}/>

          <Route exact path='/client/profile/:id' component={ClientProfile}/>
          
          <Route path='*'>
            <NotFound name={'This'} />
          </Route>

        </Switch>
      </Content>
    </Layout>
  )
}

export default MainContent
