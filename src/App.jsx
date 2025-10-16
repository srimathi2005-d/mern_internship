import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import State from './hooks/State';

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>  
        <Route path='/contact' element={<Contact />}/>  
        <Route path='/state' element={<State />}/>  
      </Routes>
    </>
  );
};

export default App