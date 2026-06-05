import cartBase from "../assets/cart/cart-base.svg";
import "./CartPerfumePreview.css";

function CartPerfumePreview({ item }) {
  const isCustomized = item.packagingType === "customized";

  return (
    <div className="cart-preview">
      <img className="cart-preview-base" src={cartBase} alt="Cart preview" />

      <div className="cart-bottle-title">
        {item.title || "Untitled"}
      </div>

      {isCustomized && item.packageImage && (
        <img
          className="cart-custom-photo"
          src={item.packageImage}
          alt="Uploaded memory"
        />
      )}

      <div className="cart-package-title">
        {item.title || "Untitled"}
      </div>

      <div className="cart-package-notes">
        <div>
          <strong>Top</strong>
          <span>{item.notes?.top?.join(", ")}</span>
        </div>

        <div>
          <strong>Mid</strong>
          <span>{item.notes?.heart?.join(", ")}</span>
        </div>

        <div>
          <strong>Base</strong>
          <span>{item.notes?.base?.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}

export default CartPerfumePreview;