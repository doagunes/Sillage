import "./DynamicPerfumeBottle.css";
import perfumeTemplate from "../assets/perfumes/perfume-template.png";

function DynamicPerfumeBottle({ title, size = "medium" }) {
  return (
    <div className={`dynamic-perfume ${size}`}>
      <img
        src={perfumeTemplate}
        alt={title}
        className="dynamic-perfume-img"
      />

      <div className="dynamic-perfume-label">
        <h2>sillage</h2>
        <p>{title || "Untitled Memory"}</p>

        <div className="dynamic-perfume-small">
          <span>
            production date
            <br />
            2026
          </span>

          <span>
            style
            <br />
            eau de parfum
          </span>
        </div>
      </div>
    </div>
  );
}

export default DynamicPerfumeBottle;