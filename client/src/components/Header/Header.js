import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../utils/ThemeContext';
import LoginContext from '../../utils/LoginContext';

const Header = (props) => {
  const { theme } = useContext(ThemeContext); 
  const { loggedIn, loginFunc, logoutFunc } = useContext(LoginContext);

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <div className="d-flex flex-row">
          <Link className={theme === 'dark' ? `nav-link text-light` : `nav-link text-dark`} to="/">GifChat</Link>
          <span className={theme === 'dark' ? `mt-2 text-light` : `mt-2 text-dark`}>&#9789;</span>
          <div className="form-check form-switch mt-2" style={{marginLeft: '10px'}}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => props.switchTheme()} />
          </div>
          <span className='mt-2'>&#9728;</span>
        </div>
        <div className="d-flex flex-row-reverse" id="navbarNav">
          {loggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/addfriends">Add Friends</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/messages">Messages</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => logoutFunc() }>Logout</Link>
              </li>
            </ul>
          ) : (
            <ul/>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
