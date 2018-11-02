import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/interface">Interface</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/legal">Legal</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={App} />
      </div>
    </Router>
  );
}

export default BasicExample;
