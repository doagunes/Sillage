import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
              <div className="cart-product-image">IMAGE</div>

              <div className="cart-product-info">
                <h2>{cartItem.title || "Untitled Fragrance"}</h2>
                <p>{cartItem.concentration || "No concentration selected"}</p>
                <p>{cartItem.volume || "No volume selected"}</p>
                <p>{cartItem.packagingType || "No packaging selected"}</p>
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