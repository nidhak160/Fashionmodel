import React from "react";
import {FaFacebookF,FaTwitter,FaYoutube,FaPinterestP,FaInstagram,} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="logo">KAIRA</h2>
          <p>
            Gravida massa volutpat aenean odio. Amet, turpis erat nullam
            fringilla elementum diam in.
          </p>

          <div className="social">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaPinterestP />
            <FaInstagram />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Single Item</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>HELP & INFO</h3>
          <ul>
            <li>Track Your Order</li>
            <li>Returns + Exchanges</li>
            <li>Shipping + Delivery</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 4 */}
       <div className="footer-col">
  <h3>CONTACT US</h3>
  <p>Do you have any questions?</p>
  <p className="bold">contact@kaira.com</p>

  <p className="mt">Need support? Call us.</p>
  <p className="bold">+43 720 11 52 78</p>
</div>

      </div>
    </footer>
  );
}

export default Footer;