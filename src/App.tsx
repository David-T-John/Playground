import './App.css';
import Home from './Components/Home/index';
import Login from './Components/Login/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserContextProvider } from './context/UserContext';
import Header from './Components/Header';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
