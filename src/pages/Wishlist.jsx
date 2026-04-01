import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return <h2 style={{ padding: "40px", textAlign: "center" }}>Wishlist is empty</h2>;
  }

  const containerStyle = {
    padding: "60px 5%",
    background: "#f9f9f9",
  };

  const titleStyle = {
    fontSize: "28px",
    marginBottom: "30px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    border: "1px solid #f2eded",
    transition: "all 0.3s ease",
    height: "300px",
    width:"400px",
  };

  const imgStyle = {
    width: "300",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "12px",
  };

  const titleCard = {
    fontSize: "15px",
    marginBottom: "6px",
  };

  const priceStyle = {
    fontWeight: "600",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>My Wishlist</h2>

      <div style={gridStyle}>
        {wishlist.map((item) => (
          <div
            key={item.id}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <img src={item.image} alt={item.title} style={imgStyle} />
            <h4 style={titleCard}>{item.title}</h4>
            <p style={priceStyle}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;