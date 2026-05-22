import { analyzeMemory } from "../utils/analyzeMemory";
import { useEffect, useState } from "react";
import SignupPopup from "../components/SignupPopup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Create.css";

function Create() {
    const [showPopup, setShowPopup] = useState(false);
    const [memoryText, setMemoryText] = useState("");
    const [notes, setNotes] = useState({
        top: [],
        heart: [],
        base: [],
    });

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);  
    
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
        <Step
          number="2"
          text="Try to construct sentences using simple and common words."
        />
        <Step
          number="3"
          text="Give your unique scent a short title (1-2 words)."
        />
        <Step
          number="4"
          text='Press the "Create" button to turn your memories into a scent composition.'
        />
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
            <span>
              Before you finish, write one or two words that capture what this
              memory means to you. These words will appear on your perfume label.
            </span>
            <span>------------------------------</span>
          </div>

          <button>Create Your Own Fragrance</button>
        </div>

        <div className="notes-panel">
          <div className="note-box">Top notes</div>
          <div className="note-box note-heart">Heart notes</div>
          <div className="note-box note-base">Base notes</div>

          <div className="options-box">
            <h3>Choose your prefered concentration</h3>

            <label>
              <input type="checkbox" /> Light & Airy (Eau de Parfum, 15 - 20%)
            </label>
            <label>
              <input type="checkbox" /> Long Lasting (Extrait de Parfum, 20 - 30%)
            </label>

            <h3>Select the volume</h3>

            <label>
              <input type="checkbox" /> 30ml
            </label>
            <label>
              <input type="checkbox" /> 50ml
            </label>

            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="archive-save">
        <button>Save and leave your trace on the archive!</button>
      </section>

      <section className="tag-section">
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

          <div className="upload-area">
            <h3>Upload Image to Customize the Packaging</h3>

            <div className="upload-box">
              <div className="upload-icon">☁</div>
              <p>
                Browse and chose the files you want to
                <br />
                upload from your computer
              </p>
              <button>+</button>
            </div>

            <p className="upload-description">
              Choose the details that belong to your memory.
              <br />
              A name, a date, a sentence only you understand.
              <br />
              Upload a photograph of the moment you wish to keep,
              <br />
              and transform it into part of your packaging.
              <br />
              <br />
              Whether you prefer the elegance of our classic design
              <br />
              or wish to create something unmistakably personal, each
              <br />
              bottle becomes an extension of the story inside it.
            </p>
          </div>
        </div>
      </section>

      <section className="packaging-choice">
        <div className="choice-card">
          <label>
            <input type="checkbox" /> Classical Packaging
          </label>
          <div className="choice-image placeholder">IMAGE</div>
        </div>

        <div className="choice-card">
          <label>
            <input type="checkbox" /> Customized Packaging
          </label>
          <div className="choice-image placeholder">IMAGE</div>
        </div>

        <button>Add to Cart</button>
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