// ✅ Check login
export const isUserLoggedIn = () => {
  return localStorage.getItem("loggedUser") !== null;
};

// ✅ Add to Cart
export const addToCart = (product) => {

  const user = localStorage.getItem("loggedUser");

  if (!user) {
    alert("Please login");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
};