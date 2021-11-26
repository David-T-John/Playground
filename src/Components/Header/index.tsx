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
import Nav from '../Nav';
import MobileMenu from '../MobileMenu';

const Header = () => {

    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDetailedView, setIsDetailedView] = useState(true);

    const theme = useContext(ThemeContext);

    const toggleSettingsMenu = () => {
        if (isMobileMenuOpen) { setIsMobileMenuOpen(false) }
        setIsSettingsMenuOpen(!isSettingsMenuOpen);
    }
    const toggleMobileMenu = () => {
        if (isSettingsMenuOpen) { setIsSettingsMenuOpen(false) }
        setIsMobileMenuOpen(!isMobileMenuOpen);
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
                    <Nav />
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
                    {isMobileMenuOpen &&
                    <MobileMenu click={toggleMobileMenu} />}
                </ul>
            </div>

        </header>
    )
}
export default Header;