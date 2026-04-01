import React, { createContext,useState,useEffect,useCallback,useMemo,} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const getCartKey = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedUser ? `cart_${loggedUser.email}` : "cart_guest";
  };

  useEffect(() => {
    const key = getCartKey();
    const savedCart = localStorage.getItem(key);
    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  // Save cart
  useEffect(() => {
    const key = getCartKey();
    localStorage.setItem(key, JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const removeFromCart = useCallback((index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const value = useMemo(() => {
    return { cart, addToCart, removeFromCart };
  }, [cart, addToCart, removeFromCart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};