import Navbar from "../components/Navbar";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup-page">
      <Navbar />

      <main className="signup-main">
        <section className="signup-visual">
          <div className="signup-photo"></div>
        </section>

        <section className="signup-panel">
          <div className="signup-content">
            <h1>Create an account</h1>

            <p className="signup-small-link">
              Already have an account? <Link to="/login">Log in</Link>
            </p>

            <form className="signup-form">
              <label>
                User name
                <input type="text" />
              </label>

              <label>
                Email address
                <input type="email" />
              </label>

              <label>
                <div className="password-row">
                  <span>Password</span>
                  <span className="hide-password">⌧ Hide</span>
                </div>
                <input type="password" />
              </label>

              <p className="signup-helper">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>

              <p className="signup-terms">
                By creating an account, you agree to our <br />
                <a>Terms of use</a> and <a>Privacy Policy</a>
              </p>

              <div className="recaptcha-box">
                <span className="check">✓</span>
                <span>I’m not a robot</span>
                <span className="captcha">reCAPTCHA</span>
              </div>

              <button type="button" className="signup-submit">
                Create an account
              </button>
            </form>

            <p className="signup-bottom-link">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;