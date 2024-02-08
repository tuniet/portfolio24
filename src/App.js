import './App.css';
import Contact from './Contact'
import Hero from './Hero';
import Work from './Work';
import Skills from './Skills';
import React from 'react';
function App() {

  
  return (
    <div className="App" >
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
