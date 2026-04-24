import React, { useState, useEffect, useContext, useCallback } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const logout = () => {
  localStorage.removeItem("loggedUser");
  navigate("/login");
};

  useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 600);
  const handleScroll = () => setScrolled(window.scrollY > 50);

  handleResize(); // run once

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
    ...(user
      ? [
          { name: "CART", path: "/cart" }
        ]
      : [])
  ];

  

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "18px 5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        transition: "0.3s",
        background: scrolled ? "rgba(223, 213, 213, 0.9)" : "#afa3a3",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        color: scrolled ? "#000" : "#746e6e",
      }}>
  
      <Link
        to="/"
        style={{
          fontSize: "28px",
          fontFamily: "Playfair Display, serif",
          letterSpacing: "3px",
          textDecoration: "none",
          color: "inherit",
        }}>
        KAIRA
      </Link>

      {!isMobile && (
        <nav
          style={{
            display: "flex",
            gap: "35px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{
                textDecoration: "none",
                fontSize: "14px",
                color: "inherit",
                fontWeight: "500",
              }}>
              {item.name}
              {item.name === "CART" && ` (${cart.length})`}
            </Link>
          ))}
        </nav>
      )}

      {!isMobile && (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

          {user ? (
            <button
              onClick={logout}
              style={{
  border: `1px solid ${scrolled ? "#000" : "#fff"}`,
  background: "transparent",
  color: scrolled ? "#000" : "#fff",
  padding: "6px 14px",
  cursor: "pointer",
  marginRight: isMobile ? "0px" : "40px",
  transition: "0.3s"
}}>
              LOGOUT
            </button>
          ) : (
            <Link
              to="/login"
              style={{
  background: scrolled ? "#000" : "#fff",
  color: scrolled ? "#fff" : "#000",
  padding: "6px 14px",
  textDecoration: "none",
  borderRadius: "9px",
  marginRight: "150px",
  transition: "0.3s"
}} >
             LOGIN
            </Link>
          )}
        </div>
      )}

     

      {isMobile && (
        <div onClick={toggleMenu} style={{ fontSize: "24px" }}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      )}
    </header>
  );
}

export default Navbar;