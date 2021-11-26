import './index.css';
import NavItem from '../NavItem';
import { navItems } from '../../nav-items';
const Nav = () => {
    return (
        <>
            {navItems.map((i, index) => 
                <NavItem key={index} path={i.path} label={i.label} />
            )}
        </>
    )
};
export default Nav;