import React from 'react';
// import './App.css';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import FaviconBar from '../FaviconBar/FaviconBar';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <FaviconBar />
      <Footer />
    </div>
  );
}

export default App;
