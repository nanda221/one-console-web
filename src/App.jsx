import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import logo from './logo.svg';
import { Layout, Menu, Icon } from 'antd';
import './App.less';

import ContainerList from './components/ContainerList';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Link to="/images">
                  <Icon type="file" />
                  <span className="nav-text">镜像列表</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/containers">
                  <Icon type="desktop" />
                  <span className="nav-text">容器列表</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Route path="/" render={({ match }) => {
              return (<Header style={{ background: '#fff', padding: 0 }}>
              </Header>)
            }}>
            </Route>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Route path="/containers" component={ContainerList}>
              </Route>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
      </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
