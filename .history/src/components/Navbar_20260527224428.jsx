import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="navbar">
      <Link to="/" className="logo">sillage</Link>

      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/create">Create Your Own Fragnance</Link>
        <Link to="/archive">Memory Archive</Link>
      </nav>

      <div className="nav-icons">
        <Link
          to={isLoggedIn ? "/account" : "/signup"}
          className="nav-icon-link"
        >
          ♙
        </Link>
        <Link to="/cart" className="cart-icon">
  ▢
      </Link>
        <span>◎</span>
      </div>
    </header>
  );
}

export default Navbar;