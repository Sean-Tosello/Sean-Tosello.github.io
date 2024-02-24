import React from 'react';
import styles from './FaviconBar.module.css';

const FaviconBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/seantosello/" target="_blank" rel="noopener noreferrer"> 
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" /> 
          </a>
        </li>
        <li>
          <a href="https://github.com/Sean-Tosello" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
          </a>
        </li>
      </ul>

    </nav>

  )
}

export default FaviconBar;