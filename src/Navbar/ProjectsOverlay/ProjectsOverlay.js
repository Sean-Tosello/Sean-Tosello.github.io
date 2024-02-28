import React, { useState } from 'react';
import styles from './ProjectsOverlay.module.css';
import profileImg from '../../images/profileSquare.jpg';
import ravenousImg from '../../images/ravenous.jpg';
import colmarImg from '../../images/colmaracademy.png';
import teaImg from '../../images/teacozy.jpg';
import excursionImg from '../../images/excursion.jpg';

const ProjectsOverlay = () => {
  const [showProjectText, setShowProjectText] = useState(Array(5).fill(false));

  const toggleHandler = (index) => {
    const updatedShowProjectText = showProjectText.map((value, i) => {
    if (i === index) {
      return !value; 
    } else {
      return false;
    }
    });
    setShowProjectText(updatedShowProjectText);
  };
  

  return (
    <div className={styles.projectsOverlay}>
      <ul className={styles.buttonsList}>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.projectButton} onClick={() => toggleHandler(0)}><img className={styles.buttonFront} src={profileImg} alt="profile"/></button>
            <h3>Personal Website</h3>
          </div>
          <div className={styles.projectText} style={{ display: showProjectText[0] ? 'flex' : 'none'}}>
            <div className={styles.projectDescription}>
              <h4>Project Description:</h4>
              <p>This website was created using React, Javascript, HTML and CSS. It is a single page application that showcases my skills and projects.</p>
            </div>
            <ul className={styles.featuresList}>
              <li><h4>Features:</h4></li>
              <li><p>Languages: JavaScript, HTML, CSS</p></li>
              <li><p>React Library</p></li>
              <li><p>React Components</p></li>
              <li><p>Original Custom Design</p></li>
            </ul>
          </div> 
        </li>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.projectButton} onClick={() => toggleHandler(1)}><img className={styles.buttonFront} src={ravenousImg} alt="ravenous"/></button>
            <h3>ravenous</h3> 
          </div>
          <div className={styles.projectText} style={{ display: showProjectText[1] ? 'flex' : 'none'}}>
            <div className={styles.projectDescription}>
              <h4>Project Description:</h4>
              <p>This website was created using React, Javascript, HTML and CSS. It is a single page application that showcases my skills and projects.</p>
            </div>
            <ul className={styles.featuresList}> 
              <li><h4>Features:</h4></li>
              <li><p>Languages: JavaScript, HTML, CSS</p></li>
              <li><p>React Library</p></li>
              <li><p>React Components</p></li>
              <li><p>Original Custom Design</p></li>
              <li><p>React Hook with Yelp API</p></li>
            </ul>
          </div> 
        </li>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.projectButton} onClick={() => toggleHandler(2)}><img className={styles.buttonFront} src={colmarImg} alt="Colmar Academy"/></button>
            <h3>Colmar Academy</h3>
          </div>
          <div className={styles.projectText} style={{ display: showProjectText[2] ? 'flex' : 'none'}}>
            <div className={styles.projectDescription}>
              <h4>Project Description:</h4>
              <p>For the project, I was provided with a mockup and resources and was tasked with building a responsive webpage and publishing it.</p>
            </div>
            <ul className={styles.featuresList}> 
              <li><h4>Features:</h4></li>
              <li><p>Languages: HTML, CSS</p></li>
              <li><p>Responsive Design</p></li>
              <li><p>Original Custom Design</p></li>
            </ul>
          </div> 
        </li>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.projectButton} onClick={() => toggleHandler(3)}><img className={styles.buttonFront} src={teaImg} alt="Tea Cozy"/></button>
            <h3>Tea Cozy</h3>
          </div>
          <div className={styles.projectText} style={{ display: showProjectText[3] ? 'flex' : 'none'}}>
            <div className={styles.projectDescription}>
              <h4>Project Description:</h4>
              <p>For the project, I was provided with a mockup and resources and was tasked with building a responsive webpage.</p>
            </div>
            <ul className={styles.featuresList}> 
              <li><h4>Features:</h4></li>
              <li><p>Languages: HTML, CSS</p></li>
              <li><p>Original Custom Design</p></li>
            </ul>
          </div> 
        </li>
        <li className={styles.buttonWithText}>
          <div className={styles.buttonBox}>
            <button className={styles.projectButton} onClick={() => toggleHandler(4)}><img className={styles.buttonFront} src={excursionImg} alt="Excursion"/></button>
            <h3>Excursion</h3>
          </div>
          <div className={styles.projectText} style={{ display: showProjectText[4] ? 'flex' : 'none'}}> 
            <div className={styles.projectDescription}>
              <h4>Project Description:</h4>
              <p>For the project, I was provided with a mockup and resources and was tasked with building a responsive webpage.</p>
            </div>
            <ul className={styles.featuresList}> 
              <li><h4>Features:</h4></li>
              <li><p>Languages: HTML, CSS</p></li>
            </ul>
          </div>  
        </li>
      </ul>
    </div>  
  );
}

export default ProjectsOverlay;