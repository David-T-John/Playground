import './index.css';
import { navItems } from '../../nav-items';
import MobileMenuItem from '../MobileMenuItem/index';
const MobileMenu = ({click}: any) => {
    return (
        <div id="mobile-menu">
            <ul id="mobile-menu-list">
            {navItems.map((i, index) => 
                <MobileMenuItem key={index} path={i.path} label={i.label} click={click} />
            )}
            </ul>
        </div>
    )
};
export default MobileMenu;