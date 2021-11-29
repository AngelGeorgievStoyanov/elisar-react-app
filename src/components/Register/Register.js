import './Register.css';
import { Link } from 'react-router-dom';

export default function Register() {

    return (
        <section className="loginForm">
            <div id="login-box">
                <div className="left-box">
                    <h1>Register</h1>
                    <form action="#" method="post">
                        <input type="text" className="txtb" placeholder="Username" />
                        <input type="text" className="txtb" placeholder="Email" />
                        <input type="text" className="txtb" placeholder="Password" />
                        <input type="text" className="txtb" placeholder="Confirm Password" />
                        <input type="submit" value="Sign Up" name="signup-button" className="signup-btn" />
                    </form>
                    <small class="text-muted "><Link to="/login">Already Have An Account?</Link></small>
                </div>
                <div className="right-box">
                </div>
            </div>
        </section>
    )

}