import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

// import {Button} from 'antd';
import '@/css/reset.css'
import './app.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header}/>
        {this.props.children}
        <Route exact path='/' component={Footer}/>
      </div>
    )
  }
}

export default App;
