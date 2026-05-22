import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { archiveItems } from "../data/archiveItems";
import "./Archive.css";

function Archive() {
  const location = useLocation();

  const [showTracePopup, setShowTracePopup] = useState(false);
  const [draftMemory, setDraftMemory] = useState(null);

  useEffect(() => {
    if (location.state?.openTracePopup) {
      setDraftMemory(location.state.draftMemory);

      const timer = setTimeout(() => {
        setShowTracePopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="archive-page">
      <Navbar />

      {showTracePopup && (
        <div className="trace-popup-overlay">
          <div className="trace-popup">
            <button
              className="trace-popup-close"
              onClick={() => setShowTracePopup(false)}
            >
              ×
            </button>

            <div className="trace-left">
              <label>Name</label>
              <input placeholder="optional" />

              <label>Surname</label>
              <input placeholder="optional" />

              <label>Title of Memory</label>
              <input value={draftMemory?.title || ""} readOnly />

              <label>Memory</label>
              <textarea value={draftMemory?.memory || ""} readOnly />
            </div>

            <div className="trace-middle">
              <label>Notes</label>

              <div className="trace-notes-box">
                <p>Top Notes</p>
                <span>{draftMemory?.notes?.top?.join(", ")}</span>

                <p>Heart Notes</p>
                <span>{draftMemory?.notes?.heart?.join(", ")}</span>

                <p>Base Notes</p>
                <span>{draftMemory?.notes?.base?.join(", ")}</span>
              </div>
            </div>

            <div className="trace-right">
              <label>Photo of the Memory</label>

              <div className="trace-upload-box">
                <div className="upload-cloud">☁</div>
                <p>
                  Browse and choose the files you want to upload from your
                  computer
                </p>
                <button>+</button>
              </div>

              <button className="leave-trace-btn">Leave your trace</button>
            </div>
          </div>
        </div>
      )}

      <section className="archive-intro">
        <p>
          In the archive, these memories exist beyond the individual, forming
          collective experiences each expressed through scent.
          <br />
          You are invited not only to observe also to contribute.
        </p>
      </section>

      <section className="archive-grid">
        {archiveItems.map((item) => (
          <Link to={`/archive/${item.id}`} className="archive-card" key={item.id}>
            <div className="archive-card-inner">
              <img
                src={item.memoryImage}
                alt={`Memory ${item.id}`}
                className="card-front"
              />
              <img
                src={item.perfumeImage}
                alt={`Perfume ${item.id}`}
                className="card-back"
              />
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Archive;