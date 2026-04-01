import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { addToCart, addToWishlist, isUserLoggedIn } from "../utils";

function Accessoriespage() {

  const [products, setProducts] = useState([]);
  const isLoggedIn = isUserLoggedIn();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    const accessories = data.filter(p => p.category === "accessories");
    setProducts(accessories);
  }, []);

  return (
    <div style={{ padding: "60px 5vw" }}>

      {/* Title */}
      <h2 style={{
        marginBottom: "40px",
        fontSize: "26px",
        fontWeight: "600"
      }}>
        Accessories
      </h2>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
        gap: "30px"
      }}>

        {products.map((product) => (

          <div
            key={product.id}
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: "12px",
              background: "#fff",
              padding: "15px",
              textAlign: "center",
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

            {/* Wishlist (only if logged in) */}
            {isLoggedIn && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  addToWishlist(product);
                }}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                  background: "#fff",
                  padding: "6px",
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                <FiHeart />
              </div>
            )}

            {/* Image */}
            <div style={{
              width: "100%",
              height: "260px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f5f5f5",
              borderRadius: "10px"
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain"
                }}
              />
            </div>

            {/* Info */}
            <h4 style={{
              fontSize: "16px",
              margin: "10px 0",
              fontWeight: "600"
            }}>
              {product.name}
            </h4>

            <p style={{
              fontSize: "15px",
              fontWeight: "bold"
            }}>
              ₹{product.price}
            </p>

            {/* Add to Cart (only if logged in) */}
            {isLoggedIn && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                style={{
                  marginTop: "10px",
                  padding: "10px",
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

export default Accessoriespage;