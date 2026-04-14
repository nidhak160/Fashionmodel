import { React,useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


import outfit1 from "../assets/outfit1.jpg";
import outfit2 from "../assets/outfit2.jpg";
import kurta1 from "../assets/Lakhany Ready to Wear Embroidered Shalwar & Kameez Suit - LGADMAN1025-BROWN.jpg";
import kurta2 from "../assets/Herren Kurta Pyjama Set_ Armani Baumwollmischung, modernes Eid-Outfit.jpg";

function Menspage() {

  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedUser"));
  const products = [
    { id: 1, title: "Beige Kurta Set", price: 1800, image: kurta2 },
    { id: 2, title: "Brown Kurta", price: 1600, image: kurta1 },
    { id: 3, title: "Classic Beige Coat", price: 3200, image: outfit1 },
    { id: 4, title: "Black Casual Suit", price: 2800, image: outfit2 }
  ];

  return (
    <div style={{ padding: "60px 5vw" }}>

      <h2>Men's Collection</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
        gap: "30px"
      }}>

        {products.map((p) => (

          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`, { state: p })}
            style={{
              border: "1px solid #e6e6e6",
              borderRadius: "12px",
              background: "#fff",
              padding: "15px",
              textAlign: "center",
              cursor: "pointer"
            }}>

            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h4>{p.title}</h4>
            <p>₹{p.price}</p>

            {isLoggedIn && (
              <button
  onClick={(e) => {
    e.stopPropagation();
    console.log("ADDING:", p);
    addToCart(p);
  }}
>
  Add to Cart
</button>
            )}

          </div>

        ))}

      </div>
    </div>
  );
}

export default Menspage;