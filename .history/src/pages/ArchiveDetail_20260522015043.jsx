import { useParams } from "react-router-dom";
import { archiveItems } from "../data/archiveItems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ArchiveDetail.css";

function ArchiveDetail() {
  const { id } = useParams();
  const item = archiveItems.find((archiveItem) => archiveItem.id === id);

  if (!item) return <p>Memory not found.</p>;

  return (
    <div className="archive-detail-page">
      <Navbar />

      <main className="archive-detail-wrapper">
        <img src={item.detailImage} alt={item.title} />
      </main>

      <Footer />
    </div>
  );
}

export default ArchiveDetail;