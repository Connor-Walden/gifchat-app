import React, { useEffect, useState } from 'react';
import ThemeContext from '../../utils/ThemeContext';
import LoginContext from '../../utils/LoginContext';
import API from '../../utils/API';

import Header from '../Header/Header';

import Footer from '../Footer/Footer';

const App = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    API.getLoggedIn().then((data) => {
      if(data.data.logged_in == true) setLoggedIn(true);
      else setLoggedIn(false);
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
      return data;
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
      <LoginContext.Provider value={{ loggedIn, loginFunc: (user) => login(user), logoutFunc: () => logout(), signupFunc: (user) => signup(user) }}>
        <div style={theme == 'dark' ? { height: "100vh", backgroundColor: "#64616d" } : { height: "100vh", backgroundColor: "#b1abc2" }}>
          <Header switchTheme={() => switchTheme()} />

          <main className="container">
            {children}
          </main>

          <Footer />
        </div>
      </LoginContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
