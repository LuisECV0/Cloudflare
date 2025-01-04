import React, { Suspense, lazy } from 'react';
import './App.css'
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { AboutMe } from './Components/AboutMe';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
 
  return (
    <div className='App'>
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
