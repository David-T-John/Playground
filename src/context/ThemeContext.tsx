import React, { useState, FC } from 'react';
import {ThemeContextType} from '../types';

const defaultContext = {
    darkMode: false,
    color: "",  
    headerBg: "",
    pageBg: "",
    buttonHoverBg: "",
    updateTheme: () => {},
}
export const ThemeContext = React.createContext<ThemeContextType>(defaultContext);

export const ThemeContextProvider: FC = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const themeStyles = {
        darkMode: isDarkMode,
        color: isDarkMode ? "lightgray" : "#333",  
        headerBg: isDarkMode ? "#333" : "blue",
        pageBg: isDarkMode ? "#555" : "lightgray",
        buttonHoverBg: isDarkMode ? "#444" : "rgb(45, 45, 255)",
        updateTheme: () => toggleTheme(),
    }
    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState);
    }
    
    return (
        <ThemeContext.Provider value={themeStyles}>
            {children}
        </ThemeContext.Provider>
    )
}