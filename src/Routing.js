import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Legal from './Legal';
import { Provider } from './Context';
import Navigation from './Navigation';
import Settings from './Settings';
import Notifications from './Notifications';
import VerifyAccount from './VerifyAccount';

export default function BasicExample() {
  return (
    <Provider>
      <Router>
        <div className="body-4">
          <Navigation />
          <Notifications />
          <Route exact path="/" component={Home} />
          <Route exact path="/interface" component={App} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/insta_verify" component={VerifyAccount} />
        </div>
      </Router>
    </Provider>
  );
}
