import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {navItems} from '../../nav-items';
import NavItem from '../NavItem';
const Header = () => {
    // const [theme, toggleTheme] = useContext(ThemeContext);
    const { darkMode, background, color, updateTheme } = useContext(ThemeContext);
    
    return (
        <header 
            style={{background: background}}
        >
            <Link to="/">
                <h1>Logo</h1>
            </Link>
            <div>
                <ul>
                    {navItems.map(i => <NavItem path={i.path} label={i.label} />)}
                    <li>
                        <button 
                            onClick={updateTheme} 
                            id="theme-toggle"
                        >
                            <FontAwesomeIcon icon={darkMode ? faSun : faMoon}/>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;