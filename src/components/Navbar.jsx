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
      <header
        className="navbar"
        style={{
          background: scrolled ? "rgba(223,213,213,0.9)" : "#afa3a3",
        }}>
        <div className="navbar-left">
          <NavLink to="/" className="logo">
            KAIRA
          </NavLink>
        </div>

        {!isMobile && (
          <>
            <nav className="nav-links navbar-center">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                  {item.name} {item.name === "CART" && `(${cart.length})`}
                </NavLink>
              ))}
            </nav>

            <div className="navbar-right">
              {user ? (
                <button className="auth-btn logout-btn" onClick={logout}>
                  LOGOUT
                </button>
              ) : (
                <NavLink to="/login" className="auth-btn">
                  LOGIN
                </NavLink>
              )}
            </div>
          </>
        )}

        {isMobile && (
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        )}
      </header>

      {isMobile && menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name} {item.name === "CART" && `(${cart.length})`}
            </NavLink>
          ))}

          {user ? (
            <button
              className="auth-btn logout-btn"
              onClick={() => {
                setMenuOpen(false);
                logout();
              }}>
              LOGOUT
            </button>
          ) : (
            <NavLink
              to="/login"
              className="auth-btn"
              onClick={() => setMenuOpen(false)}
            >
              LOGIN
            </NavLink>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
