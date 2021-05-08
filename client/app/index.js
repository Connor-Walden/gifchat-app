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
import Profile from './components/Profile/Profile';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Route exact path="/" component={Home}/>
      <Route exact path="/profile" component={Profile} />
    </App>
  </Router>
), document.getElementById('app'));
