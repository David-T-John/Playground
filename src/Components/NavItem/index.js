import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
const NavItem = props => {
    return <li><Link to={props.path}>{props.label}</Link></li>
}
export default NavItem;