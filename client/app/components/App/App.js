import React, { useEffect, useState } from 'react';
import ThemeContext from '../../utils/ThemeContext';
import LoginContext from '../../utils/LoginContext';
import API from '../../utils/API';

import Home from '../Home/Home';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    API.getLoggedIn().then((data) => {
      setUserData({id: data.data.loginId, username: data.data.name});

      if(data.data.loggedIn == true) {
        setLoggedIn(true);
      }
      else setLoggedIn(false);
      //console.log(loginId);
    });
  }, []);

  const switchTheme = () => {
    if(theme == 'light') setTheme('dark');
    else setTheme('light');
  }

  const login = (user) => {
    API.login(user)
    .then(data => {
      setLoggedIn(true);
      setLoginId(data.data.id);
    })
    .catch(err => {
      return err;
    });
  };

  const signup = (user) => {
    API.signup(user)
      .then(data => {
        return data;
      })
      .catch(err => {
        return err;
      });
  };

  const logout = () => {
    API.logout().then(_ => {
      setLoggedIn(false);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme }} >
      <LoginContext.Provider value={{ userData, loggedIn, loginFunc: (user) => login(user), logoutFunc: () => logout(), signupFunc: (user) => signup(user) }}>
        <div style={theme == 'dark' ? { height: "100vh", backgroundColor: "#64616d" } : { height: "100vh", backgroundColor: "#b1abc2" }}>
          <Header switchTheme={() => switchTheme()} />

          <main className="container">
            {loggedIn ? children : (<Home/>)}
          </main>

          <Footer />
        </div>
      </LoginContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
