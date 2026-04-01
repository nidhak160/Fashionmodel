import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

function Productdetails() {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return <h2 style={{ padding: "100px" }}>Loading...</h2>;
  }

const isWishlisted = wishlist.some(
  item => String(item.id) === String(product.id)
);
  return (
    <div style={{ padding: "100px" }}>
      <h1>{product.title}</h1>

      <img src={product.image} width="300" alt={product.title} />

      <h2>${product.price}</h2>

      <p>{product.description}</p>

     
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        
        <button
          onClick={() => addToCart(product)}
          style={{
            padding: "14px 40px",
            background: "black",
            color: "white",
            cursor: "pointer"
          }}
        >
          ADD TO CART
        </button>

        <div
          onClick={() => toggleWishlist(product)}
          style={{
            fontSize: "28px",
            cursor: "pointer"
          }}
        >
          {isWishlisted ? (
            <FaHeart color="red" />
          ) : (
            <FiHeart />
          )}
        </div>

      </div>
    </div>
  );
}

export default Productdetails;