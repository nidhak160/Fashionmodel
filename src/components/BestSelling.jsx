import { useEffect, useState, useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function BestSelling() {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/bestSelling")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -1000,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>
        {`
          .slider::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <section
        ref={sectionRef}
        style={{
          padding: "80px 5vw",
          position: "relative",
          transform: visible ? "translateX(0)" : "translateX(150px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.8s ease",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          BEST SELLING ITEMS
        </h2>

        <button
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#0f0f0f",
            border: "1px solid #f4f2f2",
            color: "wheat",
            padding: "10px",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <FiArrowLeft />
        </button>

        <div style={{ overflow: "hidden" }}>
          <div
            ref={sliderRef}
            className="slider"
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "scroll",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",   
              msOverflowStyle: "none",  
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  flex: "0 0 25%",
                  maxWidth: "25%",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <h4>{product.title}</h4>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#121111",
            border: "1px solid #f3f1f1",
            color: "wheat",
            padding: "10px",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <FiArrowRight />
        </button>
      </section>
    </>
  );
}

export default BestSelling;