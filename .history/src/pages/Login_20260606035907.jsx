import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import loginVisual from "../assets/login/login-visual.svg";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await login(email, password);

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    setErrorMessage("");
    navigate("/create");
  };

  

  return (
    <div className="login-page page-enter">
      
    </div>
    <div className="login-page">
      <Navbar />

      <main className="login-main">
        <section className="login-hero-image">
          <img src={loginVisual} alt="Sillage perfume bottles" />

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

                  <button
                    type="button"
                    className="login-hide"
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

              {errorMessage && (
                <p className="auth-error-message">{errorMessage}</p>
              )}

              <Link to="#" className="forgot-password">
                Forget password?
              </Link>

              <button type="submit" className="login-submit">
                Log in
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