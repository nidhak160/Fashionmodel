import React from "react";

function Contact() {
  return (
    <div
      style={{
        minHeight: "80vh",
        background: "#f5f5f3",
        padding: "80px 5vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          padding: "50px"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "32px",
            letterSpacing: "1px"
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px"
          }}
        >
          If you have any questions feel free to contact us
        </p>

        <div
          style={{
            display: "flex",
            gap: "40px",
            flexWrap: "wrap"
          }}
        >
          
          {/* Contact Info */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <h3 style={{ marginBottom: "20px" }}>Contact Information</h3>

            <p style={{ marginBottom: "10px" }}>
              <strong>Email:</strong> support@kaira.com
            </p>

            <p style={{ marginBottom: "10px" }}>
              <strong>Phone:</strong> +91 98765 43210
            </p>

            <p style={{ marginBottom: "10px" }}>
              <strong>Address:</strong> Chennai, India
            </p>
          </div>

          {/* Contact Form */}
          <form
            style={{
              flex: "1",
              minWidth: "250px",
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px"
              }}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px"
              }}
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              style={{
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px"
              }}
            ></textarea>

            <button
              style={{
                padding: "12px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              SEND MESSAGE
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;