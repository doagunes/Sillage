import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
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

        <section className="scent-info-section">

  <div className="info-item">
    <div className="info-header">
      <h3>How to use</h3>
      <span>↓</span>
    </div>

    <div className="info-content">
      <p>
        Apply your fragrance to the pulse points of the body wrists,
        neck, and behind the ears...
      </p>
    </div>
  </div>

  <div className="info-item">
    <div className="info-header">
      <h3>Where to purchase</h3>
      <span>↓</span>
    </div>

    <div className="info-content">
      <p>
        Sillage fragrances can be created and purchased directly
        through our website...
      </p>
    </div>
  </div>

  <div className="info-item">
    <div className="info-header">
      <h3>Production</h3>
      <span>↓</span>
    </div>

    <div className="info-content">
      <p>
        Each Sillage fragrance is made to order and never mass-produced...
      </p>
    </div>
  </div>

</section>

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