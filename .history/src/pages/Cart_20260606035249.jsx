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
    <div className="cart-page page-enter">

    </div>
    
  );
}

export default Cart;