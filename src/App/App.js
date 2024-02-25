import React from 'react';
import styles from './App.css';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import FaviconBar from '../FaviconBar/FaviconBar';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div style={styles.app} className="App">
      <Navbar />
      <Body />
      <FaviconBar />
      <Footer />
    </div>
  );
}

export default App;
