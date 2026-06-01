import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import signupVisual from "../assets/signup/signup-visual.svg";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [robotChecked, setRobotChecked] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const result = await signup({
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
          <img src={signupVisual} alt="Sillage perfume bottle" />
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

                  <button
                    type="button"
                    className="hide-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <input
                  type={showPassword ? "text" : "password"}
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

              <button
                type="button"
                className={`recaptcha-box ${robotChecked ? "checked" : ""}`}
                onClick={() => setRobotChecked(!robotChecked)}
              >
                <span className="check">{robotChecked ? "✓" : ""}</span>
                <span>I’m not a robot</span>
                <span className="captcha">reCAPTCHA</span>
              </button>

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