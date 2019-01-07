import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Legal from './Legal';
import About from './About';
import { Provider } from './Context';
import Navigation from './Navigation';
import { StripeProvider } from 'react-stripe-elements';

export default function BasicExample() {
  return (
    <StripeProvider apiKey="pk_test_b1xnLwuXAD8nz71YQQX2ygaP">
      <Provider>
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/interface" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/legal" component={Legal} />
          </div>
        </Router>
      </Provider>
    </StripeProvider>
  );
}
