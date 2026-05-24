import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const result = signup({
      username,
      email,
      password,
    });

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    setErrorMessage("");
    navigate("/create");
  };

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

            <form className="signup-form" onSubmit={handleSignup}>
              <label>
                User name
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                <div className="password-row">
                  <span>Password</span>
                  <span className="hide-password">⌧ Hide</span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <p className="signup-helper">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>

              {errorMessage && (
                <p className="auth-error-message">{errorMessage}</p>
              )}

              <p className="signup-terms">
                By creating an account, you agree to our <br />
                <a>Terms of use</a> and <a>Privacy Policy</a>
              </p>

              <div className="recaptcha-box">
                <span className="check">✓</span>
                <span>I’m not a robot</span>
                <span className="captcha">reCAPTCHA</span>
              </div>

              <button type="submit" className="signup-submit">
                Create an account
              </button>
            </form>

            <p className="signup-bottom-link">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SignUp;