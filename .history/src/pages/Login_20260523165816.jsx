import "./Auth.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="auth-page">
      <section className="auth-left">
        <div className="auth-image-placeholder"></div>
      </section>

      <section className="auth-right">
        <h1>Log In</h1>

        <form className="auth-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="button" className="auth-main-button">
            Log in
          </button>
        </form>

        <p className="auth-switch-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;