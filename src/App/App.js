import React from 'react';
import styles from './App.css';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import FaviconBar from '../FaviconBar/FaviconBar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <FaviconBar />
    </div>
  );
}

export default App;
