import { useContext, useState } from 'react';
import './index.css';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';
import { faBars, faCog, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {navItems} from '../../nav-items';
import NavItem from '../NavItem/index';
import SettingsMenu from '../SettingsMenu';
import IconButton from '../IconButton';
import Brand from '../Brand';
import Welcome from '../Welcome';

const Header = () => {

    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDetailedView, setIsDetailedView] = useState(true);
    // const [time, setTime] = useState(new Date().toLocaleTimeString());

    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);

    const toggleSettingsMenu = () => {
        if (isMobileMenuOpen) { setIsMobileMenuOpen(false) }
        setIsSettingsMenuOpen(!isSettingsMenuOpen);
    }
    const toggleMobileMenu = () => {
        if (isSettingsMenuOpen) { setIsSettingsMenuOpen(false) }
        setIsMobileMenuOpen(!isSettingsMenuOpen);
    }
    const toggleDetailedView = () => {
        setIsDetailedView(!isDetailedView);
    }

    return (
        <header 
            style={{background: theme?.headerBg}}
        >
            <div id="header-left">
                <Brand />
                {isDetailedView && <Welcome />}
            </div>
            <div id="header-right">
                <ul>
                    {navItems.map((i, index) => 
                        <NavItem key={index} path={i.path} label={i.label} />
                    )}

                    <IconButton 
                        click={theme?.updateTheme}
                        icon={theme?.darkMode ? faSun : faMoon}
                        id='theme-toggle'
                    />
                    <IconButton 
                        click={toggleSettingsMenu}
                        icon={faCog}
                        id='settings-menu-toggle'
                    />
                    <IconButton 
                        click={toggleMobileMenu}
                        icon={faBars}
                        id='mobile-menu-toggle'
                    />
                    
                    {isSettingsMenuOpen &&
                        <SettingsMenu isDetailedView={isDetailedView} toggleDetailedView={toggleDetailedView}/>}
                </ul>
            </div>

        </header>
    )
}
export default Header;