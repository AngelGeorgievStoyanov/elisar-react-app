import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContex';

import './Header.css';


import logo from '../../../src/logo.jpg';

function Header() {

    const { user } = useContext(AuthContext)
    let userNavigation = (
        <div id="user">
            <li>Welcome, {user.email}!</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </div>
    )

    let guestNavigation = (
        <div id="guest">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>

        </div>
    )

    return (
        <header className="header" >
            <nav id="nav">
                <img src={logo} id="logo" alt="Logo" />
                <ul className="navBar">
                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header


