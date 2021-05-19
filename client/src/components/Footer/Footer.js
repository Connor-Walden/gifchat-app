import React, { useContext } from 'react';
import ThemeContext from '../../utils/ThemeContext';

const styles = {
  html: {
    position: 'relative',
    minHeight: '100%'
  },
  body: {
    marginBottom: '60px' /* Margin bottom by footer height */
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60px', /* Set the fixed height of the footer here */
    lineHeight: '60px', /* Vertically center the text there */
    backgroundColor: '#f5f5f5'
  }
}

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <footer className={`footer bg-${theme}`} style={{position: 'fixed', bottom: '0', ...styles.footer}}>
      <div className="container text-center">
        <span className={theme === 'dark' ? `text-light` : 'text-dark'}>Made with &#9829; by Connor Walden</span>
      </div>
    </footer>
  );
}

export default Footer;
