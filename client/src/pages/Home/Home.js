import React, { useContext, useState } from 'react';
import 'whatwg-fetch';

import LoginContext from '../../utils/LoginContext';
import Alert from '../../components/Alert/Alert';
import HomeHero from '../../components/HomeHero/HomeHero';

function Home() {
  const { loggedIn, loginFunc, signupFunc } = useContext(LoginContext);

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', password: '', password2: '' });
  const [modalData, setModalData] = useState({ show: 'modal fade', title: '', content: '' });

  const updateLoginInfo = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }

  const hideModal = () => {
    setModalData({ show: 'modal fade', title: '', content: '' });
  }

  const login = (event) => {
    event.preventDefault();

    if(loginData.username != '' && loginData.password != '') {
      loginFunc(loginData);
      setLoginData({ username: '', password: '' });
      setModalData({ show: 'modal fade show', title: 'Login', content: 'You are now logged in. Close to continue!' });
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
      setModalData({ show: 'modal fade show', title: 'Signup', content: 'You have now signed up. Close and log in to continue!' });
    }
  }

  return (
    <>
      <Alert { ...modalData } closeModalFunc={() => hideModal()} />
      <HomeHero 
        loggedIn={loggedIn} 
        
        login={(event) => login(event)} 
        updateLoginInfo={(event) => updateLoginInfo(event)} 
        loginData={loginData} 

        signup={(event) => signup(event)} 
        updateSignUpData={(event) => updateSignUpData(event)} 
        signupData={signupData} 
      />
    </>
  );
}

export default Home;
