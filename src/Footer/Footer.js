import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>© 2024 Sean Tosello</p>
      <a href="https://icons8.com/"  target="_blank" rel="noopener noreferrer"><p>Icons by: https://icons8.com/</p></a>
    </div>
  )
}

export default Footer;