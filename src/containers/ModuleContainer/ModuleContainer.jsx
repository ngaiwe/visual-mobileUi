import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'

import './moduleContainer.less'

import SizeSet from '@/containers/SizeSet/SizeSet'

const { Sider } = Layout

class ModuleContainer extends Component {
    render () {
        return (
            <Sider className="moduleContainer" width={500}>
                <Route exact path="/modules/sizeSet" component={SizeSet}/>
            </Sider>
        )
    }
}

export default ModuleContainer