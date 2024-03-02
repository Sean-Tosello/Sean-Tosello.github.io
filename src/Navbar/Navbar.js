import React, { useState } from 'react';
import styles from './Navbar.module.css';
import AboutOverlay from './AboutOverlay/AboutOverlay';
import SkillsetOverlay from './SkillsetOverlay/SkillsetOverlay';
import ProjectsOverlay from './ProjectsOverlay/ProjectsOverlay';
import Resume from './SeanToselloResume.pdf';

function Navbar() {
  const openPDF = () => {
    const pdfPath = Resume;
    window.open(pdfPath, '_blank');
  };

  const [showOverlay, setShowOverlay] = useState(Array(3).fill(false));
  const toggleOverlay = (index) => {
    const updatedShowOverlay = showOverlay.map((value, i) => {
      if (i === index) {
        return !value; 
      } else {
        return false;
      }
    });
    setShowOverlay(updatedShowOverlay);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.buttonBar}>
        <button className={styles.navbarButton} onClick={() => toggleOverlay(0)}>
          <span className={styles.buttonFront}>
            ABOUT
          </span>
        </button>
        <button className={styles.navbarButton} onClick={() => toggleOverlay(1)}>
          <span className={styles.buttonFront}>
            SKILLSET
          </span>
        </button>
        <button className={styles.navbarButton} onClick={() => toggleOverlay(2)}>
          <span className={styles.buttonFront}>
            PROJECTS
          </span>
        </button>
        <button className={styles.navbarButton} onClick={openPDF} rel="noopener noreferrer" >
          <span className={styles.buttonFront}>
            RESUME
          </span>
        </button>
      </div>
      <div className={styles.overlayContainer}>
        <div style={{ display: showOverlay[0] ? 'flex' : 'none'}}>
          <AboutOverlay />
        </div>
        <div style={{ display: showOverlay[1] ? 'flex' : 'none'}}>
          <SkillsetOverlay />
        </div>
        <div style={{ display: showOverlay[2] ? 'flex' : 'none'}}>
          <ProjectsOverlay />
        </div>
      </div>
    </nav>
  )
}


export default Navbar;