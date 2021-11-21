import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeContext, themes } from '../src/context/themeContext';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(prev => ( prev === themes.light ? themes.dark : themes.light ));
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
