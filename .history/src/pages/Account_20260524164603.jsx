import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import "./Account.css";

function Account() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/signup");
  };

  return (
    <div className="account-wrapper">
      <Navbar />

      <main className="account-page">
        <button className="account-back" onClick={() => navigate(-1)}>
          ←
        </button>

        <section className="account-content">
          <h1>My Account</h1>

          <div className="account-line"></div>

          <h2>Memory Creations</h2>

          <div className="memory-creations-grid">
            <div className="memory-creation-card"></div>
          </div>

          <button className="account-logout" onClick={handleLogout}>
            Log out
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Account;