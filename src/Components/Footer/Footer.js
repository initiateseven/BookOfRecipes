import './Footer.css';
import React from "react";

function Footer() {
  return (
    <footer >
      <p>&copy; {new Date().getFullYear()} - Book Of Recipes - All rights reserved.</p>
    </footer>
  );
}

export default Footer;