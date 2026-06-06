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

        <p>{title || "Untitled Memory"}</p>
        </div>
    </div>
  );
}

export default DynamicPerfumeBottle;