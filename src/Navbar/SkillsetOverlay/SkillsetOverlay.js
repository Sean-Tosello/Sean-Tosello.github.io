import React, { useState } from 'react';
import styles from  './SkillsetOverlay.module.css';

const SkillsetOverlay = () => {
  const [showSkillText, setShowSkillText] = useState(Array(5).fill(false));

  // const toggleHandler = (index) => {
  //   const updatedShowSkillText = [...showSkillText]; 
  //   updatedShowSkillText[index] = !updatedShowSkillText[index]; 
  //   setShowSkillText(updatedShowSkillText); 
  // };

  const toggleHandler = (index) => {
    const updatedShowSkillText = showSkillText.map((value, i) => {
      if (i === index) {
        return !value; 
      } else {
        return false;
      }
    });
    setShowSkillText(updatedShowSkillText);
  };
  
  return (
    <div className={styles.skillsetOverlay}>
      <ul className={styles.buttonsList}>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.skillsetButton} onClick={() => toggleHandler(0)}><img className={styles.buttonFront} src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript"/></button>
            <h3>JavaScript</h3>
          </div>
          <div className={styles.skillText} style={{ display: showSkillText[0] ? 'flex' : 'none'}}>
            <h4>JavaScript Projects:</h4>
            <ul className={styles.projectList}>
              <li><p> ~ Personal Website</p></li>
              <li><p> ~ ravenous</p></li>
            </ul>
          </div> 
        </li>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.skillsetButton} onClick={() => toggleHandler(1)}><img className={styles.buttonFront} src="https://img.icons8.com/color/48/react-native.png" alt="React"/></button>
            <h3>React</h3> 
          </div>
          <div className={styles.skillText} style={{ display: showSkillText[1] ? 'flex' : 'none'}}>
            <h4>React Projects:</h4>
            <ul className={styles.projectList}> 
              <li><p> ~ Personal Website</p></li>
              <li><p> ~ ravenous</p></li>
            </ul>
          </div> 
        </li>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.skillsetButton} onClick={() => toggleHandler(2)}><img className={styles.buttonFront} src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5"/></button>
            <h3>HTML5</h3>
          </div>
          <div className={styles.skillText} style={{ display: showSkillText[2] ? 'flex' : 'none'}}>
            <h4>HTML5 Projects:</h4>
            <ul className={styles.projectList}> 
              <li><p> ~ Personal Website</p></li>
              <li><p> ~ ravenous</p></li>
              <li><p> ~ Colmar Academy</p></li>
              <li><p> ~ Tea Cozy</p></li>
              <li><p> ~ Excursion</p></li>
            </ul>
          </div> 
        </li>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.skillsetButton} onClick={() => toggleHandler(3)}><img className={styles.buttonFront} src="https://img.icons8.com/color/48/css3.png" alt="css3"/></button>
            <h3>CSS</h3>
          </div>
          <div className={styles.skillText} style={{ display: showSkillText[3] ? 'flex' : 'none'}}>
            <h4>CSS Projects:</h4>
            <ul className={styles.projectList}> 
              <li><p> ~ Personal Website</p></li>
              <li><p> ~ ravenous</p></li>
              <li><p> ~ Colmar Academy</p></li>
              <li><p> ~ Tea Cozy</p></li>
              <li><p> ~ Excursion</p></li>
            </ul>
          </div> 
        </li>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.skillsetButton} onClick={() => toggleHandler(4)}><img className={styles.buttonFront} src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/></button>
            <h3>Python</h3>
          </div>
          <div className={styles.skillText} style={{ display: showSkillText[4] ? 'flex' : 'none'}}> 
            <h4>Python Projects:</h4>
            <ul className={styles.projectList}>
              <li>
                <p>Coming Soon...</p>
              </li>
            </ul>
          </div>  
        </li>
      </ul>
    </div>  
  );
}

export default SkillsetOverlay;