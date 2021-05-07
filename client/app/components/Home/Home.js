import React, { useEffect, useContext, useState } from 'react';
import 'whatwg-fetch';
import openSocket from 'socket.io-client';
const socket = openSocket();

import LoginContext from '../../utils/LoginContext';

function Home() {
  const { loggedIn, loginFunc, signupFunc } = useContext(LoginContext);

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', password: '', password2: '' });

  useEffect(() => {
    socket.on('recieve_message', function (msg) {
      // UPDATE USER MESSAGES
      console.log(msg);
    });
  }, []);

  const updateLoginInfo = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }

  const login = (event) => {
    event.preventDefault();

    if(loginData.username != '' && loginData.password != '') {
      loginFunc(loginData);
      setLoginData({ username: '', password: '' });
    } else {
      
    }
  }

  const updateSignUpData = (event) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
  }

  const signup = (event) => {
    event.preventDefault();

    if (signupData.username != '' && signupData.password != '' && signupData.password2 != '') {
      console.log(signupFunc(signupData));
      setSignupData({ username: '', password: '', password2: '' });
    } else {

    }
  }

  return (
    <>
      {loggedIn ? (
        <div>
        </div>
      ) : (
        <div>
          <h1>Log in!</h1>
          <form onSubmit={(event) => login(event)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="username"
                name="username"
                value={loginData.username}
                onChange={(event) => updateLoginInfo(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={loginData.password}
                onChange={(event) => updateLoginInfo(event)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          <br />

          <h1>Sign up!</h1>
          <form onSubmit={(event) => signup(event)}>
            <div className="mb-3">
              <label htmlFor="usernamesu" className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                id="usernamesu"
                aria-describedby="usernamesu"
                name="username"
                value={signupData.username}
                onChange={(event) => updateSignUpData(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordsu" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="passwordsu"
                name="password"
                value={signupData.password}
                onChange={(event) => updateSignUpData(event)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordsu2" className="form-label">Password Again:</label>
              <input
                type="password"
                className="form-control"
                id="passwordsu2"
                name="password2"
                value={signupData.password2}
                onChange={(event) => updateSignUpData(event)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Home;
