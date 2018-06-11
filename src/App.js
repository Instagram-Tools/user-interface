import React, { Component } from 'react';
import NavBar from './NavBar';
import GeneralSettings from './GeneralSettings';
import './webflow.css';

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
