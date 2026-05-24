import "./SignupPopup.css";
import { useNavigate } from "react-router-dom";

function SignupPopup({ onClose }) {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="popup-overlay">
      <div className="signup-popup">
        <button className="popup-close" onClick={onClose}>
          ×
        </button>

        <h2>Sign up to leave your trace</h2>

        <p>
          Create an account to save your fragrance, revisit your memory, and
          leave your scent in the archive.
        </p>

        <div className="popup-actions">
          <button
            className="popup-primary"
            onClick={handleSignupRedirect}
          >
            Sign up
          </button>

          <button className="popup-secondary" onClick={onClose}>
            Continue without sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPopup;