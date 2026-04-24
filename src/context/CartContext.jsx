import React, {createContext,useState,useEffect,useCallback,useMemo,} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCartKey = () => {
    try {
      const user = JSON.parse(localStorage.getItem("loggedUser"));
      return user?.email ? `cart_${user.email}` : "cart_guest";
    } catch {
      return "cart_guest";
    }
  };

  const loadCart = useCallback(() => {
    const key = getCartKey();
    const savedCart = localStorage.getItem(key);

    try {
      setCart(savedCart ? JSON.parse(savedCart) : []);
    } catch {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  useEffect(() => {
    const handleUserChange = () => {
      loadCart();
    };

    window.addEventListener("userChanged", handleUserChange);

    return () => {
      window.removeEventListener("userChanged", handleUserChange);
    };
  }, [loadCart]);

  useEffect(() => {
    const key = getCartKey();
    localStorage.setItem(key, JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  
  const increaseQty = useCallback((id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
  }, []);

  
  const decreaseQty = useCallback((id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: (item.qty || 1) - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }, []);

  // ✅ Memoized value
  const value = useMemo(() => {
    return {
      cart,
      addToCart,
      removeFromCart,
      increaseQty,
      decreaseQty,
    };
  }, [cart, addToCart, removeFromCart, increaseQty, decreaseQty]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};