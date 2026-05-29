import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import heroMain from "../assets/home/hero-main.png";
import heroPolaroid from "../assets/home/hero-polaroid.png";
import saltAir from "../assets/products/salt-air.svg";
import applePie from "../assets/products/apple-pie.svg";
import morningCrust from "../assets/products/morning-crust.svg";
import midnightBalcony from "../assets/products/midnight-balcony.svg";
import statementImg from "../assets/home/statement.svg";

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
  return (
    <section className="logo-strip">
      <span>VOGUE</span>
      <span>BAZAAR</span>
      <span>ELLE</span>
      <span>marie claire</span>
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
      <div className="statement-image placeholder">IMAGE</div>
      <h2>
        WHAT IF MEMORIES COULD BE PRESERVED NOT ONLY AS IMAGES OR WORDS BUT AS
        SCENT?
      </h2>
    </section>
  );
}

function WhySection() {
  return (
    <section className="why">
      <div className="why-left">
        <h2>WHY SILLAGE ?</h2>
        <div className="why-image placeholder">IMAGE</div>
      </div>

      <div className="why-right">
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
          A memory is not only something you recall, it is also something you
          see. <b>Upload an image that belongs to your moment</b>, and let it
          become part of your fragrance.
        </p>
      </div>

      <div className="package-image placeholder">IMAGE</div>
    </section>
  );
}

export default Home;