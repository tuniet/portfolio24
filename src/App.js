import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Contact from './Contact'
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import React, {useState, useEffect} from 'react';
function App() {

  
  return (
    <ChakraProvider>
    <div className="App" >
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
    </ChakraProvider>
  );
}

export default App;
