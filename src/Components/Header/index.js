import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;