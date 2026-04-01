import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.newArrivals.find(
          (item) => item.id === Number(id)
        );
        setProduct(found);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!product)
    return (
      <div style={{ padding: "80px" }}>
        <h2>Product not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );

  return (
    <div
      style={{
        padding: "80px",
        display: "flex",
        gap: "60px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        width="400"
        style={{ objectFit: "cover" }}
      />

      <div>
        <h1>{product.title}</h1>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          {product.price}
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            border: "1px solid black",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
