import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartPerfumePreview from "../components/CartPerfumePreview";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import paymentMethods from "../assets/cart/payment-methods.svg";
import "./Cart.css";

function Cart() {
  const { cartItems, loadCart, updateQuantity, removeFromCart } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    if (user?.id) {
      loadCart(user.id);
    }
  }, [user]);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-main">
        <section className="cart-left">
          <Link to="/create" className="cart-back">←</Link>

          <h1>Your Cart</h1>

          {cartItems.length > 0 ? (
            <>
              {cartItems.map((cartItem) => (
                <div className="cart-product-row" key={cartItem.databaseId}>
                  <button
                    className="cart-remove"
                    onClick={() => removeFromCart(cartItem.databaseId)}
                  >
                    ×
                  </button>

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
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          cartItem.databaseId,
                          Number(cartItem.quantity || 1) - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>{cartItem.quantity || 1}</span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          cartItem.databaseId,
                          Number(cartItem.quantity || 1) + 1
                        )
                      }
                    >
                      ＋
                    </button>
                  </div>
                </div>
              ))}

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
            <strong>{totalPrice}€</strong>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

         
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;