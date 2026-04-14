import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        background: "#f4f4f4",
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          background: "#111",
          color: "white",
          padding: "80px 40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Get in Touch
        </h2>

        <p style={{ color: "#aaa", marginBottom: "40px" }}>
          We’re here to help and answer any questions you might have.
        </p>

        <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
          <FiMail />
          <span>support@kaira.com</span>
        </div>

        <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
          <FiPhone />
          <span>+91 98765 43210</span>
        </div>

        <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
          <FiMapPin />
          <span>Chennai, India</span>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          padding: "80px 50px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontSize: "28px" }}>
          Send Message
        </h2>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "14px",
              border: "none",
              borderBottom: "1px solid #ccc",
              outline: "none",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "14px",
              border: "none",
              borderBottom: "1px solid #ccc",
              outline: "none",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            style={{
              padding: "14px",
              border: "none",
              borderBottom: "1px solid #ccc",
              outline: "none",
            }}
          />

          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              marginTop: "20px",
              padding: "14px",
              background: hover ? "#111" : "transparent",
              color: hover ? "white" : "#111",
              border: "1px solid #111",
              cursor: "pointer",
              letterSpacing: "1px",
              transition: "0.3s",
            }}
          >
            SEND MESSAGE →
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;