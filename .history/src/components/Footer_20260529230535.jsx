import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/sillage-logo-b.svg";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-brand">
        <img src={logo} alt="Sillage" />
      </Link>

      <div className="footer-col">
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </div>

      <div className="footer-col">
        <h3>Scent Studio</h3>

        <Link to="/create">
          Create Your Own Perfume
        </Link>

        <Link to="/create">
          Customize Your Packaging
        </Link>
      </div>

      <div className="footer-col">
        <h3>Memory Archive</h3>
      </div>

      <div className="footer-col contact">
        <h3>Contacts</h3>

        <p>info@sillageperfumery.com.tr</p>

        <p>
          +90 123 456 78 90 &nbsp; | &nbsp; Izmir / Turkey
        </p>
      </div>
    </footer>
  );
}

export default Footer;