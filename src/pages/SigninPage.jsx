import "./SigninPage.css"
import { Link } from "react-router-dom"


const SigninPage = () => {

    return(
        <>
       <div className="signup-container">
  <div className="signup-card">

    <h2>Create Account</h2>

    <form className="signup-form">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </form>

    <p className="auth-link">
      Already have an account? <Link to="/login">Login</Link>
    </p>

  </div>
</div>
        </>
    )
}


export default SigninPage