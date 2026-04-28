import { useEffect, useRef, useState } from "react";
import ProductCard from "./Productcard";
import { useSearchParams } from "react-router-dom";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
  fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data);

      localStorage.setItem("products", JSON.stringify(data));
    });
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "60px 5vw",
        overflow: "hidden"
      }}
    >

      <h2
        style={{
          fontSize: "28px",
          marginBottom: "40px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        FEATURED PRODUCTS
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {filteredProducts.slice(0, 4).map((product, index) => (
          <div
            key={product.id}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0) scale(1)"
                : "translateY(40px) scale(0.95)",
              transition: "all 0.8s ease",
              transitionDelay: `${index * 120}ms`,
              cursor: "pointer"
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default ProductList;
