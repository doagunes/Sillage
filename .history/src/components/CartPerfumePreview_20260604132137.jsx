import cartBase from "../assets/cart/cart-base.";
import "./CartPerfumePreview.css";

function CartPerfumePreview({ item }) {
  const isCustomized = item.packagingType === "customized";

  return (
    <div className="cart-preview">
      <img className="cart-preview-base" src={cartBase} alt={item.title} />

      <div className="cart-preview-title">{item.title}</div>

      {isCustomized && item.packageImage && (
        <img
          className="cart-preview-memory-img"
          src={item.packageImage}
          alt="Uploaded memory"
        />
      )}

      <div className="cart-preview-notes">
        <strong>Top</strong>
        <span>{item.notes?.top?.join(", ")}</span>

        <strong>Mid</strong>
        <span>{item.notes?.heart?.join(", ")}</span>

        <strong>Base</strong>
        <span>{item.notes?.base?.join(", ")}</span>
      </div>
    </div>
  );
}

export default CartPerfumePreview;