import { useEffect, useState } from "react";

function NewArrivals() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newArrivals")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err));
  }, []);

  const formatPrice = (price) => {
    return "₹" + price.toLocaleString("en-IN");
  };

  return (
    <section style={{ padding: "80px 5vw", background: "#fafafa" }}>
      <h2 style={{
        fontSize: "28px",
        fontWeight: "600",
        letterSpacing: "1px"
      }}>
        OUR NEW ARRIVALS
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {items.map(item => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              padding: "12px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h4 style={{
              marginTop: "10px",
              fontSize: "16px",
              fontWeight: "600"
            }}>
              {item.title}
            </h4>

            <div style={{ marginTop: "5px" }}>
              <span style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#000"
              }}>
                {formatPrice(item.price)}
              </span>

              <span style={{
                marginLeft: "8px",
                textDecoration: "line-through",
                color: "#888",
                fontSize: "14px"
              }}>
                ₹{(item.price + 500).toLocaleString("en-IN")}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;