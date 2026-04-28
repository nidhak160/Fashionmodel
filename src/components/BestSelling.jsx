import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { fetchJson } from "../utils/api";

function BestSelling() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  const itemsPerView = 4; 

  useEffect(() => {
    fetchJson("/bestSelling")
      .then((data) => setProducts(data));
  }, []);

  const next = () => {
    if (index < products.length - itemsPerView) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section
      style={{
        padding: "80px 6%",
        position: "relative",
        background: "#fafafa",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "34px",
          marginBottom: "50px",
          fontFamily: "serif",
        }}
      >
        BEST SELLING ITEMS
      </h2>

      {/* LEFT */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "55%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "white",
          border: "none",
          padding: "12px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        <FiArrowLeft />
      </button>

      {/* SLIDER */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "25px",
            transition: "0.5s ease",
            transform: `translateX(-${index * 25}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                minWidth: "25%",
                background: "#fff",
                padding: "15px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                }}
              />
              <h4 style={{ margin: "15px 0 5px" }}>
                {product.title}
              </h4>
              <p style={{ color: "#888" }}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "55%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "white",
          border: "none",
          padding: "12px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        <FiArrowRight />
      </button>
    </section>
  );
}

export default BestSelling;
