import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const API_URL = "/api";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const normalizeCartItem = (data) => {
    return {
      databaseId: data.id,
      title: data.title,
      concentration: data.concentration,
      volume: data.volume,
      packagingType: data.packagingType,
      price: Number(data.price) || 0,
      packageImage: data.packageImage,
      quantity: data.quantity || 1,
      notes: {
        top: data.topNotes ? data.topNotes.split(",") : [],
        heart: data.heartNotes ? data.heartNotes.split(",") : [],
        base: data.baseNotes ? data.baseNotes.split(",") : [],
      },
    };
  };

  const addToCart = async (item, userId) => {
    const temporaryItem = {
      ...item,
      quantity: 1,
    };

    setCartItems((prev) => [...prev, temporaryItem]);

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
          quantity: 1,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message || "Could not save cart item.");
        return;
      }

      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem === temporaryItem
            ? {
                ...temporaryItem,
                databaseId: data.id,
              }
            : cartItem
        )
      );
    } catch (error) {
      console.error("Could not connect to cart API:", error);
    }
  };

  const loadCart = async (userId) => {
    if (!userId) return;

    try {
      const response = await fetch(`${API_URL}/cart/${userId}`);
      const data = await response.json();

      if (!Array.isArray(data)) {
        setCartItems([]);
        return;
      }

      setCartItems(data.map(normalizeCartItem));
    } catch (error) {
      console.error("Could not load cart:", error);
    }
  };

  const updateQuantity = async (databaseId, quantity) => {
    if (quantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.databaseId === databaseId ? { ...item, quantity } : item
      )
    );

    if (!databaseId) return;

    try {
      await fetch(`${API_URL}/cart/${databaseId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      });
    } catch (error) {
      console.error("Could not update cart quantity:", error);
    }
  };

  const removeFromCart = async (databaseId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.databaseId !== databaseId)
    );

    if (!databaseId) return;

    try {
      await fetch(`${API_URL}/cart/${databaseId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Could not delete cart item:", error);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        loadCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}