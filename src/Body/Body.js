import React from 'react';
import styles from './Body.module.css';

const Body = () => {
  return (
    <div className={styles.bodyContainer}> 
        <div className={styles.header}>
          <h1>Sean Tosello</h1>
          <h2> - Front End Engineer - </h2>
        </div>
        <div className={styles.body}>
          <h4>🛠 Innovative Problem Solver by Lifestyle 🛠 | ⚙ Front End Engineer by Trade ⚙</h4>
          <h4>💻 JavaScript | React | HTML & CSS | Python | Front-End Apps with API Integration 💻</h4>
          <h4><span className={styles.grey}>🤝</span> 18+ years of experience bringing Innovation, Enthusiasm, and Excellence to the workplace <span className={styles.grey}>🤝</span></h4>
        </div>
        <div className={styles.bodyMobile}>
          <h4>🛠 Innovative Problem Solver by Lifestyle 🛠</h4>
          <h4>⚙ Front End Engineer by Trade ⚙</h4>
          <h4>💻 JavaScript | React | HTML & CSS | Python 💻</h4>
          <h4><span className={styles.grey}>🌐</span> Front-End Apps with API Integration <span className={styles.grey}>🌐</span></h4>
          <h4><span className={styles.grey}>🤝</span> 18+ years of experience bringing: <span className={styles.grey}>🤝</span></h4>
          <h4><span className={styles.grey}>🧱</span> Innovation | Enthusiasm | Excellence <span className={styles.grey}>🧱</span></h4>
        </div>
    </div>
  );
}

export default Body;