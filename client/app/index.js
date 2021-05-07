import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';

import Home from './components/Home/Home';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Route exact path="/" component={Home}/>
    </App>
  </Router>
), document.getElementById('app'));
