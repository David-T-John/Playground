import React, { useState, FC } from 'react';
import { UserContextType } from '../types';

const defaultContext = {
    username: '',
    email: '',
    isLoggedIn: false,
    updateLogInStatus: ()=>{},
    updateUsername: ()=>{},
}

export const UserContext = React.createContext<UserContextType>(defaultContext);

export const UserContextProvider: FC = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    
    const updateIsLoggedIn = () => {
        setIsLoggedIn(prevState => !prevState);
    };
    const updateUsername = (username: string) => {
        setUsername(username);
    };
    
    const user = {
        username: username || '',
        email: '',
        isLoggedIn: isLoggedIn,
        updateLogInStatus: ()=>{updateIsLoggedIn()},
        updateUsername: (u: string)=>{updateUsername(u)}
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}