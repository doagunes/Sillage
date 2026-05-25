import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DynamicPerfumeBottle from "../components/DynamicPerfumeBottle";

import { archiveItems } from "../data/archiveItems";

import "./ArchiveDetail.css";

const API_URL = "http://localhost:5001/api";

function ArchiveDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [databaseMemory, setDatabaseMemory] = useState(null);
  const [loading, setLoading] = useState(id.startsWith("db-"));

  const staticItem = archiveItems.find(
    (item) => item.id.toString() === id
  );

  useEffect(() => {
    if (!id.startsWith("db-")) return;

    const databaseId = id.replace("db-", "");

    fetch(`${API_URL}/memories/${databaseId}`)
      .then((res) => res.json())
      .then((data) => {
        setDatabaseMemory(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Could not fetch memory detail:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="archive-detail-page">
        <Navbar />

        <main className="detail-loading">
          Loading...
        </main>

        <Footer />
      </div>
    );
  }

  if (staticItem?.detailImage) {
    return (
      <div className="archive-detail-page">
        <Navbar />

        <main className="static-detail-wrapper">
          <button
            className="static-detail-back"
            onClick={() => navigate(-1)}
          >
            ←
          </button>

          <img
            src={staticItem.detailImage}
            alt={`Archive detail ${id}`}
            className="static-detail-image"
          />
        </main>

        <Footer />
      </div>
    );
  }

  if (!databaseMemory) {
    return (
      <div className="archive-detail-page">
        <Navbar />

        <main className="detail-loading">
          Memory not found.
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="archive-detail-page">
      <Navbar />

      <DynamicMemoryDetail memory={databaseMemory} />

      <Footer />
    </div>
  );
}

function DynamicMemoryDetail({ memory }) {
  const navigate = useNavigate();

  const title = memory.title || "Untitled Memory";

  const topNotes = memory.topNotes
    ? memory.topNotes.split(",")
    : [];

  const heartNotes = memory.heartNotes
    ? memory.heartNotes.split(",")
    : [];

  const baseNotes = memory.baseNotes
    ? memory.baseNotes.split(",")
    : [];

  return (
    <main className="dynamic-detail-wrapper">
      <section className="dynamic-detail-panel">

        <button
          className="dynamic-detail-back"
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        {/* PERFUME BOTTLE */}
        <div className="dynamic-detail-bottle">
          <DynamicPerfumeBottle
            title={title}
            size="large"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="dynamic-info-card">

          <div className="dynamic-info-header">
            <h1>{title}</h1>

            <span className="dynamic-heart">
              ♡
            </span>
          </div>

          <div className="dynamic-info-body">

            <div className="dynamic-memory-photo">
              <img
                src={memory.memoryImage}
                alt={title}
              />
            </div>

            <div className="dynamic-notes">
              <NoteGroup
                title="Top Notes"
                notes={topNotes}
              />

              <NoteGroup
                title="Heart Notes"
                notes={heartNotes}
              />

              <NoteGroup
                title="Base Notes"
                notes={baseNotes}
              />
            </div>
          </div>

          <div className="dynamic-memory-text">
            <p>{memory.memoryText}</p>
          </div>

        </div>
      </section>
    </main>
  );
}

function NoteGroup({ title, notes }) {
  return (
    <div className="dynamic-note-group">
      <h3>{title}</h3>

      <p>
        {notes.length > 0
          ? notes.join(", ")
          : "—"}
      </p>
    </div>
  );
}

export default ArchiveDetail;