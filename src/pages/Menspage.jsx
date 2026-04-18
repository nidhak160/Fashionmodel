import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import outfit1 from "../assets/outfit1.jpg";
import outfit2 from "../assets/outfit2.jpg";
import kurta1 from "../assets/Lakhany Ready to Wear Embroidered Shalwar & Kameez Suit - LGADMAN1025-BROWN.jpg";
import kurta2 from "../assets/Herren Kurta Pyjama Set_ Armani Baumwollmischung, modernes Eid-Outfit.jpg";

function Menspage() {
  const navigate = useNavigate();

  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useContext(CartContext);

  const isLoggedIn = JSON.parse(localStorage.getItem("loggedUser"));

  const products = [
    { id: 1, title: "Beige Kurta Set", price: 1800, image: kurta2 },
    { id: 2, title: "Brown Kurta", price: 1600, image: kurta1 },
    { id: 3, title: "Classic Beige Coat", price: 3200, image: outfit1 },
    { id: 4, title: "Black Casual Suit", price: 2800, image: outfit2 }
  ];

  return (
    <div style={{ padding: "60px 5vw" }}>
      <h2>Men's Collection</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: "30px"
        }}
      >
        {products.map((p) => {
          const cartItem = cart.find((item) => item.id === p.id);

          return (
            <div
              key={p.id}
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: "12px",
                background: "#fff",
                padding: "15px",
                textAlign: "center"
              }}
            >
              {/* ✅ Only image click navigates */}
              <img
                src={p.image}
                alt={p.title}
                onClick={() => navigate(`/product/${p.id}`, { state: p })}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
              />

              <h4>{p.title}</h4>
              <p>₹{p.price}</p>

              {isLoggedIn && (
                <>
                  {!cartItem ? (
                    // 👉 Add button
                    <button
                      onClick={() => addToCart(p)}
                      style={{
                        padding: "10px",
                        background: "#000",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    // 👉 + - Remove
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px"
                      }}
                    >
                      <button onClick={() => decreaseQty(p.id)}>-</button>

                      <span>{cartItem.qty}</span>

                      <button onClick={() => increaseQty(p.id)}>+</button>

                      <button
                        onClick={() => removeFromCart(p.id)}
                        style={{
                          background: "red",
                          color: "#fff",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "5px"
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menspage;