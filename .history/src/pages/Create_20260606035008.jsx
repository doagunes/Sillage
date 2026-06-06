import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupPopup from "../components/SignupPopup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { analyzeMemory } from "../utils/analyzeMemory";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import createHeroImage from "../assets/create/create-hero.svg";
import tagImage from "../assets/create/tag.svg";
import tagPhoto from "../assets/create/tag-photo.svg";
import packagePreview from "../assets/create/package-preview.svg";
import classicalPackaging from "../assets/create/classical-packaging.svg";
import customizedPackaging from "../assets/create/customized-packaging.svg";
import "./Create.css";

function Create() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isLoggedIn, user } = useAuth();
  const [cartError, setCartError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [memoryText, setMemoryText] = useState("");
  const [memoryTitle, setMemoryTitle] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const [concentration, setConcentration] = useState("");
  const [volume, setVolume] = useState("");
  const [packagingType, setPackagingType] = useState("");
  const [packageImage, setPackageImage] = useState(null);
  const [memoryLine, setMemoryLine] = useState("");

  const [notes, setNotes] = useState({
    top: [],
    heart: [],
    base: [],
  });

  const canAddToCart =
    isCreated &&
    concentration &&
    volume &&
    packagingType &&
    (packagingType !== "customized" || packageImage);

  const handleCreateFragrance = () => {
  if (!memoryTitle.trim()) return;

  const result = analyzeMemory(memoryText);

  setNotes({
    top: result.top.slice(0, 3),
    heart: result.heart.slice(0, 3),
    base: result.base.slice(0, 3),
  });

  setIsCreated(true);
  setCartError("");
};

  const handleSaveToArchive = () => {
    if (!isCreated) return;

    if (!isLoggedIn) {
      setShowPopup(true);
      return;
    }

    navigate("/archive", {
      state: {
        openTracePopup: true,
        draftMemory: {
          title: memoryTitle,
          memory: memoryText,
          notes,
        },
      },
    });
  };

  const handleAddToCart = () => {
  if (!canAddToCart) return;

  if (!isLoggedIn) {
    setShowPopup(true);
    return;
  }

 addToCart(
  {
    title: memoryTitle,
    memory: memoryText,
    notes,
    concentration,
    volume,
    packagingType,
    packageImage,
    memoryLine,
    price: packagingType === "customized" ? 120 : 95,
  },
  user.id
);

  setCartError("");
  navigate("/cart");
};

 const handlePackageImageUpload = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setPackageImage(reader.result);
    setCartError("");
  };

  reader.readAsDataURL(file);
};

  return (
    <div className="create-page page-enter">

    
  );
}

function Step({ number, text }) {
  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <p>{text}</p>
    </div>
  );
}

export default Create;