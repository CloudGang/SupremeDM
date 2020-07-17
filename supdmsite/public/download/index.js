import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route, Switch, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DownloadFile from "./success/DownloadFile"; 
import history from './History'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router history={history} >
    <Link to="./query/" component={DownloadFile}>go to my surveys</Link>
      <Switch>
        <Route path='./query/' component={DownloadFile}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
