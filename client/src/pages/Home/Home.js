import React, { useEffect, useContext, useState } from 'react';
import 'whatwg-fetch';

import openSocket from 'socket.io-client';
const socket = openSocket();

import LoginContext from '../../utils/LoginContext';

import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';

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

  const login = () => {
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
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <img src='./assets/logo.gif' style={{width:'100%'}} />
            </div>
          </div>
        </div>
      ) : (
        <div>
            <LoginForm 
              login={(event) => login(event)} 
              updateLoginInfo={(event) => updateLoginInfo(event)} 
              loginData={loginData}
            />

          <br />

          <SignupForm 
            signup={event => signup(event)}
            updateSignUpData={event => updateSignUpData(event)}
            signupData={signupData}
          />
          <br />
        </div>
      )}
    </>
  );
}

export default Home;
