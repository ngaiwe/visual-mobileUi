import React from 'react'
import {BrowserRouter as Router, Route, IndexRoute, Switch} from 'react-router-dom'

import App from '@/containers/App'
import Home from '@/components/Home'

class RouteMap extends React.Component {
    render () {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default RouteMap