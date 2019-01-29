import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Legal from './Legal';
import { Provider } from './Context';
import Navigation from './Navigation';
import Settings from './Settings';
import Notifications from './Notifications';

export default function BasicExample() {
  return (
    <Provider>
      <Router>
        <div className="body-2">
          <Navigation />
          <Notifications />
          <Route exact path="/" component={Home} />
          <Route exact path="/interface" component={App} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </Router>
    </Provider>
  );
}
