import React from 'react';
import styles from './Body.module.css';

const Body = () => {
  return (
    <div className={styles.bodyContainer}> 
        <div className={styles.header}>
          <h1>Sean Tosello</h1>
          <h2>Front End Engineer</h2>
        </div>
        <div className={styles.body}>
          <h4>🛠 Innovative Problem Solver by Lifestyle 🛠 | ⚙ Front End Engineer by Trade ⚙</h4>
          <h4>💻 JavaScript | React | HTML & CSS | Python | Front-End Apps with API Integration 💻</h4>
          <h4>🤝 18+ years of experience bringing Innovation, Enthusiasm, and Excellence to the workplace 🤝</h4>
        </div>
    </div>
  );
}

export default Body;