import cartBase from "../assets/cart/cart-base.svg";
import "./CartPerfumePreview.css";

function CartPerfumePreview({ item }) {
  const packagingType = item.packagingType?.toLowerCase();
  const isCustomized =
    packagingType === "customized" || packagingType === "custom";

function NoteColumn({ title, notes = [] }) {
  return (
    <div className="cart-note-column">
      <strong>{title}</strong>
      {notes.slice(0, 2).map((note) => (
        <span key={note}>{note}</span>
      ))}
    </div>
  );
}

function CartPerfumePreview({ item }) {
  const isCustomized = item.packagingType === "customized";
  const title = item.title || "Untitled";

  return (
    <div className="cart-preview">
      <img className="cart-preview-base" src={cartBase} alt="Cart preview" />

      <div className="cart-bottle-title">
        <p>{title}</p>
      </div>

      {isCustomized && item.packageImage && (
        <>
          <img
            className="cart-custom-photo"
            src={item.packageImage}
            alt="Uploaded memory"
          />
          <div className="cart-photo-texture"></div>
        </>
      )}

      <div className="cart-package-title">{title}</div>

      <div className="cart-package-notes">
        {isCustomized && (
  <div className="cart-package-notes">
    <div className="cart-note-column">
      <strong>Top</strong>
      <span>{item.notes?.top?.join(" ")}</span>
    </div>

    <div className="cart-note-column">
      <strong>Mid</strong>
      <span>{item.notes?.heart?.join(" ")}</span>
    </div>

    <div className="cart-note-column">
      <strong>Base</strong>
      <span>{item.notes?.base?.join(" ")}</span>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default CartPerfumePreview;