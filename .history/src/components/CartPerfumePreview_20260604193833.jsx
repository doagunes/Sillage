import cartBase from "../assets/cart/cart-base.svg";
import "./CartPerfumePreview.css";

function NoteColumn({ title, notes = [] }) {
  return (
    <div className="cart-note-column">
      <strong>{title}</strong>

      {notes.map((note) => (
        <span key={note}>{note}</span>
      ))}
    </div>
  );
}

function CartPerfumePreview({ item }) {
  const isCustomized = item.packagingType === "customized";

  return (
    <div className="cart-preview">
      <img
        className="cart-preview-base"
        src={cartBase}
        alt="Cart preview"
      />

      {/* Bottle Label */}
      <div className="cart-bottle-title">
        {item.title || "Untitled"}
      </div>

      {/* Custom Image */}
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

      {/* Package Title */}
      <div className="cart-package-title">
        {item.title || "Untitled"}
      </div>

      {/* Notes */}
      <div className="cart-package-notes">
        <NoteColumn
          title="Top"
          notes={item.notes?.top || []}
        />

        <NoteColumn
          title="Mid"
          notes={item.notes?.heart || []}
        />

        <NoteColumn
          title="Base"
          notes={item.notes?.base || []}
        />
      </div>
    </div>
  );
}

export default CartPerfumePreview;