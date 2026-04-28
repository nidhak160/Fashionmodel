import React, { useState, useEffect, useContext, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const logout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleResize();
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
    ...(user ? [{ name: "CART", path: "/cart" }] : []),
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className="navbar"
        style={{
          background: scrolled ? "rgba(223,213,213,0.9)" : "#afa3a3",
        }}
      >
        {/* LOGO */}
        <NavLink to="/" className="logo">
          KAIRA
        </NavLink>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <nav className="nav-links">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.name} {item.name === "CART" && `(${cart.length})`}
              </NavLink>
            ))}
          </nav>
        )}

        {/* LOGIN / LOGOUT */}
        {!isMobile && (
          user ? (
            <button className="logout-btn" onClick={logout}>
              LOGOUT
            </button>
          ) : (
            <NavLink to="/login" className="nav-link">
              LOGIN
            </NavLink>
          )
        )}

        {/* MOBILE ICON */}
        {isMobile && (
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        )}
      </header>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.name} {item.name === "CART" && `(${cart.length})`}
            </NavLink>
          ))}

          {user ? (
            <button onClick={logout}>LOGOUT</button>
          ) : (
            <NavLink to="/login" className="nav-link">
              LOGIN
            </NavLink>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;