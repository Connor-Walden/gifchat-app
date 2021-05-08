import React from 'react';

import {Link} from 'react-router-dom';

function LoginForm(props) {
  return (
    <div>
      <h1>Log in!</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username"
            name="username"
            value={props.loginData.username}
            onChange={(event) => props.updateLoginInfo(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={props.loginData.password}
            onChange={(event) => props.updateLoginInfo(event)}
          />
        </div>
        <Link className="btn btn-primary" to="/" onClick={() => props.login()}>Log In!</Link>
      </form>
    </div>
  );
} 

export default LoginForm;