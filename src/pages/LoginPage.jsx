import "./LoginPage.css"
import { Link } from "react-router-dom"


const LoginPage = () => {

    return(
        <>
        <div className="login-container">
  <div className="login-card">

    <h2>Login</h2>

    <form className="login-form">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>

    <p className="auth-link">
      Don't have an account? <Link to="/signin">Sign Up</Link>
    </p>

  </div>
</div>
        </>
    )
}


export default LoginPage