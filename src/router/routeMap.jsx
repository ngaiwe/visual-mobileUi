import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from '@/containers/App'
import Home from '@/containers/Home/Home'

class RouteMap extends React.Component {
    render () {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/" component={Home}/>
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default RouteMap