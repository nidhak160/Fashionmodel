import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaShoppingBag, FaGift, FaSyncAlt } from "react-icons/fa";

function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaCalendarAlt />,
      title: "Book An Appointment",
      desc: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    },
    {
      id: 2,
      icon: <FaShoppingBag />,
      title: "Pick Up In Store",
      desc: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    },
    {
      id: 3,
      icon: <FaGift />,
      title: "Special Packaging",
      desc: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    },
    {
      id: 4,
      icon: <FaSyncAlt />,
      title: "Free Global Returns",
      desc: "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
    }
  ];

  return (
    <section style={{ background: "#f7f7f7", padding: "20px" }}>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>
        {services.map((item) => (
          <div
            key={item.id}
            style={{
              width: isMobile ? "100%" : "22%",
              background: "white",
              padding: "35px 20px",
              textAlign: "center",
              borderRadius: "10px",
              transition: "all 0.4s ease",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(0,0,0,0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(0,0,0,0.05)";
              }
            }} >
            <div
              style={{
                width: isMobile ? "60px" : "70px",
                height: isMobile ? "60px" : "70px",
                margin: "0 auto 25px",
                borderRadius: "50%",
                background: "#d9c7c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "22px" : "28px",
                color: "#333"
              }} >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: isMobile ? "18px" : "20px",
                marginBottom: "15px",
                fontWeight: "600"
              }} >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: isMobile ? "13px" : "14px",
                color: "#777",
                lineHeight: "1.7"
              }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;