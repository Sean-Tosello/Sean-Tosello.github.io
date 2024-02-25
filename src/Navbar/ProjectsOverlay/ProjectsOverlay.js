import React from 'react';
import styles from './ProjectsOverlay.module.css';

const ProjectsOverlay = () => {
  return (
    <div className={styles.container} style={styles}>
      <ul>
        <li><button><span className={styles.buttonFront}>ravenous</span></button></li>
        <li><button><span className={styles.buttonFront}>Colmar Academy</span></button></li> 
        <li><button><span className={styles.buttonFront}>Tea Cozy</span></button></li>
        <li><button><span className={styles.buttonFront}>Excursion</span></button></li>
      </ul>
    </div>  
  );
}

export default ProjectsOverlay;