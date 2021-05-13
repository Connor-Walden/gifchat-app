import React, { useContext } from 'react';
import ThemeContext from '../../utils/ThemeContext';

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <footer className={`footer bg-${theme}`} style={{position: 'fixed', bottom: '0'}}>
      <div className="container text-center">
        <span className={theme === 'dark' ? `text-light` : 'text-dark'}>Made with &#9829; by Connor Walden</span>
      </div>
    </footer>
  );
}

export default Footer;
