import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { fetchJson } from "../utils/api";

function BestSelling() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() => {
    if (typeof window === "undefined") {
      return 1200;
    }

    return window.innerWidth;
  });

  let itemsPerView = 4;

  if (viewportWidth <= 520) {
    itemsPerView = 1;
  } else if (viewportWidth <= 768) {
    itemsPerView = 2;
  } else if (viewportWidth <= 1024) {
    itemsPerView = 3;
  }

  const cardGap = viewportWidth <= 520 ? 12 : viewportWidth <= 768 ? 16 : 24;
  const sectionPadding = viewportWidth <= 520 ? "60px 14px" : "80px 6%";
  const titleSize = viewportWidth <= 520 ? "26px" : "34px";
  const imageHeight =
    viewportWidth <= 520 ? "320px" : viewportWidth <= 768 ? "240px" : "280px";
  const maxIndex = Math.max(products.length - itemsPerView, 0);

  useEffect(() => {
    fetchJson("/bestSelling")
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIndex((currentIndex) => Math.min(currentIndex, maxIndex));
  }, [maxIndex]);

  const next = () => {
    setIndex((currentIndex) => Math.min(currentIndex + 1, maxIndex));
  };

  const prev = () => {
    setIndex((currentIndex) => Math.max(currentIndex - 1, 0));
  };

  return (
    <section
      style={{
        padding: sectionPadding,
        position: "relative",
        background: "#fafafa",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: titleSize,
          marginBottom: "50px",
          fontFamily: "serif",
        }}
      >
        BEST SELLING ITEMS
      </h2>

      {/* LEFT */}
      <button
        onClick={prev}
        disabled={index === 0}
        style={{
          position: "absolute",
          top: "55%",
          left: viewportWidth <= 520 ? "6px" : "10px",
          transform: "translateY(-50%)",
          background: "white",
          border: "none",
          padding: viewportWidth <= 520 ? "10px" : "12px",
          borderRadius: "50%",
          cursor: index === 0 ? "not-allowed" : "pointer",
          zIndex: 10,
          opacity: index === 0 ? 0.45 : 1,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        <FiArrowLeft />
      </button>

      {/* SLIDER */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transition: "0.5s ease",
            transform: `translateX(-${index * (100 / itemsPerView)}%)`,
            margin: `0 -${cardGap / 2}px`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                minWidth: `${100 / itemsPerView}%`,
                padding: `0 ${cardGap / 2}px`,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: viewportWidth <= 520 ? "12px" : "15px",
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: "0 10px 24px rgba(0, 0, 0, 0.05)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: imageHeight,
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <h4
                  style={{
                    margin: "15px 0 5px",
                    fontSize: viewportWidth <= 520 ? "15px" : "16px",
                    lineHeight: "1.4",
                  }}
                >
                  {product.title}
                </h4>
                <p
                  style={{
                    color: "#888",
                    margin: 0,
                    fontSize: viewportWidth <= 520 ? "14px" : "15px",
                  }}
                >
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <button
        onClick={next}
        disabled={index >= maxIndex}
        style={{
          position: "absolute",
          top: "55%",
          right: viewportWidth <= 520 ? "6px" : "10px",
          transform: "translateY(-50%)",
          background: "white",
          border: "none",
          padding: viewportWidth <= 520 ? "10px" : "12px",
          borderRadius: "50%",
          cursor: index >= maxIndex ? "not-allowed" : "pointer",
          zIndex: 10,
          opacity: index >= maxIndex ? 0.45 : 1,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        <FiArrowRight />
      </button>
    </section>
  );
}

export default BestSelling;
