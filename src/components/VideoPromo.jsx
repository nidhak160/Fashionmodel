import React, { useState } from "react";

function VideoPromo() {
  const [hover, setHover] = useState(false);

  const openVideo = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <section
      style={{
        position: "relative",
        height: "620px",
        backgroundImage:
          "url('https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* DARK + GRADIENT OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
        }}
      />

      {/* CONTENT */}
      <div style={{ position: "relative", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "25px",
            fontFamily: "Playfair Display, serif",
            letterSpacing: "2px",
          }}
        >
          Discover Our Fashion Story
        </h2>

        {/* PLAY BUTTON */}
        <div
          onClick={openVideo}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            width: "80px",
            height: "80px",
            margin: "auto",
            borderRadius: "50%",
            background: hover ? "black" : "white",
            color: hover ? "white" : "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "26px",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: hover
              ? "0 0 25px rgba(255,255,255,0.4)"
              : "0 0 15px rgba(0,0,0,0.3)",
          }}
        >
          ▶
        </div>

        <p
          style={{
            marginTop: "20px",
            fontSize: "15px",
            color: "#ddd",
            letterSpacing: "1px",
          }}
        >
          Watch how we craft timeless fashion
        </p>
      </div>
    </section>
  );
}

export default VideoPromo;