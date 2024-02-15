import './App.css';
import Contact from './Contact'
import Hero from './Hero';
import Work from './Work';
import React from 'react';
import WorkCardExp from './WorkCardExp'
function App() {
  return (
    <div className="App" >
      <Hero />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
