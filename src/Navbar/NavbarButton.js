import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Overlay from './Overlay';

function NavbarButton({ buttonText, overlayText }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div>
      <button className={styles.navbarButton} onClick={toggleOverlay}>
        <span className={styles.buttonFront}>
          {buttonText}
        </span>
      </button>
      <Overlay show={showOverlay} text={overlayText} />
    </div>
  );
}

export default NavbarButton;