import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { archiveItems } from "../data/archiveItems";
import { useAuth } from "../context/AuthContext";
import DynamicPerfumeBottle from "../components/DynamicPerfumeBottle";
import "./Archive.css";

const API_URL = "http://localhost:5001/api";

function Archive() {
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [databaseItems, setDatabaseItems] = useState([]);
  const [showTracePopup, setShowTracePopup] = useState(false);
  const [draftMemory, setDraftMemory] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const items = [...databaseItems, ...archiveItems];

  useEffect(() => {
    fetch(`${API_URL}/memories`)
      .then((res) => res.json())
      .then((data) => {
        const formattedItems = data.map((item) => ({
          id: `db-${item.id}`,
          databaseId: item.id,
          memoryImage: item.memoryImage,
          perfumeImage: item.perfumeImage,
          draftMemory: {
            title: item.title,
            memory: item.memoryText,
            notes: {
              top: item.topNotes ? item.topNotes.split(",") : [],
              heart: item.heartNotes ? item.heartNotes.split(",") : [],
              base: item.baseNotes ? item.baseNotes.split(",") : [],
            },
          },
        }));

        setDatabaseItems(formattedItems);
      })
      .catch((error) => {
        console.error("Could not fetch memories:", error);
      });
  }, []);

  useEffect(() => {
    if (location.state?.openTracePopup) {
      setDraftMemory(location.state.draftMemory);
      setUploadedImage(null);
      setUploadedFile(null);

      const timer = setTimeout(() => {
        setShowTracePopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleLeaveTrace = async () => {
    if (!uploadedFile) {
      alert("Please upload a memory photo first.");
      return;
    }

    if (!user) {
      alert("Please sign in first.");
      return;
    }

    const formData = new FormData();

    formData.append("userId", user.id);
    formData.append("title", draftMemory?.title || "");
    formData.append("memoryText", draftMemory?.memory || "");
    formData.append("topNotes", draftMemory?.notes?.top?.join(",") || "");
    formData.append("heartNotes", draftMemory?.notes?.heart?.join(",") || "");
    formData.append("baseNotes", draftMemory?.notes?.base?.join(",") || "");
    formData.append("memoryImage", uploadedFile);

    try {
      const response = await fetch(`${API_URL}/memories`, {
        method: "POST",
        body: formData,
      });

      const savedItem = await response.json();

      if (!response.ok) {
        alert(savedItem.message || "Could not save memory.");
        return;
      }

      const newItem = {
        id: `db-${savedItem.id}`,
        databaseId: savedItem.id,
        memoryImage: savedItem.memoryImage,
        perfumeImage: savedItem.perfumeImage,
        draftMemory: {
          title: savedItem.title,
          memory: savedItem.memoryText,
          notes: {
            top: savedItem.topNotes ? savedItem.topNotes.split(",") : [],
            heart: savedItem.heartNotes ? savedItem.heartNotes.split(",") : [],
            base: savedItem.baseNotes ? savedItem.baseNotes.split(",") : [],
          },
        },
      };

      setDatabaseItems([newItem, ...databaseItems]);
setShowTracePopup(false);
setUploadedImage(null);
setUploadedFile(null);
setDraftMemory(null);

navigate("/archive", { replace: true });
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  };

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
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Uploaded memory"
                    className="trace-upload-preview"
                  />
                ) : (
                  <>
                    <div className="upload-cloud">☁</div>
                    <p>
                      Browse and choose the files you want to upload from your
                      computer
                    </p>

                    <label className="upload-plus-button">
                      +
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) => {
                          const file = e.target.files[0];

                          if (file) {
                            setUploadedFile(file);
                            setUploadedImage(URL.createObjectURL(file));
                          }
                        }}
                      />
                    </label>
                  </>
                )}
              </div>

              <button className="leave-trace-btn" onClick={handleLeaveTrace}>
                Leave your trace
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="archive-intro">
        <p>
        Each fragrance in this archive begins with a real moment and what begins as a memory becomes something that lingers.
        In the archive, these moments exist beyond the individual, forming collective experiences each expressed through scent.
        You are invited not only to observe also to contribute.
        </p>
      </section>

      <section className="archive-grid">
        {items.map((item) => (
          <Link to={`/archive/${item.id}`} className="archive-card" key={item.id}>
            <div className="archive-card-inner">
              <img
                src={item.memoryImage}
                alt={`Memory ${item.id}`}
                className="card-front"
              />
              <div className="card-back perfume-card-back">
                {item.id.toString().startsWith("db-") ? (
                  <DynamicPerfumeBottle title={item.draftMemory?.title} size="small" />
                ) : (
                  <img
                    src={item.perfumeImage}
                    alt={`Perfume ${item.id}`}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Archive;