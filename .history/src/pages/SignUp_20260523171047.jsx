import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <main className="signup-page">
      <section className="signup-left">
        <div className="signup-image-box"></div>
      </section>

      <section className="signup-right">
        <h1 className="signup-title">Create Account</h1>

        <form className="signup-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />
          <input type="email" placeholder="Email" />

          <button type="button" className="signup-button">
            Sign up
          </button>
        </form>

        <p className="signup-login-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}

export default SignUp;