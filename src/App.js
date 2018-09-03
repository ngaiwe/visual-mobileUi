import React, { Component } from 'react';
import {Button} from 'antd';
import '@/css/reset.css'
import '@/App.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="text">123</div>
        <Button type="primary">Button</Button>
        {this.props.children}
      </div>
    )
  }
}

export default App;
