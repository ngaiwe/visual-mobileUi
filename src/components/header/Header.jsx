import React, { Component } from 'react';
import { Menu } from 'antd';
import './header.less'

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">主页</Menu.Item>
                    <Menu.Item key="2">即将开发</Menu.Item>
                    <Menu.Item key="3">即将开发</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Header