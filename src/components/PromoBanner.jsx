import React from "react";
import "./PromoBanner.css";

function PromoBanner() {
  return (
    <section className="promo">
      <div className="promo-img">
        <img
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg"
          alt="promo"
        />
      </div>

      <div className="promo-content">
        <h2>CLASSIC WINTER COLLECTION</h2>

        <p>
          Embrace the season with our Classic Winter Collection, where timeless
          design meets everyday comfort. Crafted from high-quality fabrics and
          finished with refined details.
        </p>

        <button>SHOP COLLECTION</button>
      </div>
    </section>
  );
}

export default PromoBanner;