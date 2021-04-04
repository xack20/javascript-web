import React, { Component } from 'react';
import { Layout, Breadcrumb, Tabs, Empty, Drawer } from 'antd';

import './NavBarSidebar.css';
import HeaderCustom from './HeaderCustom';
import SidebarCustom from './SidebarCustom';
import Attendance from '../Views/Attendance/Attendance.jsx';

const { Content, Sider } = Layout;
const { TabPane } = Tabs;

class NavBarSidebar extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    this.state = {
      activeKey: 'Admin Dashboard',
      isToggled: false,
      collapsed: false,
      content_collapsed_string: 'site-layout-background-uncollapsed',
      logo_collapsed_string: 'logo-uncollapsed',
      tab_bar: 'tab-bar',
      breadcrumb: 'breadcrumb',
      panes: [
        {
          title: 'Admin Dashboard',
          content: 'Dashboard Content',
          key: 'Admin Dashboard',
          path: ['Main', 'Dashboard', 'Admin Dashboard'],
        },
      ],
    };
  }

  onClose = () => {
    this.setState({ isToggled: false });
  };

  toggleTrueFalse = () => this.setState({ isToggled: !this.state.isToggled });

  onChange = (activeKey) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = (props) => {
    // console.log(props);
    const { panes } = this.state;
    // const activeKey = `newTab${this.newTabIndex++}`;
    const activeKey = props.title;

    var ef = false;
    panes.forEach((element) => {
      ef |= element.title === props.title;
    });

    if (ef) {
      this.setState({ activeKey: activeKey });
      return;
    }

    panes.push({
      title: props.title,
      content: props.content,
      key: activeKey,
      path: props.path,
    });
    const tb = panes.length ? 'tab-bar' : 'tab-bar-hide';
    const bc = panes.length ? 'breadcrumb' : 'breadcrumb-hide';
    this.setState({ panes, activeKey, tab_bar: tb, breadcrumb: bc });
  };

  remove = (targetKey) => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    const tb = panes.length ? 'tab-bar' : 'tab-bar-hide';
    const bc = panes.length ? 'breadcrumb' : 'breadcrumb-hide';
    this.setState({ panes, activeKey, tab_bar: tb, breadcrumb: bc });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      content_collapsed_string: !this.state.collapsed
        ? 'site-layout-background-collapsed'
        : 'site-layout-background-uncollapsed',
      logo_collapsed_string: !this.state.collapsed
        ? 'logo'
        : 'logo-uncollapsed',
    });
  };

  render() {
    return (
      <Layout>
        <HeaderCustom
          dataFromParent={this.state}
          toggle={() => this.toggle}
          toggleAgain={() => this.toggleTrueFalse}
        ></HeaderCustom>

        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className="sider"
          width="225px"
        >
          <SidebarCustom
            from={'sider'}
            dataFromParent={this.state}
            add={this.add}
            toggle={this.toggleTrueFalse}
          ></SidebarCustom>
        </Sider>

        <Drawer
          theme="light"
          placement="left"
          onClose={this.onClose}
          closable={false}
          visible={this.state.isToggled}
          className="drawer"
          bodyStyle={{ backgroundColor: '#001529', padding: '0' }}
          width={200}
        >
          <SidebarCustom
            from={'drawer'}
            dataFromParent={this.state}
            add={this.add}
            toggle={this.toggleTrueFalse}
          ></SidebarCustom>
        </Drawer>

        <Layout
          className={`ml site-layout-background ${this.state.content_collapsed_string}`}
        >
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
            className={`${this.state.tab_bar}`}
            hideAdd
          >
            {console.log(this.state.panes)}
            {this.state.panes.map((pane) => {
              return (
                <TabPane
                  tab={pane.title}
                  key={pane.key}
                  closable={pane.closable}
                ></TabPane>
              );
            })}
          </Tabs>

          <Breadcrumb className={`${this.state.breadcrumb}`}>
            {this.state.panes.map((item) => {
              if (item.key === this.state.activeKey) {
                return item.path.map((p) => {
                  return <Breadcrumb.Item>{p}</Breadcrumb.Item>;
                });
              } else return <div></div>;
            })}
          </Breadcrumb>

          <Content className="main-content">
            {this.state.panes.length ? (
              <Attendance />
            ) : (
              <Empty
                description={'Nothing To Display'}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                style={{ marginTop: '300px' }}
              />
            )}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default NavBarSidebar;
