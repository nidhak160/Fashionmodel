import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { addToCart, isUserLoggedIn } from "../utils";

function Accessoriespage() {

  const [products, setProducts] = useState([]);
  const isLoggedIn = isUserLoggedIn();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    const accessories = data.filter(p => p.category === "accessories");
    setProducts(accessories);
  }, []);

 return (
  <div style={{
    padding: "60px 5vw",
    fontFamily: "Arial, sans-serif",
    background: "#fafafa"
  }}>

    <h2 style={{
      marginBottom: "40px",
      fontSize: "28px",
      fontWeight: "600"
    }}>
      Accessories
    </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
      gap: "30px"
    }}>

      {products.map((p) => (

        <div
          key={p.id}
          onClick={() => navigate(`/product/${p.id}`, { state: p })}
          style={{
            border: "1px solid #eee",
            borderRadius: "14px",
            background: "#fff",
            padding: "15px",
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
          }}
        >

          <img
            src={p.image}
            alt={p.title}
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />

          <h4 style={{
            margin: "12px 0",
            fontSize: "16px",
            fontWeight: "600"
          }}>
            {p.title}
          </h4>

          <p style={{
            fontWeight: "bold",
            fontSize: "16px"
          }}>
            ₹{p.price}
          </p>

          {isLoggedIn && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(p);
              }}
              style={{
                marginTop: "12px",
                padding: "10px",
                width: "100%",
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => e.target.style.background = "#333"}
              onMouseLeave={(e) => e.target.style.background = "#000"}
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

export default Accessoriespage;