import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const getCartKey = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedUser?.email ? `cart_${loggedUser.email}` : "cart_guest";
  };

useEffect(() => {
  const loadCart = () => {
    const key = getCartKey();
    const savedCart = localStorage.getItem(key);
    setCart(savedCart ? JSON.parse(savedCart) : []);
  };

  loadCart();

  const handleStorageChange = () => {
    loadCart();
  };

  window.addEventListener("storage", handleStorageChange);

  return () => window.removeEventListener("storage", handleStorageChange);
}, []);

  // ✅ Save cart when updated
  useEffect(() => {
    const key = getCartKey();
    localStorage.setItem(key, JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart
 const addToCart = useCallback((product) => {
  setCart((prev) => {
    const exists = prev.find(item => item.id === product.id);

    let updatedCart;
    if (exists) {
      updatedCart = prev.map(item =>
        item.id === product.id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...prev, { ...product, qty: 1 }];
    }

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