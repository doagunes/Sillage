import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import { useRef, useEffect } from "react";
import heroMain from "../assets/home/hero-main.png";
import heroPolaroid from "../assets/home/hero-polaroid.png";
import saltAir from "../assets/products/salt-air.svg";
import applePie from "../assets/products/apple-pie.svg";
import morningCrust from "../assets/products/morning-crust.svg";
import midnightBalcony from "../assets/products/midnight-balcony.svg";
import statementImg from "../assets/home/statement.svg";
import whyImg from "../assets/home/why-image.svg";
import packageImg from "../assets/home/package-image.svg";
import vogue from "../assets/logos/vogue.svg";
import bazaar from "../assets/logos/bazaar.svg";
import elle from "../assets/logos/elle.svg";
import marie from "../assets/logos/marie-claire.svg";


function Home() {
  return (
    <div className="homepage">
      <Navbar />

      <Hero />
      <LogoStrip />
      <PopularScents />
      <StatementSection />
      <WhySection />
      <PackageSection />

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroMain} alt="Sillage perfume campaign" />
      </div>

      <div className="polaroid">
        <img src={heroPolaroid} alt="Memory polaroid" />
      </div>

      <div className="hero-content">
        <h1>
          TURN YOUR MEMORIES INTO
          <br />
          A LASTING TRACE
        </h1>

        <div className="hero-bottom">
          <p>
            Just like memories leave a trace in our minds perfume leaves a trace
            in the air. At Sillage, those memories are transformed into something
            tangible. It can be a feeling, a moment or a trace captured as scent.
            <b> Let it begin with a moment.</b>
          </p>

          <button>Create Your Own Fragrance</button>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const baseLogos = [
    { src: vogue, alt: "Vogue" },
    { src: bazaar, alt: "Bazaar" },
    { src: elle, alt: "Elle" },
    { src: marie, alt: "Marie Claire" },
  ];

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let raf;
    const speed = 1.9; // px/frame — artırırsan hızlanır

    // Kaç px'de sıfırlayacağımızı bul (ilk child'ın genişliği)
    const getResetWidth = () => track.children[0].offsetWidth;

    const tick = () => {
      x -= speed;
      if (Math.abs(x) >= getResetWidth()) {
        x = 0; // tam bir group bitince sessizce sıfırla
      }
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="logo-strip">
      <div className="logo-track" ref={trackRef}>
        {/* Group 1 — görünen */}
        <div className="logo-group">
          {baseLogos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} />
          ))}
        </div>
        {/* Group 2 — group 1 biterken ekranda olan */}
        <div className="logo-group" aria-hidden="true">
          {baseLogos.map((logo, i) => (
            <img key={i} src={logo.src} alt="" />
          ))}
        </div>
        {/* Group 3 — group 2 biterken ekranda olan */}
        <div className="logo-group" aria-hidden="true">
          {baseLogos.map((logo, i) => (
            <img key={i} src={logo.src} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularScents() {
  const items = [
    { name: "Salt Air", image: saltAir },
    { name: "Apple Pie", image: applePie },
    { name: "Morning Crust", image: morningCrust },
    { name: "Midnight Balcony", image: midnightBalcony },
  ];

  return (
    <section className="popular">
      <h2>MONTHLY POPULAR SCENTS</h2>

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.name}>
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="product-info">
              <span>{item.name}</span>
              <span>95 €</span>
            </div>

            <button>BUY NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatementSection() {
  return (
    <section className="statement">
      <div className="statement-image">
        <img src={statementImg} alt="" />
      </div>

      <h2>
        WHAT IF MEMORIES
        <br />
        COULD BE
        <br />
        PRESERVED NOT
        <br />
        ONLY AS IMAGES OR
        <br />
        WORDS BUT
        <br />
        AS SCENT?
      </h2>
    </section>
  );
}

function WhySection() {
  return (
    <section className="why">
      <div className="why-title-box">
        <h2>WHY SILLAGE ?</h2>
      </div>

      <div className="why-dark-box">
        <p>
          Rather than aiming to please
          <br />
          these scents are designed to reflect.
          <br />
          It translates fragments of your memory into
          <br />
          an olfactory composition.
        </p>
      </div>

      <div className="why-image-box">
        <img src={whyImg} alt="Sillage fragrance model" />
      </div>

      <div className="why-text-box">
        <p>
          Fragrance has always been connected to memory. A single scent can
          bring back a place, a person or a forgotten moment.
          <br />
          <br />
          This website invites you to transform personal moments into fragrance.
          By writing a memory and sharing fragments of your experience the
          system translates emotions, environments and details into a unique
          perfume composition.
        </p>
      </div>
    </section>
  );
}

function PackageSection() {
  return (
    <section className="package">

      <div className="package-text">
        <h2>CUSTOMIZED PERFUME PACKAGES</h2>

        <p>
          A memory is not only something you recall it is also something you see.
          <b> Upload an image that belongs to your moment</b>, and let it become
          part of your fragrance.
          <br /><br />
          Your scent takes shape through both memory and image,
          forming something personal, tangible and lasting.
          <br /><br />
          This makes the experience more personal and helps turn your story
          into a more meaningful fragrance.
        </p>
      </div>

      <div className="package-image">
        <img src={packageImg} alt="Package" />
      </div>

    </section>
  );
}

export default Home;