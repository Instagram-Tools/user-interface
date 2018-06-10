import React, { Component } from 'react';
import API_Gateway from './API_Gateway';
import logo from './logo.svg';
import './webflow.css';

class App extends Component {
  render() {
    API_Gateway.get('u')
      .then(r => console.log(r))
      .catch(r => console.error('err1: ' + r));
    API_Gateway.put({ username: 'u', settings: 'sss', password: 'pw' })
      .then(r => console.log(r))
      .catch(r => console.error('err2: ' + r));

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
