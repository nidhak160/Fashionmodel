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
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: 3,
    title: "SHOP ACCESSORIES",
    path: "/accessories",
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg"
  }
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
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
    background: "#f9f9f9",
    padding: "100px 5vw",
    position: "relative",
    zIndex: 1
  }}
>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "32px", letterSpacing: "2px" }}>
          SHOP BY CATEGORY
        </h2>
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "black",
            margin: "15px auto"
          }}
        />
      </div>

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
                borderRadius: "16px",
                cursor: "pointer",

                transform: visible
                  ? "translateX(0) rotate(0deg)"
                  : fromLeft
                  ? "translateX(-120px) rotate(-5deg)"
                  : "translateX(120px) rotate(5deg)",

                opacity: visible ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${
                  index * 0.2
                }s`,

                boxShadow:
                  hovered === item.id
                    ? "0 25px 50px rgba(0,0,0,0.18)"
                    : "0 8px 20px rgba(0,0,0,0.08)"
              }}
            >
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

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    hovered === item.id
                      ? "rgba(0,0,0,0.45)"
                      : "rgba(0,0,0,0.25)",
                  transition: "0.4s ease"
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  letterSpacing: "2px",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategorySection;