import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="footer">
        <Link to="/" className="logo">sillage</Link>
  
        <div className="footer-col">
        <Link to="/about">About</Link>
        </div>
  
        <div className="footer-col">
          <h3>Scent Studio</h3>
          <Link to="/create">Create Your Own P</Link>
          <p>Customize Your Packaging</p>
        </div>
  
        <div className="footer-col">
          <h3>Memory Archive</h3>
        </div>
  
        <div className="footer-col contact">
          <h3>Contacts</h3>
          <p>info@sillageperfumery.com.tr</p>
          <p>+90 123 456 78 90 &nbsp; | &nbsp; Izmir / Turkey</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;