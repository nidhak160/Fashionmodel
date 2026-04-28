import React, { useEffect, useState } from "react";
import "./Collection.css";
import { fetchJson } from "../utils/api";

function Collection() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchJson("/collections")
      .then((data) => setCollections(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [collections]); // important: run after cards render

  return (
    <section className="collection-section">
      <div className="container">
        {collections.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="discover-btn">DISCOVER NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;
