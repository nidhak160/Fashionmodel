import React from "react";
import bgImage from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        padding: "0 8%",
        position: "relative",
       marginTop: "-100px"
      }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1))",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "500px",
          color: "#fff",
          animation: "fadeUp 1s ease-out",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 70px)",
            fontWeight: "600",
            letterSpacing: "4px",
            marginBottom: "15px",
          }}>
          NEW COLLECTION
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            marginBottom: "25px",
            color: "#eee",
          }}>
          Discover timeless fashion designed for modern elegance.
        </p>

        <button
          className="hero-shop-btn"
          onClick={() => navigate("/shop")}
          style={{
            padding: "12px 30px",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
            letterSpacing: "1px",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          SHOP NOW
        </button>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-shop-btn {
            background: #fff;
            color: #000;
          }

          .hero-shop-btn:hover {
            background: #000;
            color: #fff;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
