import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CategorySection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "SHOP FOR MEN",
      path: "/mens",
      image: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg"
    },
    {
      id: 2,
      title: "SHOP FOR WOMEN",
      path: "/womens",
      image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg"
    },
    {
      id: 3,
      title: "SHOP ACCESSORIES",
      path: "/accessories",
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#f8f8f8",
        padding: "100px 5vw"
      }}
    >
      {/* TITLE */}
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <h2
          style={{
            fontSize: "34px",
            letterSpacing: "3px",
            fontWeight: "600"
          }}
        >
          SHOP BY CATEGORY
        </h2>
        <div
          style={{
            width: "70px",
            height: "3px",
            background: "#000",
            margin: "15px auto"
          }}
        />
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}
      >
        {categories.map((item, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "14px",
                cursor: "pointer",

                transform: visible
                  ? "translateY(0)"
                  : "translateY(60px)",

                opacity: visible ? 1 : 0,
                transition: `all 0.8s ease ${index * 0.2}s`,

                boxShadow:
                  hovered === item.id
                    ? "0 25px 50px rgba(0,0,0,0.2)"
                    : "0 10px 25px rgba(0,0,0,0.08)"
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  transform:
                    hovered === item.id ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.6s ease"
                }}
              />

              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    hovered === item.id
                      ? "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                  transition: "0.4s"
                }}
              />

              {/* TEXT */}
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  color: "#fff",
                  letterSpacing: "2px"
                }}
              >
                <div style={{ fontSize: "16px", fontWeight: "600" }}>
                  {item.title}
                </div>

                {/* CTA */}
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "12px",
                    opacity: hovered === item.id ? 1 : 0,
                    transform:
                      hovered === item.id
                        ? "translateY(0)"
                        : "translateY(10px)",
                    transition: "0.3s"
                  }}
                >
                  SHOP NOW →
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategorySection;