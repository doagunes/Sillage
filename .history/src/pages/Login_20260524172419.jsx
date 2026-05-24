import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const result = login(email, password);

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    setErrorMessage("");
    navigate("/create");
  };

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

            <form className="login-form" onSubmit={handleLogin}>
              <label>
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                <div className="login-password-row">
                  <span>Password</span>
                  <span className="login-hide">⌧ Hide</span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              {errorMessage && (
                <p className="auth-error-message">{errorMessage}</p>
              )}

              <Link to="#" className="forgot-password">
                Forget password?
              </Link>

              <button type="submit" className="login-submit">
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

      <Footer />
    </div>
  );
}

export default Login;