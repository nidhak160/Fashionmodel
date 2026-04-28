import React from "react";
import { FaCalendarAlt, FaShoppingBag, FaGift, FaSyncAlt } from "react-icons/fa";

function Services() {
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
    <section style={{ background: "#f7f7f7", padding: " 0 20px"}}>
     <div
  style={{
    width: "90%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    gap: "20px",   
    flexWrap: "wrap"
  }}
>
        {services.map((item) => (
          <div
  key={item.id}
  style={{
    width: "60%",  
    background: "white",
    padding: "35px 20px",
    textAlign: "center",
    borderRadius: "10px",
    transition: "all 0.4s ease",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    cursor: "pointer"
  }}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.05)";
            }}
          >
            {/* Icon Circle */}
            <div
              style={{
                width: "70px",
                height: "70px",
                margin: "0 auto 25px",
                borderRadius: "50%",
                background: "#d9c7c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                color: "#333",
                transition: "all 0.3s ease"
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: "20px",
                marginBottom: "15px",
                fontWeight: "600"
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "#777",
                lineHeight: "1.7"
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;