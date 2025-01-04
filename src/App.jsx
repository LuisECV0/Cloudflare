import React, { Suspense, lazy } from 'react';
import './App.css'
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { AboutMe } from './Components/AboutMe';

function App() {
 
  return (
    <div className='App'>
      <NavBar />
      <AboutMe />

      <Footer />
    </div>
  )
}

export default App
