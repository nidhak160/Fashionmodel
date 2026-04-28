import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import { fetchJson } from "../utils/api";

function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const formatPrice = (price) => {
    if (typeof price === "number") {
      return `\u20B9${price}`;
    }

    if (typeof price === "string") {
      const numeric = Number(price.replace(/[^0-9.]/g, ""));

      if (!Number.isNaN(numeric) && numeric > 0) {
        return `\u20B9${Math.round(numeric * 83)}`;
      }

      return price;
    }

    return "\u20B90";
  };

  const getRating = (index) => (3.9 + (index % 5) * 0.1).toFixed(1);
  const getReviews = (index) => `${7800 + index * 1379} Reviews`;

  useEffect(() => {
    Promise.all([
      fetchJson("/products"),
      fetchJson("/newArrivals"),
      fetchJson("/bestSelling")
    ])
      .then(([productsData, newArrivalsData, bestSellingData]) => {

        const allProducts = [
          ...productsData,
          ...newArrivalsData,
          ...bestSellingData
        ];

        setProducts(allProducts);
      })
      .catch(err => console.log(err));
  }, []);

  return (
  <>
    <h2 className="shop-title">ALL PRODUCTS</h2>

    <div className="shop-grid">
      {products.map((product, index) => (
        <div
          key={`${product.id}-${index}`}
          className="product-card"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {index % 2 === 0 && <div className="product-tag">NEW</div>}

          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-info">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">{formatPrice(product.price)}</p>

            <div className="product-meta">
              <span className="product-rating">
                {getRating(index)} ★
              </span>
              <span className="product-reviews">
                {getReviews(index)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
}

export default Shop;
