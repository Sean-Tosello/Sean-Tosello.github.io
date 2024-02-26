import React from 'react';
import styles from  './SkillsetOverlay.module.css';

const SkillsetOverlay = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <button className={styles.skillsetButton}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript"/></button> 
        </li>
        <li>
          <button className={styles.skillsetButton}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="React"/></button> 
        </li>
        <li>
          <button className={styles.skillsetButton}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/></button>
        </li>
        <li>
          <button className={styles.skillsetButton}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/></button>
        </li>
        <li>
          <button className={styles.skillsetButton}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/></button> 
        </li>
      </ul>
    </div>  
  );
}

export default SkillsetOverlay;