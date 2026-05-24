import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import "./Account.css";

function Account() {
  const { user, logout } = useAuth();

  return (
    <div className="account-page">
      <Navbar />

      <main className="account-main">
        <section className="account-left">
          <h1>My Account</h1>

          <div className="account-info">
            <p>Welcome, {user?.username || "Sillage User"}</p>
            <p>{user?.email}</p>
          </div>

          <button className="account-logout" onClick={logout}>
            Log out
          </button>
        </section>

        <section className="account-right">
          <h2>My Memories</h2>

          <div className="account-memory-grid">
            <div className="account-memory-card"></div>
            <div className="account-memory-card"></div>
            <div className="account-memory-card"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Account;