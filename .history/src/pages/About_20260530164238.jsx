import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import aboutFlower from "../assets/about/about-flower.svg";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      <section className="about-intro">
        <div className="about-text">
          <h1>DEFINING SILLAGE</h1>

          <p>
            Sillage (n.) /sē-yäzh/ <br />
            The trail left by a person's perfume.
          </p>

          <p>
          Your scent is never just a scent.It is a memory suspended in the air, a trace that lingers long after you leave. At Sillage, every fragrance begins with you. Your memories, emotions and moments are transformed into a personalized composition of notes crafted to capture the essence of your story. By translating memories into scent, we create more than a perfume; we create a lasting signature. Sillage is the invisible footprint you leave behind intimate, unforgettable and entirely your own.
          </p>

          <h3>
            Not created for everyone.
            <br />
            Created only for you.
          </h3>
        </div>

        <div className="about-image">
          <img src={aboutFlower} alt="Sillage flower" />
        </div>
      </section>

      <section className="philosophy">
        <div className="envelope placeholder">IMAGE</div>

        <div className="philosophy-text">
          <h2>
            PHILOSOPHY
            <br />
            BEHIND
          </h2>

          <p>
            The idea for this brand emerged from a personal experience during
            the COVID-19 pandemic. After recovering from the illness, I
            temporarily lost my sense of smell. During that time, I realized how
            closely scent is connected to memory.
          </p>

          <p>
            This experience made me reflect on how fragile sensory memories can
            be. Smell is one of the strongest triggers of memory, yet it is also
            one of the easiest senses to lose or forget.
          </p>
        </div>
      </section>

      <section className="key-points">
        <h2>KEY POINTS OF SILLAGE</h2>

        <div className="key-grid">
          <div>Memory<br />Centric<br />Design</div>
          <div>Custom<br />Made<br />Creations</div>
          <div>Fragrance<br />System</div>
        </div>
      </section>

      <section className="system-section">
        <h2>HOW SILLAGE’S SYSTEM WORKS</h2>

        <div className="system-grid">
          <div className="system-large placeholder">IMAGE</div>

          <div className="system-card">
            <div className="system-card-image placeholder">IMAGE</div>
            <h3>1- MEMORY AS STRUCTURE</h3>
            <p>Every memory is built through six key dimensions.</p>

            <div className="tags">
              <span>place</span>
              <span>people</span>
              <span>time</span>
              <span>emotion</span>
              <span>experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shipping">
        <h2>SHIPPING & RETURNS</h2>

        <h3>Shipping</h3>
        <p>
          Every scent is created from a personal memory and prepared
          individually. Because of this, each order is made with care and may
          require additional time before shipping.
        </p>

        <p>Please allow:</p>
        <p>* 3–7 business days for production</p>
        <p>* 2–5 business days for domestic shipping</p>
        <p>* 7–14 business days for international shipping</p>

        <h3>Return & Refunds</h3>
        <p>
          As every fragrance is custom-made, we are unable to accept returns for
          change of mind. Refunds or replacements are only offered if your item
          arrives damaged, you receive the wrong product, or your package is
          lost before being marked as delivered.
        </p>

        <h3>Incorrect Addresses</h3>
        <p>
          Please carefully check your shipping address before placing your
          order. We are not responsible for orders shipped to incorrectly entered
          addresses.
        </p>

        <h3>Questions</h3>
        <p>
          For any questions regarding your order, shipping or delivery, please
          contact us at info@sillageperfumery.com.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default About;