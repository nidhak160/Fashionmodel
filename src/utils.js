// src/utils.js

export const isUserLoggedIn = () => {
  return localStorage.getItem("user");
};

// Add to Cart
export const addToCart = (product) => {
  const user = localStorage.getItem("user");

  if (!user) {
    alert("Please login first 🔐");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart ✅");
};

// Add to Wishlist
export const addToWishlist = (product) => {
  const user = localStorage.getItem("user");

  if (!user) {
    alert("Please login first 🔐");
    return;
  }

  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Added to Wishlist ❤️");
};