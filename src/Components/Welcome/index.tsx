import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';
import './index.css';
const Welcome = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);
      
    const getTimeStamp = () => {
        setTimeout(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000)
        return time;
    }

    return (
        <span id="welcome">
            {process.env.REACT_APP_SECRET || "Welcome"}{user?.username && ' ' + user.username}!<br/>{' ' + getTimeStamp()}
        </span>
    )
};
export default Welcome;