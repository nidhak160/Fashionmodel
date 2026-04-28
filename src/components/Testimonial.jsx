import React, { useState, useEffect } from "react";

function Testimonial() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        padding: isMobile ? "60px 20px" : "120px 60px",
        textAlign: "center",
        background: "#f5f5f3",
      }}
    >
      <h4
        style={{
          letterSpacing: "2px",
          fontSize: isMobile ? "12px" : "16px",
        }}
      >
        WE LOVE GOOD COMPLIMENT
      </h4>

      <h2
        style={{
          fontSize: isMobile ? "24px" : "50px",
          fontFamily: "Georgia",
          fontWeight: "300",
          marginTop: "30px",
          color: "gray",
          lineHeight: "1.4",
        }}
      >
        “Best fitted white denim shirt <br />
        more white denim than expected <br />
        flexible crazy soft.”
      </h2>

      <p
        style={{
          marginTop: "25px",
          color: "gray",
          fontSize: isMobile ? "14px" : "16px",
        }}
      >
        DENIM CRAZE
      </p>
    </section>
  );
}

export default Testimonial;