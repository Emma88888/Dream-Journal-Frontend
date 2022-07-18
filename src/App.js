import './App.css';
import { useState } from 'react';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import NewDream from './NewDreamText';
import Resources from './Resources';

function App() {

  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newDream" element={<NewDream/>}/>
        <Route path="/resources" element={<Resources/>}/>

      </Routes>
    </HashRouter>
  );
}

export default App;
