import './Header.css';


import logo from '../../../src/logo.jpg';

function Header() {
    return (
        <header className="header" >

            <nav id="nav">
            <img src={logo} id="logo" alt="Logo" />
                <ul className="navBar">
                    <li><a href="home">Home</a></li>
                    <li><a href="login">Login</a></li>
                    <li><a href="register">Register</a></li>
                    <li><a href="contacts">Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header


