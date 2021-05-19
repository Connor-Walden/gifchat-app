import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App/App';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import AddFriends from './pages/AddFriends/AddFriends';
import Messages from './pages/Messages/Messages';

import './styles/normalize.css';

render((
  <Router>
    <App>
      <Route exact path="/" component={Home}/>
      <Route exact path="/profile" component={Profile} />
      <Route exact path='/addfriends' component={AddFriends} />
      <Route path="/messages/:id" render={(props) => <Messages {...props} />}/>
    </App>
  </Router>
), document.getElementById('app'));
