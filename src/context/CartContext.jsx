import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const getCartKey = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedUser?.email ? `cart_${loggedUser.email}` : "cart_guest";
  };

  // ✅ Load cart on page load
 useEffect(() => {
  const loadCart = () => {
    const key = getCartKey();
    const savedCart = localStorage.getItem(key);
    setCart(savedCart ? JSON.parse(savedCart) : []);
  };

  loadCart();

  window.addEventListener("storage", loadCart);

  return () => window.removeEventListener("storage", loadCart);
}, []);

  // ✅ Save cart when updated
  useEffect(() => {
    const key = getCartKey();
    localStorage.setItem(key, JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart
  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const updatedCart = [...prev, product];
      const key = getCartKey();
      localStorage.setItem(key, JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  // ✅ Remove from cart
  const removeFromCart = useCallback((index) => {
    setCart((prev) => {
      const updatedCart = prev.filter((_, i) => i !== index);
      const key = getCartKey();
      localStorage.setItem(key, JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const value = useMemo(() => {
    return { cart, addToCart, removeFromCart };
  }, [cart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};