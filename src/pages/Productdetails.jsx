import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { isUserLoggedIn } from "../utils";

function Productdetails() {
  const { id } = useParams();
  const location = useLocation();

  const { addToCart } = useContext(CartContext);
  const isLoggedIn = isUserLoggedIn();

  const [finalProduct, setFinalProduct] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);

  useEffect(() => {
    // ✅ If product already passed via navigation → skip fetch
    if (location.state) return;

    // ✅ Try fetching from API
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setFinalProduct(data);
        setLoading(false);
      })
      .catch(() => {
        // ❗ API failed → fallback to localStorage
        const data = JSON.parse(localStorage.getItem("products")) || [];
        const found = data.find((p) => p.id === parseInt(id));

        setFinalProduct(found || null);
        setLoading(false);
      });
  }, [id, location.state]);

  // ⏳ Loading
  if (loading) {
    return <h2 style={{ padding: "50px" }}>Loading...</h2>;
  }

  // ❌ Not found
  if (!finalProduct) {
    return <h2 style={{ padding: "50px" }}>Product not found</h2>;
  }

  return (
    <div
      style={{
        padding: "60px 5vw",
        background: "#f9f9f9",
        minHeight: "80vh"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          gap: "50px",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          flexWrap: "wrap"
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f5f5f5",
            borderRadius: "10px",
            padding: "20px"
          }}
        >
          <img
            src={finalProduct.image}
            alt={finalProduct.title}
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              objectFit: "contain"
            }}
          />
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
            {finalProduct.title}
          </h2>

          <p
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "15px"
            }}
          >
            ₹{finalProduct.price}
          </p>

          <p
            style={{
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "25px"
            }}
          >
            This is a premium quality product designed for comfort and style.
          </p>

          {/* BUTTON */}
          {isLoggedIn && (
            <button
              onClick={() => addToCart(finalProduct)}
              style={{
                padding: "12px",
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                width: "200px",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => (e.target.style.background = "#333")}
              onMouseLeave={(e) => (e.target.style.background = "#000")}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Productdetails;