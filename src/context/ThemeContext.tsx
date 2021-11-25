import React, { useState, FC } from 'react';
import {ThemeContextType} from '../types';


export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeContextProvider: FC = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const themeStyles = {
        background: isDarkMode ? "#333" : "blue",
        color: isDarkMode ? "white" : "black",  
        updateTheme: () => {toggleTheme()},
        darkMode: isDarkMode
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

// export const themes = {
//     light:{
//         label: "Light",
//         background: "#blueviolet",
//     },
//     dark:{
//         label: "Dark",
//         background: "#333",
//     },    
// }
// export const ThemeContext = React.createContext({});
