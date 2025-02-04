import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Estilização do Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">KR</div> {/* Seu logo */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
