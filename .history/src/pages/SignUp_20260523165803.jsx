import "./Auth.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <main className="auth-page">
      <section className="auth-left">
        <div className="auth-image-placeholder"></div>
      </section>

      <section className="auth-right">
        <h1>Create Account</h1>

        <form className="auth-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="button" className="auth-main-button">
            Sign up
          </button>
        </form>

        <p className="auth-switch-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}

export default SignUp;