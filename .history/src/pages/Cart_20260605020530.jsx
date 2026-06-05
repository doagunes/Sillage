import { Link } from "react-router-dom";
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
          <Link to="/create" className="cart-back">←</Link>

          <h1>Your Cart</h1>

          {cartItem ? (
            <>
              <div className="cart-product-row">
                <button className="cart-remove">×</button>

                <CartPerfumePreview item={cartItem} />

                <div className="cart-product-info">
                  <h2>
                    {cartItem.packagingType === "customized"
                      ? `Customize ${cartItem.volume} perfume bottle`
                      : `Classic ${cartItem.volume} perfume bottle`}
                  </h2>

                  <strong>{cartItem.price}€</strong>
                </div>

                <div className="cart-quantity">
                  <button>−</button>
                  <span>1</span>
                  <button>＋</button>
                </div>
              </div>

              <div className="coupon-area">
                <p>Have a coupon? Enter your code</p>

                <div className="coupon-input-row">
                  <input placeholder="Coupon code" />
                  <button>Apply</button>
                </div>
              </div>

              <Link to="/create" className="new-perfume-btn">
                ← Create a new perfume
              </Link>
            </>
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </section>

        <aside className="cart-summary">
          <h2>Cart Totals</h2>

          <div className="summary-line">
            <span>Shipping (3-5 Business Days)</span>
          </div>

          <div className="summary-line">
            <span>Tax</span>
          </div>

          <div className="summary-line">
            <span>Subtotals</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Totals</span>
            <strong>{cartItem ? `${cartItem.price}€` : "0€"}</strong>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

          <div className="secure-payment">
            <h3>Secure Payment</h3>
            <p>the following secure payments are permitted</p>

            <div className="payment-icons">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>DISC</span>
              <span>CB</span>
              <span>Pay</span>
              <span>Pay</span>
              <span>$</span>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;