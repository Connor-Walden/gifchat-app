import React, { useEffect, useState } from 'react';
import ThemeContext from '../../utils/ThemeContext';
import LoginContext from '../../utils/LoginContext';
import API from '../../utils/API';

import Home from '../Home/Home';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const api = new API();

const App = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    api.getLoggedIn().then((data) => {
      setUserData({id: data.data.loginId, username: data.data.name});

      if(data.data.loggedIn == true) {
        setLoggedIn(true);
      }
      else setLoggedIn(false);
      //console.log(loginId);
    });
  }, [loggedIn]);

  const switchTheme = () => {
    if(theme == 'light') setTheme('dark');
    else setTheme('light');
  }

  const login = (user) => {
    api.login(user)
    .then(data => {
      setLoggedIn(true);
      setUserData({ id: data.data.loginId, username: data.data.name });
    })
    .catch(err => {
      return err;
    });
  };

  const signup = (user) => {
    api.signup(user)
      .then(data => {
        return data;
      })
      .catch(err => {
        return err;
      });
  };

  const logout = () => {
    api.logout().then(_ => {
      setLoggedIn(false);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme }} >
      <LoginContext.Provider value={{ userData, loggedIn, loginFunc: (user) => login(user), logoutFunc: () => logout(), signupFunc: (user) => signup(user) }}>
        <div style={{backgroundColor: theme == 'dark' ? "#64616d" : "#b1abc2", minHeight: '100vh', paddingBottom: '60px' }}>
          <Header switchTheme={() => switchTheme()} />

          <main className="container">
            {loggedIn ? children : (<Home/>)}
          </main>

        </div>
        <Footer />
      </LoginContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
