import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { SubMenu } = Menu
const { Sider } = Layout

class Nav extends Component {
    render () {
        return (
            <Sider className="silderType" width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['base']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="base" title={<span><Icon type="form" theme="outlined" />基础设置</span>}>
                  <Menu.Item key="1">
                    <Link to="/modules/sizeSet">尺寸设置</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/modules/bdSet">背景设置</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
        )
    }
}

export default Nav