import { Link } from 'react-router-dom';

import './Header.css';


import logo from '../../../src/logo.jpg';

function Header() {
    return (
        <header className="header" >
            <nav id="nav">
                <img src={logo} id="logo" alt="Logo" />
                <ul className="navBar">
                    <div id="user">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </div>
                    <div id="guest">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header


