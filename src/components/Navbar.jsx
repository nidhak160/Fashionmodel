import React, { useState, useEffect, useContext, useCallback } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const logout = () => {
  localStorage.removeItem("loggedUser");
  navigate("/login");
  window.location.reload();
};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const navItems = [
  { name: "HOME", path: "/" },
  { name: "SHOP", path: "/shop" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT US", path: "/contact" },
  ...(user ? [
    { name: "WISHLIST", path: "/wishlist" },
    { name: "CART", path: "/cart" }
  ] : [])
];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() === "") return;

    navigate(`/shop?search=${searchText}`);
    setShowSearch(false);
    setSearchText("");
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 5vw",
        background: "#bcbcaa",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>

      <Link
        to="/"
        style={{
          fontSize: "28px",
          fontFamily: "Georgia, serif",
          letterSpacing: "2px",
          textDecoration: "none",
          color: "black"
        }}>

        KAIRA
      </Link>

      {!isMobile && (
        <nav
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)"
          }}>

          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                textDecoration: "none",
                fontSize: "14px",
                color: "black",
                fontWeight: "500"
              }}>

              {item.name}
              {item.name === "WISHLIST" && ` (${wishlist.length})`}
              {item.name === "CART" && ` (${cart.length})`}
            </Link>
          ))}
        </nav>
      )}


      

      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

          <FiSearch
            onClick={() => setShowSearch(!showSearch)}
            style={{ fontSize: "20px", cursor: "pointer" }}/>

          {user ? (
            <button
              onClick={logout}
              style={{
                padding: "6px 14px",
                border: "1px solid black",
                background: "transparent",
                cursor: "pointer",
                borderRadius: "4px"
              }}
            >
              LOGOUT
            </button>
          ) : (
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                fontSize: "14px",
                padding: "6px 14px",
                border: "1px solid black",
                borderRadius: "4px",
                color: "black",
                fontWeight: "500"
              }}
            >
              LOGIN
            </Link>
          )}

        </div>
      )}

      {showSearch && (
        <form
          onSubmit={handleSearch}
          style={{
            position: "absolute",
            top: "70px",
            right: "5vw",
            background: "white",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>
            
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              padding: "8px",
              width: "200px",
              border: "1px solid #ccc",
              outline: "none"
            }}
          />
        </form>
      )}

      {isMobile && (
        <div onClick={toggleMenu} style={{ fontSize: "26px", cursor: "pointer" }}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      )}

    </header>
  );
}

export default Navbar;