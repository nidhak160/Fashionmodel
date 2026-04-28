import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <h2 style={{ padding: "60px", textAlign: "center" }}>
        Cart is empty
      </h2>
    );
  }

  return (
    <div
      style={{
        padding: "40px 8vw",
        background: "#f1f3f6",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "25px", fontSize: "26px" }}>My Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            background: "#fff",
            padding: "18px",
            marginBottom: "15px",
            borderRadius: "10px",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            flexWrap: "wrap",
          }}
        >
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "110px",
              height: "110px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          {/* DETAILS */}
          <div style={{ flex: 1, minWidth: "200px" }}>
            <h4 style={{ marginBottom: "8px" }}>{item.title}</h4>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              ₹{item.price * (item.qty || 1)}
            </p>

            {/* QTY */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => decreaseQty(item.id)}
                style={{
                  width: "28px",
                  height: "28px",
                  border: "none",
                  background: "#ddd",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                style={{
                  width: "28px",
                  height: "28px",
                  border: "none",
                  background: "#ddd",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "crimson",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>

            <button
              onClick={() => navigate("/checkout", { state: item })}
              style={{
                background: "#1aa39a",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;