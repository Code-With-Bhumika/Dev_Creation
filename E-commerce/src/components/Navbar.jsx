import React, { useState } from 'react';
import './Navbar.css';
import devLogo2 from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">

          {/* Desktop Nav Links */}
          <div className="one py-25 font-medium hidden sm:block">
            <ul className="nav-links">
              <li onClick={()=>navigate("/")}>Home</li>
              <li onClick={()=>navigate("/products")}>Shop</li>
              <li onClick={()=>navigate("/products")}>Categories</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Mobile Nav Links (Hamburger Menu) */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="hamburger-menu">
              {isMobileMenuOpen ? "X" : "☰"} {/* Toggle between Hamburger and Close */}
            </button>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Logo */}
          <div className="logo">
            <a href="#">
              <img src={devLogo2} alt="Dev Creations Logo" />
            </a>
          </div>

          {/* Search Bar */}
          <div className="search-bar w-[15rem] hidden sm:block">
            <input 
              type="text" 
              placeholder="Search products..." 
            />
          </div>

          {/* Nav Icons */}
          <div className="nav-icons">
            <a href="#" className="icon cart">🛒</a>
            <a href="#" onClick={()=>navigate("/signup")} className="icon profile">👤</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
