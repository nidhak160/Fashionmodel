import React from "react";
import { FiHeart } from "react-icons/fi";
import { addToCart, addToWishlist, isUserLoggedIn } from "../utils";
import { useNavigate } from "react-router-dom";

import outfit1 from "../assets/outfit1.jpg";
import outfit2 from "../assets/outfit2.jpg";
import kurta1 from "../assets/Lakhany Ready to Wear Embroidered Shalwar & Kameez Suit - LGADMAN1025-BROWN.jpg";
import kurta2 from "../assets/Herren Kurta Pyjama Set_ Armani Baumwollmischung, modernes Eid-Outfit.jpg";

function Menspage() {

  const isLoggedIn = isUserLoggedIn();

  const products = [
    { id: 1, title: "Beige Kurta Set", price: 1800, image: kurta2 },
    { id: 2, title: "Brown Kurta", price: 1600, image: kurta1 },
    { id: 3, title: "Classic Beige Coat", price: 3200, image: outfit1 },
    { id: 4, title: "Black Casual Suit", price: 2800, image: outfit2 }
  ];

const navigate = useNavigate();

  return (
    <div style={{ padding: "60px 5vw" }}>

      <h2 style={{ marginBottom: "40px", fontSize: "26px", fontWeight: "600" }}>
        Men's Collection
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "30px"
        }}
      >

        {products.map((p) => (

         <div
  key={p.id}
  onClick={() => navigate(`/product/${p.id}`, { state: p })}
  style={{
    border: "1px solid #e6e6e6",
    borderRadius: "12px",
    background: "#fff",
    padding: "15px",
    textAlign: "center",
    cursor: "pointer",
    position: "relative"
  }}
>

           
             

            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h4
              style={{
                fontSize: "16px",
                margin: "8px 0",
                fontWeight: "600"
              }}
            >
              {p.title}
            </h4>

            <p
              style={{
                fontSize: "15px",
                fontWeight: "bold"
              }}
            >
              ₹{p.price}
            </p>

            {/* ✅ Add to Cart (only if logged in) */}
            {isLoggedIn && (
              <button
                onClick={(e) => {
    e.stopPropagation(); // 🔥 IMPORTANT
    addToCart(p);}}
    
                style={{
                  marginTop: "10px",
                  padding: "8px",
                  width: "100%",
                  background: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Add to Cart
              </button>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Menspage;