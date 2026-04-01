import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.column}>
          <h2 style={styles.logo}>KAIRA</h2>
          <p style={styles.text}>
            Gravida massa volutpat aenean odio. Amet, turpis erat nullam
            fringilla elementum diam in. Nisi, purus vitae, ultrices nunc.
            Sit ac sit suscipit hendrerit.
          </p>

          <div style={styles.social}>
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaPinterestP />
            <FaInstagram />
          </div>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>QUICK LINKS</h3>
          <ul style={styles.list}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>SINGLE ITEM</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>HELP & INFO</h3>
          <ul style={styles.list}>
            <li>TRACK YOUR ORDER</li>
            <li>RETURNS + EXCHANGES</li>
            <li>SHIPPING + DELIVERY</li>
            <li>CONTACT US</li>
            <li>FAQS</li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>CONTACT US</h3>
          <p style={styles.text}>
            Do you have any questions or suggestions?
          </p>
          <p style={styles.bold}>contact@kaira.com</p>

          <p style={{ ...styles.text, marginTop: "20px" }}>
            Do you need support? Give us a call.
          </p>
          <p style={styles.bold}>+43 720 11 52 78</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#d5cccc",
    padding: "80px 5vw",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
  },
  column: {},
  logo: {
    fontSize: "36px",
    letterSpacing: "2px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "20px",
    letterSpacing: "1px",
  },
  text: {
    color: "#666",
    lineHeight: "1.8",
    fontSize: "14px",
  },
  bold: {
    fontWeight: "600",
    fontSize: "15px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    color: "#444",
    fontSize: "14px",
    lineHeight: "2",
  },
  social: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    fontSize: "16px",
    color: "#555",
    cursor: "pointer",
  },
};

export default Footer;