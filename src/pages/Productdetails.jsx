import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Productdetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return (
      <h2 style={{ padding: "100px", textAlign: "center" }}>
        Loading...
      </h2>
    );
  }

  return (
    <section
      style={{
        padding: "80px 8%",
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        alignItems: "center",
      }}
    >
      {/* IMAGE */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* DETAILS */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "20px",
            fontFamily: "serif",
          }}
        >
          {product.title}
        </h1>

        <h2 style={{ marginBottom: "20px" }}>
          ₹{product.price}
        </h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          {product.description}
        </p>
      </div>
    </section>
  );
}

export default Productdetails;