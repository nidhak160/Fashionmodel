import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function OrderForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  if (!product) return <h2>No product selected</h2>;

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all details");
      return;
    }

    alert("Order Placed Successfully ✅");
navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Enter Delivery Details</h2>

      <h3>{product.title}</h3>
      <p>₹{product.price * (product.qty || 1)}</p>

      <input
        placeholder="Full Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      /><br /><br />

      <input
        placeholder="Phone Number"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      /><br /><br />

      <input
        placeholder="Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      /><br /><br />

      <input
        placeholder="City"
        onChange={(e) => setForm({ ...form, city: e.target.value })}
      /><br /><br />

      <input
        placeholder="Pincode"
        onChange={(e) => setForm({ ...form, pincode: e.target.value })}
      /><br /><br />

      <button onClick={handleSubmit}>
        Submit Order
      </button>
    </div>
  );
}

export default OrderForm;