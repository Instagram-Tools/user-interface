import React, { Component } from 'react';
import NavBar from './NavBar';
import './css/webflow.css';
import './css/normalize.css';
import './css/code-connect.webflow.css';
import GeneralSettings from './GeneralSettings';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <GeneralSettings />
      </div>
    );
  }
}

export default App;
