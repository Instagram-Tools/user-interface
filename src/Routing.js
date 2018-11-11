import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Legal from './Legal';
import { Provider } from './Context';
import Navigation from './Navigation';

export default function BasicExample() {
  return (
    <Provider>
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/interface" component={App} />
          <Route exact path="/legal" component={Legal} />
        </div>
      </Router>
    </Provider>
  );
}
