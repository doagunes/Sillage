import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartPerfumePreview from "../components/CartPerfumePreview";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItem } = useCart();

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-main">
        <section className="cart-left">
          <h1>Cart</h1>

          {cartItem ? (
            <div className="cart-product">
              <CartPerfumePreview item={cartItem} />

              <div className="cart-product-info">
                <h2>{cartItem.title || "Untitled Fragrance"}</h2>
                <p>{cartItem.concentration}</p>
                <p>{cartItem.volume}</p>
                <p>{cartItem.packagingType}</p>
                <strong>{cartItem.price}€</strong>
              </div>
            </div>
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </section>

        <section className="cart-right">
          <h2>Payment Details</h2>

          <input placeholder="Name on card" />
          <input placeholder="Card number" />

          <div className="cart-row">
            <input placeholder="MM/YY" />
            <input placeholder="CVV" />
          </div>

          <button>Checkout</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;