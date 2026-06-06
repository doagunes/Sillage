import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import DynamicPerfumeBottle from "../components/DynamicPerfumeBottle";
import "./Account.css";
import "./Archive.css";

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
    <div className="account-page page-enter">

    </div>
    
  );
}

export default Account;