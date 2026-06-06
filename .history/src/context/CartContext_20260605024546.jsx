import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const API_URL = "/api";

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState(null);

  const addToCart = async (item, userId) => {
    setCartItem(item);

    if (!userId) return;

    try {
      const response = await fetch(`${API_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          title: item.title,
          concentration: item.concentration,
          volume: item.volume,
          packagingType: item.packagingType,
          price: item.price,
          notes: item.notes,
          packageImage: item.packageImage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message || "Could not save cart item.");
        return;
      }

      setCartItem({
        ...item,
        databaseId: data.id,
      });
    } catch (error) {
      console.error("Could not connect to cart API:", error);
    }
  };

  const loadCart = async (userId) => {
    if (!userId) return;

    try {
      const response = await fetch(`${API_URL}/cart/${userId}`);
      const data = await response.json();

      if (!data) {
        setCartItem(null);
        return;
      }

      setCartItem({
        databaseId: data.id,
        title: data.title,
        concentration: data.concentration,
        volume: data.volume,
        packagingType: data.packagingType,
        price: data.price,
        packageImage: data.packageImage,
        notes: {
          top: data.topNotes ? data.topNotes.split(",") : [],
          heart: data.heartNotes ? data.heartNotes.split(",") : [],
          base: data.baseNotes ? data.baseNotes.split(",") : [],
        },
      });
    } catch (error) {
      console.error("Could not load cart:", error);
    }
  };

  const clearCart = async () => {
    if (cartItem?.databaseId) {
      try {
        await fetch(`${API_URL}/cart/${cartItem.databaseId}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.error("Could not delete cart item:", error);
      }
    }

    setCartItem(null);
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, loadCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}