import Navbar from "../components/Navbar";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <Navbar />

      <main className="login-main">
        <section className="login-hero-image">
          <div className="login-card">
            <h1>Log in</h1>

            <p className="login-signup-text">
              New to Sillage? <Link to="/signup">Sign up for free</Link>
            </p>

            <form className="login-form">
              <label>
                Email address
                <input type="email" />
              </label>

              <label>
                <div className="login-password-row">
                  <span>Password</span>
                  <span className="login-hide">⌧ Hide</span>
                </div>
                <input type="password" />
              </label>

              <Link to="#" className="forgot-password">
                Forget password?
              </Link>

              <button type="button" className="login-submit">
                Log in
              </button>

              <div className="social-row">
                <button type="button">f</button>
                <button type="button">●</button>
                <button type="button">G</button>
                <button type="button">t</button>
              </div>

              <button type="button" className="sso-button">
                ▣ Log in with SSO
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;