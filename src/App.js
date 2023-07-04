// App.js

import React from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App () {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
