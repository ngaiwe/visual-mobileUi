import { Route, Switch } from 'react-router-dom'

import Home from '../components/Home.jsx'

export default (
    <Switch>
        <Route path='/home' component={Home}/>
    </Switch>
)