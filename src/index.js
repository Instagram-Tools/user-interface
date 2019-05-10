import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/webflow.css';
import './css/pinkparrot-internjamesbond007.webflow.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routing from './Routing';

ReactDOM.render(<Routing />, document.getElementById('root'));
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register({
//   onUpdate: registration => {
//     console.log('onUpdate() registration', registration);
//     alert('New content is available and will be used when all tabs for this page are closed.');
//     window.close();
//   }
// });
