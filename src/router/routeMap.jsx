import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from '@/containers/App'
// import Home from '@/components/Home'

class RouteMap extends React.Component {
    render () {
        return (
            <Router>
                <App>
                    <Switch>
                        
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default RouteMap