import { useContext, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ThemeContextType, UserContextType } from '../../types';
import { ThemeContext } from '../../context/ThemeContext';

const NavItem = (props: any) => {

    const [hover, setHover] = useState(false);

    const { isLoggedIn }: UserContextType = useContext(UserContext);
    const { buttonHoverBg }: ThemeContextType = useContext(ThemeContext);

    if (isLoggedIn && props.label === 'Login') {return null}
    if (!isLoggedIn && props.label === 'Logout') {return null}
    return (
    <li 
        className="nav-item" 
        onMouseOver={()=>setHover(true)} 
        onMouseOut={()=>setHover(false)}
        style={{backgroundColor: hover ? buttonHoverBg : ''}}
    >
        <Link to={props.path}>{props.label}</Link>
    </li>
    )
}
export default NavItem;