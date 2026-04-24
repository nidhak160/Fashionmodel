import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import outfit1 from "../assets/outfit1.jpg";
import outfit2 from "../assets/outfit2.jpg";
import kurta1 from "../assets/Lakhany Ready to Wear Embroidered Shalwar & Kameez Suit - LGADMAN1025-BROWN.jpg";
import kurta2 from "../assets/Herren Kurta Pyjama Set_ Armani Baumwollmischung, modernes Eid-Outfit.jpg";

function Menspage() {
  const navigate = useNavigate();

  const { cart, addToCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const loggedIn = !!localStorage.getItem("loggedUser");

  const products = [
    { id: 1, brand: "Manyavar", title: "Beige Kurta Set", price: 1800, oldPrice: 2500, image: kurta2 },
    { id: 2, brand: "Fabindia", title: "Brown Kurta", price: 1600, oldPrice: 2200, image: kurta1 },
    { id: 3, brand: "Raymond", title: "Classic Beige Coat", price: 3200, oldPrice: 4200, image: outfit1 },
    { id: 4, brand: "Louis Philippe", title: "Black Casual Suit", price: 2800, oldPrice: 3500, image: outfit2 }
  ];

  return (
    <div style={{ padding: "60px 5vw" }}>

      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "30px",
          fontWeight: "700"
        }}
      >
        Men's Collection
      </h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: "30px"
        }}
      >
        {products.map((p) => {
          const cartItem = cart.find((item) => item.id === p.id);

          return (
            <div
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`, { state: p })}
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: "12px",
                background: "#fff",
                padding: "15px",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >

              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: "320px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f5f5f5",
                  borderRadius: "10px"
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "15px" }}>
                <p style={{ fontSize: "13px", color: "#888" }}>
                  {p.brand}
                </p>

                <h4 style={{ fontSize: "16px", fontWeight: "600" }}>
                  {p.title}
                </h4>

                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <span style={{ fontWeight: "bold" }}>₹{p.price}</span>

                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#aaa"
                    }}
                  >
                    ₹{p.oldPrice}
                  </span>
                </div>

                {/* Cart Button */}
                {loggedIn && (
                  <>
                    {!cartItem ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(p);
                        }}
                        style={{
                          marginTop: "12px",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          background: "#111",
                          color: "#fff",
                          borderRadius: "8px",
                          cursor: "pointer"
                        }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          marginTop: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "12px"
                        }}
                      >
                        <button onClick={() => decreaseQty(p.id)}>-</button>

                        <span>{cartItem.qty || 1}</span>

                        <button onClick={() => increaseQty(p.id)}>+</button>
                      </div>
                    )}
                  </>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menspage;