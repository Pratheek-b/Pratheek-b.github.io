import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Userlogin from './loginApp.js';
import Dropdown from './Dropdown.js';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <Dropdown />
    <Userlogin />
  </React.StrictMode>,
  document.getElementById('login')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
