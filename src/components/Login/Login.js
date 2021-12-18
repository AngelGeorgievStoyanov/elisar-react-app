import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useContext } from 'react';
import { useAuthContext } from '../contexts/AuthContex';
import { useNotificationContext, types } from '../contexts/NotificationContext';
import './Login.css';

export default function Login() {
  const { login } = useAuthContext();

  const navigate = useNavigate();

  const { addNotification } = useNotificationContext();

  const onLoginHandler = (e) => {

    e.preventDefault()

    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');

    authService.login(email, password)
      .then((authData) => {
        login(authData);
        addNotification('You logged in successfully', types.success);
        navigate('/')
      })
      .catch(err=>{
        console.log(err)
      
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
            <p></p>
            <input type="submit" value="Sign Up" name="signup-button" className="signup-btn" />
          </form>
          <small className="text-muted "><Link to="/register">Don't Have An Account? Sign up!</Link></small>
        </div>
        <div className="login-right-box">
        </div>
      </div>
   
    </section>
  )

}
