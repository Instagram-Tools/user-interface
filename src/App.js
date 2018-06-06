import React, { Component } from 'react';
import API_Gateway from './API_Gateway';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    API_Gateway.load().then(r => console.log(r));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
