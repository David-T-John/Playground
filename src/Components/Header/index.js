import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { ThemeContext } from '../../context/themeContext';
const Header = () => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    
    return (
        <header style={{background: theme.background}}>
            <Link to="/">
                <h1>Logo</h1>
            </Link>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <button onClick={toggleTheme}>Toggle Theme</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;