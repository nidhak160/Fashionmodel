import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate(); // ✅ ADD THIS

  if (cart.length === 0) {
    return <h2 style={{ padding: "50px" }}>Cart is empty</h2>;
  }

  return (
    <div style={{ padding: "40px 8vw", background: "#f1f3f6" }}>
      <h2 style={{ marginBottom: "20px" }}>My Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "20px", background: "#fff", padding: "20px", marginBottom: "15px", borderRadius: "8px", alignItems: "center" }}>

          <img src={item.image} alt={item.title} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "6px" }} />

          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
       ₹{item.price * (item.qty || 1)}
      </p>

            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>

            {/* ✅ BUY NOW FIXED */}
            <button
              onClick={() => navigate("/checkout", { state: item })}
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