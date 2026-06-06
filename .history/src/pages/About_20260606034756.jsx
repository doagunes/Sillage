import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import aboutFlower from "../assets/about/about-flower.svg";
import envelopeSvg from "../assets/about/envelope.svg";
import paperSvg from "../assets/about/paper.svg";
import key1Front from "../assets/about/key-1-front.svg";
import key1Back from "../assets/about/key-1-back.svg";
import key2Front from "../assets/about/key-2-front.svg";
import key2Back from "../assets/about/key-2-back.svg";
import key3Front from "../assets/about/key-3-front.svg";
import key3Back from "../assets/about/key-3-back.svg";
import systemLeft from "../assets/about/system-left.svg";
import system1 from "../assets/about/system-1.png";
import system2 from "../assets/about/system-2.png";
import system3 from "../assets/about/system-3.png";
import system4 from "../assets/about/system-4.png";
import system5 from "../assets/about/system-5.png";

function About() {
  return (
    <div className="about-page page-enter">
  ...
</div>
    
  );
}
function FlipKeyCard({ front, back, title }) {
  return (
    <div className="key-card">
      <div className="key-card-inner">
        <img src={front} alt={title} className="key-card-face key-card-front" />
        <img src={back} alt={`${title} description`} className="key-card-face key-card-back" />
      </div>
    </div>
  );
}

export default About;