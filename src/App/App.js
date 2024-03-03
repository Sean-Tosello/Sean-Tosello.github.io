import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Body from '../Body/Body';
import IconBar from '../IconBar/IconBar';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <IconBar />
      <Footer />
    </div>
  );
}

export default App;
