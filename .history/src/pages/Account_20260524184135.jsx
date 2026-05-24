import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import "./Account.css";

const API_URL = "http://localhost:5001/api";

function Account() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [myMemories, setMyMemories] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/signup");
      return;
    }

    fetch(`${API_URL}/memories/user/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setMyMemories(data);
      })
      .catch((error) => {
        console.error("Could not fetch user memories:", error);
      });
  }, [user, navigate]);

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
            {myMemories.length > 0 ? (
              myMemories.map((memory) => (
                <div className="memory-creation-card" key={memory.id}>
  <div className="memory-card-inner">
    <img
      src={memory.memoryImage}
      alt={memory.title}
      className="memory-card-front"
    />

    <img
      src={memory.perfumeImage}
      alt={memory.title}
      className="memory-card-back"
    />
  </div>
</div>
              ))
            ) : (
              <p className="no-memories-text">
                You haven’t left any trace yet.
              </p>
            )}
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