import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';

function App() {
  const [dream, setDream] = useState([]);


  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        

      </Routes>
    </HashRouter>
  );
}

export default App;
