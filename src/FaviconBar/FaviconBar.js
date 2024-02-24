import React from 'react';
import styles from './FaviconBar.module.css';

const FaviconBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/sean-tosello/" target="_blank" rel="noopener noreferrer"> 
            <img width="48" height="48" src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" /> 
          </a>
        </li>
        <li>
          <a href="https://github.com/Sean-Tosello" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/sf-black-filled/64/github.png" alt="GitHub"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/sean.tosello" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tosellofellow/" target="_blank" rel="noopener noreferrer">
            <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="Instagram" />
          </a>
        </li>
      </ul>
    </nav>

  )
}

export default FaviconBar;