import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import outfit1 from "../assets/outfit1.jpg";
import outfit2 from "../assets/outfit2.jpg";
import outfit3 from "../assets/outfit3.jpg";
import outfit4 from "../assets/outfit4.jpg";
import outfit5 from "../assets/outfit5.jpg";
import outfit6 from "../assets/outfit6.jpg";
import outfit7 from "../assets/outfit7.jpg";
import outfit8 from "../assets/outfit8.jpg";
import outfit9 from "../assets/outfit9.jpg";
import outfit10 from "../assets/outfit10.jpg";


function Menspage() {
  const navigate = useNavigate();

  const { cart, addToCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const loggedIn = !!localStorage.getItem("loggedUser");

  const products = [
  { id: 1, brand: "Raymond", title: "Classic Beige Coat", price: 3200, oldPrice: 4200, image: outfit1 },
  { id: 2, brand: "Louis Philippe", title: "Black Casual Suit", price: 2800, oldPrice: 3500, image: outfit2 },
  { id: 3, brand: "Zara", title: "Slim Fit Blazer", price: 2600, oldPrice: 3400, image: outfit3 },
  { id: 4, brand: "H&M", title: "Casual Shirt", price: 1400, oldPrice: 2000, image: outfit4 },
  { id: 5, brand: "Allen Solly", title: "Formal Shirt", price: 1500, oldPrice: 2100, image: outfit5 },
  { id: 6, brand: "Peter England", title: "Office Wear", price: 1800, oldPrice: 2400, image: outfit6 },
  { id: 7, brand: "Van Heusen", title: "Premium Suit", price: 3500, oldPrice: 4500, image: outfit7 },
  { id: 8, brand: "Levis", title: "Denim Jacket", price: 2200, oldPrice: 3000, image: outfit8 },
  { id: 9, brand: "Roadster", title: "Casual Hoodie", price: 1300, oldPrice: 1900, image: outfit9 },
  { id: 10, brand: "Jack & Jones", title: "Stylish Outfit", price: 2500, oldPrice: 3300, image: outfit10 },
];

  return (
    <div style={{ padding: "60px 5vw" }}>

      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "30px",
          fontWeight: "700"
        }}
      >
        Men's Collection
      </h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: "30px"
        }}
      >
        {products.map((p) => {
          const cartItem = cart.find((item) => item.id === p.id);

          return (
            <div
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`, { state: p })}
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: "12px",
                background: "#fff",
                padding: "15px",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >

              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: "320px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f5f5f5",
                  borderRadius: "10px"
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "15px" }}>
                <p style={{ fontSize: "13px", color: "#888" }}>
                  {p.brand}
                </p>

                <h4 style={{ fontSize: "16px", fontWeight: "600" }}>
                  {p.title}
                </h4>

                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <span style={{ fontWeight: "bold" }}>₹{p.price}</span>

                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#aaa"
                    }}
                  >
                    ₹{p.oldPrice}
                  </span>
                </div>

                {/* Cart Button */}
                {loggedIn && (
                  <>
                    {!cartItem ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(p);
                        }}
                        style={{
                          marginTop: "12px",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          background: "#111",
                          color: "#fff",
                          borderRadius: "8px",
                          cursor: "pointer"
                        }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          marginTop: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "12px"
                        }}
                      >
                        <button onClick={() => decreaseQty(p.id)}>-</button>

                        <span>{cartItem.qty || 1}</span>

                        <button onClick={() => increaseQty(p.id)}>+</button>
                      </div>
                    )}
                  </>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menspage;