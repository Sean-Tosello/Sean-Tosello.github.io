import React from 'react';
import styles from './ProjectsOverlay.module.css';

const ProjectsOverlay = () => {
  return (
    <div className={styles.container} style={styles}>
      <ul>
        <li><button>ravenous</button></li>
        <li><button>Colmar Academy</button></li> 
        <li><button>Tea Cozy</button></li>
        <li><button>Excursion</button></li>
      </ul>
    </div>  
  );
}

export default ProjectsOverlay;