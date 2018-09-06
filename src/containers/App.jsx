import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './app.less'

import { Layout, Menu, Icon } from 'antd'

import Header from '@/components/Header/Header'
import Nav from '@/components/Nav/Nav'
import ModuleContainer from '@/containers/ModuleContainer/ModuleContainer'

const { SubMenu } = Menu
const { Content, Sider } = Layout

class App extends Component {
  render () {
    return (
      <div className="app">
        <Layout>
          <Header/>
          <Layout>
            <Route path="/" component={Nav}/>
            <Route exact path="/modules/:type" component={ModuleContainer}/>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default App