import React, { useEffect, useState } from "react";

function Shop() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/products").then(res => res.json()),
      fetch("http://localhost:3000/newArrivals").then(res => res.json()),
      fetch("http://localhost:3000/bestSelling").then(res => res.json())
    ])
      .then(([productsData, newArrivalsData, bestSellingData]) => {

        // 🔥 Merge all data
        const allProducts = [
          ...productsData,
          ...newArrivalsData,
          ...bestSellingData
        ];

        setProducts(allProducts);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "60px 5vw" }}>

      <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
        All Products
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
        gap: "30px"
      }}>

        {products.map((product, index) => (

          <div key={index} style={{
            border: "1px solid #e6e6e6",
            borderRadius: "12px",
            padding: "15px",
            background: "#fff",
            textAlign: "center"
          }}>

            {/* Image */}
            <div style={{
              height: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#f5f5f5",
              borderRadius: "10px"
            }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain"
                }}
              />
            </div>

            <h4 style={{ marginTop: "10px" }}>
              {product.title}
            </h4>

            <p style={{ fontWeight: "bold" }}>
              {product.price}
            </p>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Shop;