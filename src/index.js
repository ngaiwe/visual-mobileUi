import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

import configureStore from './store/configureStore.js'
import RouteMap from '@/router/routeMap'
import registerServiceWorker from '@/registerServiceWorker'

const store = configureStore()

render(
    <Provider store={store}>
        <RouteMap/>
    </Provider>, 
document.getElementById('root'))

registerServiceWorker();
