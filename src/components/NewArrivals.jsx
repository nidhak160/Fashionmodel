import { useEffect, useState } from "react";

function NewArrivals() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newArrivals")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section style={{ padding: "80px 5vw" }}>
      <h2>OUR NEW ARRIVALS</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          marginTop: "40px",
          
        }}
      >
        {items.map(item => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;