import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Login.css';
import * as authService from '../../services/authService';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContex';


export default function Login() {
const {login}=useContext(AuthContext);

  const navigate = useNavigate();

  const onLoginHandler = (e) => {

    e.preventDefault()

    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    console.log(email)
    let password = formData.get('password');
    console.log(password)

    authService.login(email, password)
      .then((authData) => {
        login(authData)
        console.log('Logged')
        console.log(authData)
        navigate('/')
      })
  }
  return (

    <section className="login-form">
      <div id="login-box">
        <div className="left-box">
          <h1>Login</h1>
          <form onSubmit={onLoginHandler} method="POST">
            <input type="text" className="txtb" name="email" placeholder="Email" />
            <input type="password" className="txtb" name="password" placeholder="Password" />
            <input type="submit" value="Sign Up" name="signup-button" className="signup-btn" />
          </form>
          <small className="text-muted "><Link to="/register">Don't Have An Account? Sign up!</Link></small>
        </div>
        <div className="right-box">
        </div>
      </div>
    </section>
  )

}
