import React from "react";

function VideoPromo() {

  const openVideo = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <section
      style={{
        position: "relative",
        height: "610px",
        backgroundImage:
          "url('https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)"
        }}/>


      <div style={{ position: "relative", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Discover Our Fashion Story
        </h2>

        <button
          onClick={openVideo}
          style={{
            padding: "15px 30px",
            fontSize: "16px",
            border: "none",
            background: "white",
            color: "black",
            cursor: "pointer"
          }}>

          ▶ Watch Video
        </button>
      </div>
    </section>
  );
}

export default VideoPromo;