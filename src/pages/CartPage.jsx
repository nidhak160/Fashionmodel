import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "40px 5vw" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items added to cart.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "10px"
                }}
              />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;