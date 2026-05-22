import "./Homepage.css";

function App() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <LogoStrip />
      <PopularScents />
      <StatementSection />
      <WhySection />
      <PackageSection />
      
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">sillage</div>

      <nav className="nav-links">
        <a>About</a>
        <a>Create Your Own Fragrance</a>
        <a>Memory Archive</a>
      </nav>

      <div className="nav-icons">
        <span>♙</span>
        <span>▢</span>
        <span>◎</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image placeholder">IMAGE</div>

      <div className="polaroid placeholder">PHOTO</div>

      <div className="hero-content">
        <h1>TURN YOUR MEMORIES INTO A LASTING TRACE</h1>
        <p>
          Just like memories leave a trace in our minds, perfume leaves a trace
          in the air. At Sillage, those memories are transformed into something
          tangible. It can be a feeling, a moment or a trace captured as scent.
          <b> Let it begin with a moment.</b>
        </p>
        <button>Create Your Own Fragrance</button>
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
  const items = ["Salt Air", "Apple Pie", "Morning Crust", "Midnight Balcony"];

  return (
    <section className="popular">
      <h2>MONTHLY POPULAR SCENTS</h2>

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item}>
            <div className="product-image placeholder">IMAGE</div>
            <div className="product-info">
              <span>{item}</span>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">sillage</div>

        <div className="footer-links">
          <a>About</a>
          <a>Create Your Own Fragrance</a>
          <a>Memory Archive</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Your scent begins with a memory.
        </p>

        <div className="footer-socials">
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>TikTok</span>
        </div>
      </div>
    </footer>
  );
}

export default App;