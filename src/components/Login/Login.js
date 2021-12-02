
import './Login.css';
import * as authService from '../../services/authService'
export default function Login(e) {

  const onLoginHandler = (e) => {


    e.preventDefault()
    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    console.log(email)
    let password = formData.get('password');
    console.log(password)

    authService.login(email, password)
      .then((authData) => {
        console.log('Logged')
        console.log(authData)
      })
  }
  return (

    <section className="login-form">
      <div id="login-box">
        <div className="left-box">
          <h1>Login</h1>
          <form onSubmit={onLoginHandler} method="POST">
            <input type="text" className="txtb" name="email" placeholder="Email" />
            <input type="text" className="txtb" name="password" placeholder="Confirm Password" />
            <input type="submit" value="Sign Up" name="signup-button" className="signup-btn" />
          </form>
        </div>
        <div className="right-box">
        </div>
      </div>
    </section>
  )

}
