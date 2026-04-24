import { useLocation, useNavigate  } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  if (!product) return <h2>No product selected</h2>;

  const total = product.price * product.qty;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>

      <img src={product.image} width="200" alt="" />

      <h3>{product.title}</h3>

      
      <p style={{ fontSize: "22px", fontWeight: "bold" }}>
        ₹{total}
      </p>

      <p style={{ color: "#777" }}>
        ₹{product.price} × {product.qty}
      </p>

      <button
  onClick={() => navigate("/order-form", { state: product })}
  style={{
    padding: "10px",
    background: "green",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }}
>
  Place Order
</button>
    </div>
  );
}

export default Checkout;