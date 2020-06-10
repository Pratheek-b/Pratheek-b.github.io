import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Dropdown from './Dropdown.js';
import Stocklist from './stocklist.js'
import { stocks } from "./stocks.js"
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <Dropdown />
    <Stocklist stocks={stocks} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
