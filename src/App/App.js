import './App.css';
import { useState } from 'react';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import NewDreamText from '../NewDreams/NewDreamText';
// import NewDreamSpeech from './NewDreamSpeech';
import Resources from '../Resources/Resources';

function App() {

  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newDreamText" element={<NewDreamText/>}/>
        <Route path="/resources" element={<Resources/>}/>
        {/* <Route path="/newDreamSpeech" element={<NewDreamSpeech/>}/> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
