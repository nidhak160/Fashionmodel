import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState([]);

  const getWishlistKey = () => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    return loggedUser ? `wishlist_${loggedUser.email}` : "wishlist_guest";
  };

  // Load wishlist when app starts
  useEffect(() => {
    const key = getWishlistKey();
    const stored = localStorage.getItem(key);
    setWishlist(stored ? JSON.parse(stored) : []);
  }, []);

  // Save wishlist
  useEffect(() => {
    const key = getWishlistKey();
    localStorage.setItem(key, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some(
        (item) => String(item.id) === String(product.id)
      );

      if (exists) {
        return prev.filter(
          (item) => String(item.id) !== String(product.id)
        );
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}