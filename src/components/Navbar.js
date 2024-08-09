import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'



function Navbar() {
  const location = useLocation()

  return (
    <div className="navbar">    
      <Link to="/" className={`navlink ${location.pathname === '/' ? "active" : ''}`}>Home</Link>
      <Link to="/about" className={`navlink ${location.pathname === '/about' ? "active" : ''}`}>About</Link>
      <Link to="/projects" className={`navlink ${location.pathname === '/projects' ? "active" : ''}`}>Projects</Link>
      <Link to="/blog" className={`navlink ${location.pathname === '/blog' ? "active" : ''}`}>Blog</Link>
      <Link to="/contacts" className={`navlink ${location.pathname === '/contacts' ? "active" : ''}`}>Contacts</Link>
    </div>
  );
}

export default Navbar;
