import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const iconUrl = "https://icons8.com/";

  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>© 2024 Sean Tosello</p>
      </div>
      <div className={styles.iconCopyright}>
        <a href={iconUrl}  target="_blank" rel="noopener noreferrer"><p>Icons by: https://icons8.com/</p></a>
      </div>
      
    </div>
  )
}

export default Footer;