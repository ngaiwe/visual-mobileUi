import React, { Component } from 'react';
import './css/reset.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        123456
        {this.props.children}
      </div>
    )
  }
}

export default App;
