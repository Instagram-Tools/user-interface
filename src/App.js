import React, { Component } from 'react';
import './css/webflow.css';
import './css/normalize.css';
import './css/code-connect.webflow.css';
import NavBar from './NavBar';
import GeneralSettings from './GeneralSettings';
import LikeSettings from './LikeSettings';
import CommentSettings from './CommentSettings';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <GeneralSettings />
        <LikeSettings />
        <CommentSettings />
      </div>
    );
  }
}

export default App;
