import React from 'react';
import styles from './Navbar.module.css';

function Overlay({ show, text }) {
  return <div style={{ display: show ? 'flex' : 'none', ...styles.Overlay }}>{text}</div>;
}

export default Overlay;