import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/products").then(res => res.json()),
      fetch("http://localhost:5000/newArrivals").then(res => res.json()),
      fetch("http://localhost:5000/bestSelling").then(res => res.json())
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
 

  <div className="shop-container">

    <h2 className="shop-title">ALL PRODUCTS</h2>

    <div className="shop-grid">
      {products.map((product, index) => (
        
        <div
          key={index}
          className="product-card"
          onClick={() => navigate(`/product/${product.id}`)}
        >

         
          {index % 2 === 0 && <div className="product-tag">NEW</div>}

        
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          
          <div className="product-info">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">${product.price}</p>
          </div>

        </div>

      ))}
    </div>
  </div>
);
}

export default Shop;