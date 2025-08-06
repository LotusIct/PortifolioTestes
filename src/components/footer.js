import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-brand">
          <img src="/path/to/logo.png" alt="Logo" className="footer-logo" />
          <span className="footer-name">YourBrand</span>
        </div>

        <div className="footer-text">
          <p>Construindo conexões que fazem a diferença.</p>
        </div>
      </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
