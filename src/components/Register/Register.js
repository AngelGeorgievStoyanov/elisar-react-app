import './Register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import * as authService from '../../services/authService';
import { useAuthContext } from '../contexts/AuthContex';

export default function Register() {


    const navigate = useNavigate();
    const { login } = useAuthContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();
        let { username, email, password } = Object.fromEntries(new FormData(e.currentTarget))
        console.log(username, email, password, '---register--')
        authService.register(username, email, password)
            .then(authData => {
                login(authData)

                navigate('/')
            })


    }


    return (
        <section className="register-form">
            <div id="register-box">
                <div className="left-box">
                    <h1>Register</h1>
                    <form method="POST" onSubmit={registerSubmitHandler}>
                        <input type="text" name="username" className="txtb" placeholder="Username" />
                        <input type="text" name="email" className="txtb" placeholder="Email" />
                        <input type="password" name="password" className="txtb" placeholder="Password" />
                        <input type="password" name="confirm-pass" className="txtb" placeholder="Confirm Password" />
                        <input type="submit" value="Sign Up" name="signup-button" className="signup-btn" />
                    </form>
                    <small className="text-muted "><Link to="/login">Already Have An Account?</Link></small>
                </div>
                <div className="register-right-box">
                </div>
            </div>
        </section>
    )

}