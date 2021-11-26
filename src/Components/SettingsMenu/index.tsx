import { useContext } from 'react';
import './index.css';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../context/ThemeContext';
const SettingsMenu = ({ toggleDetailedView, isDetailedView }: any) => {

    const theme = useContext(ThemeContext);

    return (
        <div id="settings-menu-dropdown">
            <ul id="settings-list">
                <li className="settings-item">
                    <p>Dark Mode</p>
                    <Switch checked={theme?.darkMode} onClick={theme?.updateTheme}/>
                </li>
                <li className="settings-item">
                    <p>Detailed View</p>
                    <Switch checked={isDetailedView} onClick={toggleDetailedView}/>
                </li>
            </ul>
        </div>
    )
};
export default SettingsMenu;