import { Link } from "react-router-dom";
import React, { memo, useCallback } from "react";

function Productcard({ product }) {

  const handleClick = useCallback(() => {
   
  }, [product.id]);

  return (
    <Link
      to={`/product/${product.id}`}
      state={product}
      onClick={handleClick}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          padding: "15px",
          border: "1px solid #d7d1d1",
          textAlign: "center",
          background: "#fff",
          borderRadius: "8px",
          transition: "0.3s",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "310px",
            objectFit: "cover",
            marginBottom: "12px",
            borderRadius: "9px",
          }}
        />

        <h4 style={{ fontSize: "15px", marginBottom: "6px" }}>
          {product.title}
        </h4>

        <p style={{ fontSize: "14px", fontWeight: "600" }}>
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default memo(Productcard);
