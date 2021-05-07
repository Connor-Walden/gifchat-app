import React, { useContext } from 'react';
import ThemeContext from '../../utils/ThemeContext';

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <footer className={`footer bg-${theme}`}>
      <div className="container text-center">
        <span className={theme === 'dark' ? `text-light` : 'text-dark'}>&copy; Connor Walden 2021</span>
      </div>
    </footer>
  );
}

export default Footer;
