import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App/App';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import AddFriends from './components/AddFriends/AddFriends';

import './styles/normalize.css';

render((
  <Router>
    <App>
      <Route exact path="/" component={Home}/>
      <Route exact path="/profile" component={Profile} />
      <Route exact path='/addfriends' component={AddFriends} />
    </App>
  </Router>
), document.getElementById('app'));
