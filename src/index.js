import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from '@/App';
import Route from '@/components/Home.jsx'
import registerServiceWorker from '@/registerServiceWorker';

ReactDOM.render((<BrowserRouter>
    <App>
        <Route/>
    </App>
</BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
