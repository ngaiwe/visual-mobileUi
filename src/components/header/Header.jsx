import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './header.less'

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="title">VIPKID可视化后台</div>
                <div className="menu">
                    <PrivateMenu/>
                </div>
            </div>
        )
    }
}

class PrivateMenu extends Component {
    state = {
        currentPage: 'main',
    }
    handleClick (e) {
        this.setState({
            currentPage: e.key
        })
    }
    render () {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.currentPage]}
                mode="horizontal"
                theme="dark"
            >
                <Menu.Item key="main">
                    <Icon type="home" />首页
                </Menu.Item>
            </Menu>
        )
    }
}

export default Header