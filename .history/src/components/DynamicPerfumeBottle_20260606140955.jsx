import "./DynamicPerfumeBottle.css";
import perfumeTemplate from "../assets/perfumes/perfume-template.png";

function DynamicPerfumeBottle({ title, families = [], size = "medium" }) {
  const fragranceDescription = families.slice(0, 2).join(" & ");

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

      {fragranceDescription && (
        <div className="dynamic-fragrance-description">
          {fragranceDescription}
        </div>
      )}
    </div>
  );
}

export default DynamicPerfumeBottle;