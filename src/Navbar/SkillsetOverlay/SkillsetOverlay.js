import React, { useState } from 'react';
import styles from  './SkillsetOverlay.module.css';

const SkillsetOverlay = () => {
  const [showSkillText, setShowSkillText] = useState(Array(5).fill(false));

  const toggleHandler = (index) => {
    const updatedShowSkillText = [...showSkillText]; 
    updatedShowSkillText[index] = !updatedShowSkillText[index]; 
    setShowSkillText(updatedShowSkillText); 
  };
  
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <button className={styles.skillsetButton} onClick={() => toggleHandler(0)}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript"/></button>
          <div className={styles.skillText} style={{ display: showSkillText[0] ? 'flex' : 'none'}}>
            <h3>JavaScript</h3>
            <h4>JavaScript Projects:</h4>
            <ul> 
              <li>Personal Website</li>
              <li>ravenous</li>
            </ul>
          </div> 
        </li>
        <li>
          <button className={styles.skillsetButton} onClick={() => toggleHandler(1)}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="React"/></button> 
          <div className={styles.skillText} style={{ display: showSkillText[1] ? 'flex' : 'none'}}>
            <h3>React</h3>
            <h4>React Projects:</h4>
            <ul> 
              <li>Personal Website</li>
              <li>ravenous</li>
            </ul>
          </div> 
        </li>
        <li>
          <button className={styles.skillsetButton} onClick={() => toggleHandler(2)}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5"/></button>
          <div className={styles.skillText} style={{ display: showSkillText[2] ? 'flex' : 'none'}}>
            <h3>HTML5</h3>
            <h4>HTML5 Projects:</h4>
            <ul> 
              <li>Personal Website</li>
              <li>ravenous</li>
              <li>Colmar Academy</li>
              <li>Tea Cozy</li>
              <li>Excursion</li>
            </ul>
          </div> 
        </li>
        <li>
          <button className={styles.skillsetButton} onClick={() => toggleHandler(3)}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/></button>
          <div className={styles.skillText} style={{ display: showSkillText[3] ? 'flex' : 'none'}}>
            <h3>CSS</h3>
            <h4>CSS Projects:</h4>
            <ul> 
              <li>Personal Website</li>
              <li>ravenous</li>
              <li>Colmar Academy</li>
              <li>Tea Cozy</li>
              <li>Excursion</li>
            </ul>
          </div> 
        </li>
        <li>
          <button className={styles.skillsetButton} onClick={() => toggleHandler(4)}><img className={styles.buttonFront} width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/></button>
          <div className={styles.skillText} style={{ display: showSkillText[4] ? 'flex' : 'none'}}>
            <h3>Python</h3>
            <h4>Python Projects: </h4>
            <ul>
              <li>
                Coming Soon...
              </li>
            </ul>
          </div>  
        </li>
      </ul>
    </div>  
  );
}

export default SkillsetOverlay;