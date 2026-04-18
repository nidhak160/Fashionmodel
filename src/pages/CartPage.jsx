import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={{ padding: "50px" }}>Cart is empty</h2>;
  }

  return (
    <div style={{ padding: "40px 8vw", background: "#f1f3f6" }}>
      <h2 style={{ marginBottom: "20px" }}>My Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            background: "#fff",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "8px",
            alignItems: "center"
          }}
        >
          {/* LEFT IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "6px"
            }}
          />

          {/* MIDDLE DETAILS */}
          <div style={{ flex: 1 }}>
            <h4 style={{ marginBottom: "5px" }}>{item.title}</h4>

            <p style={{ color: "green", fontSize: "14px" }}>
              ⭐ 4.0 | Assured
            </p>

            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              ₹{item.price}
            </p>

            <p style={{ color: "#555", fontSize: "14px" }}>
              Delivery by Tomorrow
            </p>

            {/* ➕➖ Qty */}
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => decreaseQty(item.id)}>-</button>

              <span style={{ margin: "0 10px" }}>{item.qty}</span>

              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div style={{ textAlign: "right" }}>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "none",
                border: "none",
                color: "red",
                cursor: "pointer",
                marginBottom: "10px"
              }}
            >
              Remove
            </button>

            <br />

            <button
              style={{
                background: "#fb641b",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer"
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