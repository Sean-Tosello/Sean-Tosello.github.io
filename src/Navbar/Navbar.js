import React from 'react';
import styles from './Navbar.module.css';
import NavbarButton from './NavbarButton';
import AboutOverlay from '../AboutOverlay/AboutOverlay';
import ProjectsOverlay from '../ProjectsOverlay/ProjectsOverlay';
import { Document } from 'react-pdf';


function Navbar() {
  const openPDF = () => {
    const pdfPath = './SeanToselloResume.pdf';
    window.open(pdfPath, '_blank');
  };
  
  return (
    <nav>
      <NavbarButton buttonText='About' overlayText={<AboutOverlay />} />
      <NavbarButton buttonText='Projects' overlayText={<ProjectsOverlay />} />
      <button onClick={openPDF}>Resume</button>
    </nav>
  )
}

export default Navbar;