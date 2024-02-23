import React from 'react';
import styles from './ProjectsOverlay.module.css';

const ProjectsOverlay = () => {
  return (
    <div className={styles.container} style={styles}>
      <ul>
        <li>ravenous</li>
        <li>Colmar Academy</li> 
        <li>Tea Cozy</li>
        <li>Excursion</li>
      </ul>
    </div>  
  );
}

export default ProjectsOverlay;