import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import saltAirDetail from "../assets/scents/salt-air-detail.svg";
import applePieDetail from "../assets/scents/apple-pie-detail.svg";
import morningCrustDetail from "../assets/scents/morning-crust-detail.svg";
import midnightBalconyDetail from "../assets/scents/midnight-balcony-detail.svg";

import scentQuoteBanner from "../assets/scents/scent-quote-banner.svg";
import discoverOtherScents from "../assets/scents/discover-other-scents.svg";

import "./ScentDetail.css";

const scentImages = {
  "salt-air": saltAirDetail,
  "apple-pie": applePieDetail,
  "morning-crust": morningCrustDetail,
  "midnight-balcony": midnightBalconyDetail,
};

function ScentDetail() {
  const [openInfo, setOpenInfo] = useState(null);

const toggleInfo = (section) => {
  setOpenInfo(openInfo === section ? null : section);
};
  const { scentId } = useParams();
  const detailImage = scentImages[scentId];

  if (!detailImage) {
    return (
      <div className="scent-detail-page">
        <Navbar />
        <main className="scent-not-found">
          <p>Scent not found.</p>
          <Link to="/">Back to home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    
    <div className="scent-detail-page">
      <Navbar />

      <main className="scent-detail-main">
        <Link to="/" className="scent-back">
          ←
        </Link>

        <img
          className="scent-detail-top"
          src={detailImage}
          alt="Scent detail"
        />

        <button className="scent-add-cart">Add to cart</button>
        <div className="scent-accordion">
  <div className="scent-accordion-item">
    <button
      className="scent-accordion-header"
      onClick={() => toggleInfo("how")}
    >
      <span>How to use</span>
      <span>↓</span>
    </button>

    {openInfo === "how" && (
      <div className="scent-accordion-content">
        <p>
          Apply your fragrance to the pulse points of the body wrists, neck, and behind the ears. These areas allow the scent to develop naturally throughout the day. For a more personal experience, layer your fragrance by applying it to clothing, scarves, or the inside of a jacket. Each perfume is designed to evolve slowly, revealing different notes over time, just like a memory returning in fragments.
          Store your bottle away from direct sunlight and heat to preserve the quality of the fragrance.
        </p>
      </div>
    )}
  </div>

  <div className="scent-accordion-item">
    <button
      className="scent-accordion-header"
      onClick={() => toggleInfo("purchase")}
    >
      <span>Where to purchase</span>
      <span>↓</span>
    </button>

    {openInfo === "purchase" && (
      <div className="scent-accordion-content">
        <p>
          Sillage fragrances can be created and purchased directly through our website. Begin by writing your memory, selecting your notes, and designing your personalized bottle and packaging. Once complete, your fragrance is crafted exclusively for you.

        For those who wish to experience Sillage in person, we also have a physical perfume atelier and boutique. There, you can explore our scent library, discover rare ingredients, and create your fragrance with the guidance of our perfumers.
        </p>
      </div>
    )}
  </div>

  <div className="scent-accordion-item">
    <button
      className="scent-accordion-header"
      onClick={() => toggleInfo("production")}
    >
      <span>Production</span>
      <span>↓</span>
    </button>

    {openInfo === "production" && (
      <div className="scent-accordion-content">
        <p>
          Each Sillage fragrance is made to order and never mass-produced. After your memory and scent profile are created, our perfumers carefully compose your fragrance using selected notes and 
bespoke accords.

Every bottle is filled, labeled and packaged individually to reflect the memory behind it. From the first written moment to the final detail of the box, the entire process is designed to create something personal, intimate and entirely unique.
        </p>
      </div>
    )}
  </div>
</div>

      </main>

      <section className="scent-quote-section">
        <img src={scentQuoteBanner} alt="Sillage memory quote" />
      </section>

      <section className="discover-section">
        <h2>Discover Other Scents</h2>

        <p>
          Within the Memory Archive, you may wander through the memories of
          others anonymous fragments of summers, first loves, distant cities,
          forgotten rooms. Each story lives beside the fragrance it became a
          trace of bergamot for a seaside afternoon, soft musk for a familiar
          embrace, rain and metal for a memory of the city at night.
        </p>

        <img
          className="discover-scents-img"
          src={discoverOtherScents}
          alt="Discover other scents"
        />

        <div className="discover-bottom">
          <Link to="/archive" className="memory-archive-btn">
            Memory Archive
          </Link>

          <p>
            Explore the perfumes created by others, discover the notes chosen to
            capture their moments and let their stories inspire your own. In
            Sillage, every fragrance is a memory preserved and every memory
            leaves a scent behind.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ScentDetail;