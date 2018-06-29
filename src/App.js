import React, { Component } from 'react';
import NavBar from './NavBar';
import './css/webflow.css';
import './css/normalize.css';
import './css/code-connect.webflow.css';
import GeneralSettings from './GeneralSettings';
import API_Gateway from './API_Gateway';

class App extends Component {
  render() {
    // API_Gateway.register('t@est.net', 'test12').then(value => console.log(value))
    // API_Gateway.login('t@est.net', 'test12').then(value => console.log(value))
    console.log('get(u)');
    API_Gateway.get('u').then(value => console.log(value));

    return (
      <div>
        <NavBar />
        <GeneralSettings />
      </div>
    );
  }
}

export default App;
