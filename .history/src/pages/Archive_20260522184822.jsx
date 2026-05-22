import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { archiveItems } from "../data/archiveItems";
import { Link } from "react-router-dom";
import "./Archive.css";

function Archive() {
  return (
    <div className="archive-page">
      <Navbar />

      <section className="archive-intro">
        
        <p>
        Each fragrance in this archive begins with a real moment and what begins as a memory becomes something that lingers.
        In the archive, these moments exist beyond the individual, forming collective experiences each expressed through scent.
        You are invited not only to observe also to contribute.
        </p>
      </section>

      <section className="archive-grid">
        {archiveItems.map((item) => (
          <Link to={`/archive/${item.id}`} className="archive-card" key={item.id}>
            <div className="archive-card-inner">
            <img src={item.memoryImage} alt={`Memory ${item.id}`} className="card-front" />
            <img src={item.perfumeImage} alt={`Perfume ${item.id}`} className="card-back" />
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Archive;