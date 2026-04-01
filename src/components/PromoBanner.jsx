import React, { useState, useEffect } from "react";

function PromoBanner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "30px" : "80px",
        background: "#f8f8f8",
        gap: "40px",
        alignItems: "center",
      }}>
      <img
        src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg"
        alt="promo"
        style={{
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "300px" : "auto",
          objectFit: "cover",
        }}/>

      <div style={{ width: isMobile ? "100%" : "50%" }}>
        <h2
          style={{
            fontSize: isMobile ? "28px" : "50px",
            fontFamily: "Georgia",
          }}>

          CLASSIC WINTER COLLECTION
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "gray",
            fontSize: isMobile ? "14px" : "17px",
          }}>

          Embrace the season with our Classic Winter Collection, where timeless
          design meets everyday comfort. Crafted from high-quality fabrics and
          finished with refined details, each piece is designed to keep you warm
          while maintaining a sophisticated look.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: isMobile ? "100%" : "auto",
          }}>
            
          SHOP COLLECTION
        </button>
      </div>
    </section>
  );
}

export default PromoBanner;