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
    <div className="scent-detail-page page-enter">

    </div>
    
  );
}

export default ScentDetail;