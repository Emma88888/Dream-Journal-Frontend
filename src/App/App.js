import './App.css';
import { useState } from 'react';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import NewDreamText from '../NewDreams/NewDreamText';
import NewDreamSpeech from '../NewDreams/NewDreamSpeech';
import Resources from '../Resources/Resources';
import ShowAllDreams from '../AllDreams/AllDreams';
import EditDreamText from '../Dream/Dream';

function App() {

  return (
    <HashRouter>
      <div className='app-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newDreamText" element={<NewDreamText/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/newDreamSpeech" element={<NewDreamSpeech/>}/>
        <Route path="/allDreams" element={<ShowAllDreams/>}/>
        <Route path="/dream/:id" element={<EditDreamText/>}/>
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
