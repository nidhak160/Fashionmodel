import React from "react";
import { FiHeart } from "react-icons/fi";
import { isUserLoggedIn } from "../utils/index";
import { useNavigate } from "react-router-dom";

import dress1 from "../assets/dress1.jpg";
import dress2 from "../assets/dress2.jpg";
import dress3 from "../assets/dress3.jpg";
import dress4 from "../assets/dress4.jpg";

function Womenspage() {

  const navigate = useNavigate();
  const loggedIn = isUserLoggedIn();

  const products = [
    { id: 1, brand: "Sangria", title: "Floral Dress", price: 1200, oldPrice: 2000, image: dress1 },
    { id: 2, brand: "Biba", title: "Golden Kurta", price: 1500, oldPrice: 2500, image: dress2 },
    { id: 3, brand: "Libas", title: "Sharara Suit", price: 2200, oldPrice: 3200, image: dress3 },
    { id: 4, brand: "W", title: "Business Attire", price: 3500, oldPrice: 4200, image: dress4 },
  ];

  return (
    <div style={{ padding: "60px 5vw" }}>

      {/* Title */}
      <h2 style={{
        textAlign: "center",
        marginBottom: "50px",
        fontSize: "30px",
        fontWeight: "700"
      }}>
        Women's Collection
      </h2>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
        gap: "30px"
      }}>
        {products.map((p) => (

          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`, { state: p })}
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: "12px",
              background: "#fff",
              padding: "15px",
              cursor: "pointer",
              position: "relative",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >

            {/* Image Section */}
            <div style={{
              position: "relative",
              width: "100%",
              height: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f5f5f5",
              borderRadius: "10px"
            }}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain"   // ✅ FULL IMAGE
                }}
              />

              {/* Wishlist */}
              {loggedIn && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "#fff",
                    padding: "8px",
                    borderRadius: "50%",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                    cursor: "pointer"
                  }}
                >
                  <FiHeart />
                </div>
              )}
            </div>

            {/* Info */}
            <div style={{ padding: "15px" }}>
              
              <p style={{
                fontSize: "13px",
                color: "#888",
                marginBottom: "5px"
              }}>
                {p.brand}
              </p>

              <h4 style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "10px"
              }}>
                {p.title}
              </h4>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{
                  fontSize: "16px",
                  fontWeight: "bold"
                }}>
                  ₹{p.price}
                </span>

                <span style={{
                  fontSize: "14px",
                  color: "#aaa",
                  textDecoration: "line-through"
                }}>
                  ₹{p.oldPrice}
                </span>
              </div>

              {/* Add to Cart */}
              {loggedIn && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();   // ✅ prevent navigation
                    // addToCart(p);  // optional
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
              )}

            </div>

          </div>

        ))}
      </div>
    </div>
  );
}

export default Womenspage;