import React from 'react';
import styles from './Navbar.module.css';
import NavbarButton from './NavbarButton';
import AboutOverlay from './AboutOverlay/AboutOverlay';
import ProjectsOverlay from './ProjectsOverlay/ProjectsOverlay';
import Resume from './SeanToselloResume.pdf';


function Navbar() {
  const openPDF = () => {
    const pdfPath = Resume;
    window.open(pdfPath, '_blank');
  };
  
  return (
    <nav className={styles.navbar}>
      <NavbarButton buttonText='About' overlayText={<AboutOverlay />} />
      <NavbarButton buttonText='Projects' overlayText={<ProjectsOverlay />} />
      <button className={styles.navbarButton} onClick={openPDF}>Resume</button>
    </nav>
  )
}

export default Navbar;