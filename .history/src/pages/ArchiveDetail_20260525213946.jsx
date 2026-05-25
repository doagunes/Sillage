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

  const staticItem = archiveItems.find((item) => item.id.toString() === id);

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
        <main className="detail-loading">Loading...</main>
        <Footer />
      </div>
    );
  }

  if (id.startsWith("db-") && !databaseMemory) {
    return (
      <div className="archive-detail-page">
        <Navbar />
        <main className="detail-loading">Memory not found.</main>
        <Footer />
      </div>
    );
  }

  if (!id.startsWith("db-") && !staticItem) {
    return (
      <div className="archive-detail-page">
        <Navbar />
        <main className="detail-loading">Memory not found.</main>
        <Footer />
      </div>
    );
  }

  const detailData = id.startsWith("db-")
    ? formatDatabaseMemory(databaseMemory)
    : formatStaticMemory(staticItem);

  return (
    <div className="archive-detail-page">
      <Navbar />
      <DynamicMemoryDetail item={detailData} />
      <Footer />
    </div>
  );
}

function formatDatabaseMemory(memory) {
  return {
    id: `db-${memory.id}`,
    title: memory.title || "Untitled Memory",
    memoryImage: memory.memoryImage,
    perfumeImage: null,
    memoryText: memory.memoryText || "",
    notes: {
      top: memory.topNotes ? memory.topNotes.split(",") : [],
      heart: memory.heartNotes ? memory.heartNotes.split(",") : [],
      base: memory.baseNotes ? memory.baseNotes.split(",") : [],
    },
    isDatabaseItem: true,
  };
}

function formatStaticMemory(item) {
  return {
    id: item.id,
    title: item.title || `Memory ${item.id}`,
    memoryImage: item.memoryImage,
    perfumeImage: item.perfumeImage,
    memoryText:
      item.memoryText ||
      "This memory belongs to the Sillage archive, where personal moments are transformed into scent.",
    notes: item.notes || {
      top: [],
      heart: [],
      base: [],
    },
    isDatabaseItem: false,
  };
}

function DynamicMemoryDetail({ item }) {
  const navigate = useNavigate();

  return (
    <main className="dynamic-detail-wrapper">
      <section className="dynamic-detail-panel">
        <button className="dynamic-detail-back" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="dynamic-detail-bottle">
          {item.perfumeImage ? (
            <img
              src={item.perfumeImage}
              alt={item.title}
              className="manual-detail-perfume"
            />
          ) : (
            <DynamicPerfumeBottle title={item.title} size="large" />
          )}
        </div>

        <div className="dynamic-info-card">
          <div className="dynamic-info-header">
            <h1>{item.title}</h1>
            <span className="dynamic-heart">♡</span>
          </div>

          <div className="dynamic-info-body">
            <div className="dynamic-memory-photo">
              <img src={item.memoryImage} alt={item.title} />
            </div>

            <div className="dynamic-notes">
              <NoteGroup title="Top Notes" notes={item.notes.top} />
              <NoteGroup title="Heart Notes" notes={item.notes.heart} />
              <NoteGroup title="Base Notes" notes={item.notes.base} />
            </div>
          </div>

          <div className="dynamic-memory-text">
            <p>{item.memoryText}</p>
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
      <p>{notes.length > 0 ? notes.join(", ") : "—"}</p>
    </div>
  );
}

export default ArchiveDetail;