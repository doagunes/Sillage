import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import signupVisual from "../assets/signup/signup-visual.svg";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [robotChecked, setRobotChecked] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const result = await signup({
      username,
      email,
      password,
    });

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    setErrorMessage("");
    navigate("/create");
  };

  return (
    <div className="signup-page page-enter">

    </div>
    
  );
}

export default SignUp;