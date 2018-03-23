import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg';
import ToiletsContainer from './containers/ToiletsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <h3>Here is a list of all the toilets and their waiting time:</h3>
        </p>
        <ToiletsContainer />
      </div>
    )
  }
}

export default App