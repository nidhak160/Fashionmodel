import React from "react";
import bgImage from "../assets/bg.jpg"; 

function Hero() {
  return (
    <section
      style={{
        minHeight: "75vh",
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover",           
        backgroundPosition: "center",      
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        animation: "fadeUp 1.2s ease-out",
        position: "relative",
      }}>
      
     
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(63, 64, 57, 0.1)",
          zIndex: 1,
        }}
      ></div>

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
        `}
      </style>

<div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // Try 0.4 for a clearer image, or 0.6 if text is hard to read
    background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.6))", 
    zIndex: 1,
  }}
></div>

<p
  style={{
    maxWidth: "750px",
    fontSize: "clamp(14px, 2vw, 18px)",
    lineHeight: "1.8",
    color: "#090909", 
    fontWeight: "400",
    letterSpacing: "0.5px" 
  }}
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit...
</p>
    
    </section>
  );
}

export default Hero;