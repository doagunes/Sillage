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
        <NoteColumn title="Top" notes={item.notes?.top || []} />
        <NoteColumn title="Mid" notes={item.notes?.heart || []} />
        <NoteColumn title="Base" notes={item.notes?.base || []} />
      </div>
    </div>
  );
}

export default CartPerfumePreview;