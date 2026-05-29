import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupPopup from "../components/SignupPopup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { analyzeMemory } from "../utils/analyzeMemory";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Create.css";

function Create() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();
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

  const handleCreateFragrance = () => {
    const result = analyzeMemory(memoryText);
    setNotes(result);
    setIsCreated(true);
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
    if (!isCreated) {
      setCartError("Please create your fragrance first.");
      return;
    }
  
    if (!isLoggedIn) {
      setShowPopup(true);
      return;
    }
  
    setCartError("");
    alert("Product added to cart.");
  };

  const handlePackageImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPackageImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="create-page">
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}

      <Navbar />

      <section className="create-hero">
        <div className="create-hero-left">
          <h1>
            WHILE CREATING YOUR OWN
            <br />
            PERFUME
          </h1>
          <p>Follow these steps:</p>
        </div>

        <div className="create-hero-image placeholder">IMAGE</div>
      </section>

      <section className="steps-grid">
        <Step number="1" text="Describe your memory in a few sentences." />
        <Step number="2" text="Try to construct sentences using simple and common words." />
        <Step number="3" text="Give your unique scent a short title (1-2 words)." />
        <Step number="4" text='Press the "Create" button to turn your memories into a scent composition.' />
      </section>

      <section className="create-main">
        <div className="memory-panel">
          <h3>
            [Write a memory you never want to forget... Think about where you
            were, who was with you, what time it was what happened, and how you
            felt.]
          </h3>

          <p>
            "Last summer, I went to the seaside with my sister. It was late
            afternoon and the air smelled like salt and sunscreen. We were
            sitting on the rocks, talking and laughing while the sun was setting.
            I remember feeling calm, warm and completely free."
          </p>

          <div className="memory-input">
            <textarea
              value={memoryText}
              onChange={(e) => {
                setMemoryText(e.target.value);
                setIsCreated(false);
              }}
              placeholder="Write your memory here..."
            />

            <span>
              Before you finish, write one or two words that capture what this
              memory means to you. These words will appear on your perfume label.
            </span>

            <input
              className="memory-title-input"
              value={memoryTitle}
              onChange={(e) => {
                setMemoryTitle(e.target.value);
                setIsCreated(false);
              }}
              placeholder="Write perfume name here..."
              maxLength={30}
            />
          </div>

          <button onClick={handleCreateFragrance}>
            Create Your Own Fragrance
          </button>
        </div>

        <div className="notes-panel">
          <div className="note-box">
            <h3>Top notes</h3>
            {notes.top.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>

          <div className="note-box note-heart">
            <h3>Heart notes</h3>
            {notes.heart.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>

          <div className="note-box note-base">
            <h3>Base notes</h3>
            {notes.base.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>

          <div className="options-box">
            <h3>Choose your prefered concentration</h3>

            <label>
              <input
                type="radio"
                name="concentration"
                checked={concentration === "light"}
                onChange={() => setConcentration("light")}
              />
              Light & Airy (Eau de Parfum, 15 - 20%)
            </label>

            <label>
              <input
                type="radio"
                name="concentration"
                checked={concentration === "long-lasting"}
                onChange={() => setConcentration("long-lasting")}
              />
              Long Lasting (Extrait de Parfum, 20 - 30%)
            </label>

            <h3>Select the volume</h3>

            <label>
              <input
                type="radio"
                name="volume"
                checked={volume === "30ml"}
                onChange={() => setVolume("30ml")}
              />
              30ml
            </label>

            <label>
              <input
                type="radio"
                name="volume"
                checked={volume === "50ml"}
                onChange={() => setVolume("50ml")}
              />
              50ml
            </label>
          </div>
        </div>
      </section>

      <section className="archive-save">
        <button
          onClick={handleSaveToArchive}
          disabled={!isCreated}
          className={!isCreated ? "disabled-save" : ""}
        >
          Save and leave your trace on the archive!
        </button>
      </section>

      <section className="tag-section">
        <div className="scroll-hint">
          <span>Scroll down for</span>
          <span>customize your packaging ↓</span>
        </div>

        <div className="tag placeholder">
          This fragrance is not
          <br />
          designed to please
          <br />
          but to reflect.
        </div>

        <div className="tag-photo placeholder">IMAGE</div>
      </section>

      <section className="customize-section">
        <h2>CUSTOMIZE YOUR FRAGRANCE</h2>

        <div className="customize-grid">
          <div className="package-preview placeholder">IMAGE</div>

          <div className="package-customize-panel">
            <h3>Upload Image to Customize the Packaging</h3>

            <div className="package-upload-box">
              {packageImage ? (
                <img
                  src={packageImage}
                  alt="Package preview"
                  className="package-upload-preview"
                />
              ) : (
                <>
                  <div className="upload-icon">☁</div>

                  <p>
                    Browse and chose the files you want to
                    <br />
                    upload from your computer
                  </p>
                </>
              )}

              <label className="package-upload-plus">
                +
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handlePackageImageUpload}
                />
              </label>
            </div>

            <p className="package-description">
              Choose the details that belong to your memory. A name, a date, a
              sentence only you understand. Upload a photograph of the moment you
              wish to keep, and transform it into part of your packaging.
              <br />
              <br />
              Whether you prefer the elegance of our classic design or wish to
              create something unmistakably personal, each bottle becomes an
              extension of the story inside it.
            </p>
          </div>
        </div>
      </section>

      <section className="packaging-choice-section">
        <div className="packaging-options">
          <label
            className={`packaging-card ${
              packagingType === "classical" ? "selected" : ""
            }`}
          >
            <div className="packaging-title">
              <input
                type="radio"
                name="packaging"
                checked={packagingType === "classical"}
                onChange={() => setPackagingType("classical")}
              />
              Classical Packaging
            </div>

            <div className="packaging-image placeholder">IMAGE</div>
          </label>

          <label
            className={`packaging-card ${
              packagingType === "customized" ? "selected" : ""
            }`}
          >
            <div className="packaging-title">
              <input
                type="radio"
                name="packaging"
                checked={packagingType === "customized"}
                onChange={() => setPackagingType("customized")}
              />
              Customized Packaging
            </div>

            <div className="packaging-image placeholder">IMAGE</div>
          </label>
        </div>

        <div className="memory-line-panel">
          <div className="memory-line-box">
            <h3>
              Complete your packaging with
              <br />a personal memory line.
            </h3>

            <p>
              Continue the “I remember...” sentence with a moment connected to
              your fragrance.
            </p>

            <textarea
              value={memoryLine}
              onChange={(e) => setMemoryLine(e.target.value)}
              placeholder="I remember..."
            />
          </div>

          {cartError && <p className="cart-error-message">{cartError}</p>}

          <button
            className={`final-cart-btn ${!isCreated ? "disabled-cart-btn" : ""}`}
            onClick={handleAddToCart}
            disabled={!isCreated}
          >
            Add to Cart
          </button>
        </div>
      </section>

      <Footer />
    </div>
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