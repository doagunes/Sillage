import cartBase from "../assets/cart/cart-base.svg";
import cartCustomizedBase from "../assets/cart/cart-customized-base.svg";
import "./CartPerfumePreview.css";

function NoteColumn({ title, notes = [] }) {
  return (
    <div className="cart-note-column">
      <strong>{title}</strong>

      {notes.slice(0, 2).map((note, index) => (
        <span key={`${note}-${index}`}>{note}</span>
      ))}
    </div>
  );
}

function getReadyMadeClass(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

function CartPerfumePreview({ item }) {
  const packagingType = item.packagingType?.toLowerCase();
  const isCustomized =
    packagingType === "customized" || packagingType === "custom";

  const title = item.title || "Untitled";

  const isReadyMadeScent =
    item.packageImage &&
    typeof item.packageImage === "string" &&
    item.packageImage.includes("/assets/");

  if (isReadyMadeScent) {
    return (
      <div className="cart-preview cart-ready-made-preview">
        <img
          src={item.packageImage}
          alt={title}
          className={`cart-ready-made-img cart-ready-made-${getReadyMadeClass(
            title
          )}`}
        />
      </div>
    );
  }

  return (
    <div className={`cart-preview ${isCustomized ? "customized" : "classic"}`}>
      <img
        className="cart-preview-base"
        src={isCustomized ? cartCustomizedBase : cartBase}
        alt="Cart preview"
      />

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

      {isCustomized && (
        <>
          <div className="cart-package-title-front">{title}</div>
          <div className="cart-package-title-side">{title}</div>

          <div className="cart-package-notes">
            <NoteColumn title="Top" notes={item.notes?.top || []} />
            <NoteColumn title="Mid" notes={item.notes?.heart || []} />
            <NoteColumn notes={item.notes?.base || []} />
          </div>
        </>
      )}
    </div>
  );
}

export default CartPerfumePreview;