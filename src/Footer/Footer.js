import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Sean Tosello</p>
      <p>Icons by: <a href="https://icons8.com/"  target="_blank" rel="noopener noreferrer">https://icons8.com/</a></p>
    </footer>
  )
}

export default Footer;