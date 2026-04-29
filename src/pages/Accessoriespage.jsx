import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../utils";

function Accessoriespage() {
  const [products, setProducts] = useState([]);
  const isLoggedIn = isUserLoggedIn();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    const accessories = data.filter((p) => p.category === "accessories");
    setProducts(accessories);
  }, []);

  return (
    <div
      style={{
        paddingTop: "10px", 
        paddingLeft: "6vw",
        paddingRight: "6vw",
        paddingBottom: "60px",
        background: "#f8f9fb",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "30px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "50px",
          letterSpacing: "1px"
        }}
      >
        Accessories Collection
      </h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px"
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`, { state: p })}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.06)";
            }}
          >
            {/* Image */}
            <div
              style={{
                height: "260px",
                background: "#f2f2f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  transition: "0.3s"
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: "18px" }}>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "10px"
                }}
              >
                {p.title}
              </h4>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "#111"
                  }}
                >
                  ₹{p.price}
                </span>

                {p.oldPrice && (
                  <>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#999",
                        fontSize: "14px"
                      }}
                    >
                      ₹{p.oldPrice}
                    </span>

                    <span
                      style={{
                        color: "green",
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      {Math.round(
                        ((p.oldPrice - p.price) / p.oldPrice) * 100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>

              {/* Button */}
              {isLoggedIn && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(p);
                  }}
                  style={{
                    marginTop: "15px",
                    width: "100%",
                    padding: "11px",
                    border: "none",
                    background: "#111",
                    color: "#fff",
                    borderRadius: "10px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "#333")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "#111")
                  }
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

export default Accessoriespage;