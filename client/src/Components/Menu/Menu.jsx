import React from 'react'
import { Menu } from 'antd'
import slugify from 'react-slugify'


import './Menu.css'

import { useSelector, useDispatch } from 'react-redux'

import { changeActiveTab, addPane, changeMV } from '../../Redux/CommonSlice'

import { NavLink } from 'react-router-dom'

import dataA from "../../Data/Menu.js"
import dataE from "../../Data/MenuE.js"
import base64 from 'react-native-base64'


const { SubMenu } = Menu

export default function MenuList () {

  const dispatch = useDispatch()
  const collapsed = useSelector(s => s.common.collapsedDV)
  const collapsedMV = useSelector(s => s.common.collapsedMV)

  const clickHandle = e => {
    const path = e.key.split(',')
    dispatch(changeActiveTab(path[path.length - 1]))
    dispatch(
      addPane({
        title: path[path.length - 1],
        key: path[path.length - 1],
        path: path
      })
    )
    if (collapsedMV) dispatch(changeMV())
  }

  const [data,setData] = React.useState(dataE)

  React.useEffect(() => {
    if(base64.decode(window.localStorage.getItem('_usrl_')) === "ADMIN") {
      setData(dataA)
    }
    else {
      setData(dataE)
    }
  })

  return (
    <Menu
      mode='inline'
      onClick={clickHandle}
      defaultOpenKeys={['Dashboard']}
      defaultSelectedKeys={['Main,Dashboard,Admin Dashboard']}
    >
      {data.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            {
              <div className='sidebar-options'>
                {collapsed ? ' ' : item.title}
              </div>
            }

            {item.child.map(i => {
              return i.child.length ? (
                <SubMenu title={i.title} icon={i.icon} key={i.title}>
                  {i.child.map(j => {
                    return (
                      <Menu.Item key={[item.title, i.title, j]}>
                        <NavLink to={`/${slugify(j)}`}>{j}</NavLink>
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
              ) : (
                <Menu.Item icon={i.icon} key={[item.title, i.title]}>
                  <NavLink to={`/${slugify(i.title)}`}>{i.title}</NavLink>
                </Menu.Item>
              )
            })}
          </React.Fragment>
        )
      })}
      <div style={{ height: 70 }}></div>
    </Menu>
  )
}
