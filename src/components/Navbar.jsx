import React from "react";
import "./Navbar.css";
import { FaSearch, FaUser, FaRegHeart, FaShoppingBag, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";  // 👈 import Link
import mylogo from "../assets/living-room.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={mylogo} alt="Logo Icon" className="logo-icon" />
        <p className="logo-text">
          Furneo
          <br />
          <span className="logo-subtext">WHERE HOMES BEGIN.</span>
        </p>
      </div>

      <div className="categories">
        <FaBars className="menu-icon" />
        <span>ALL CATEGORIES</span>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="ENTER YOUR KEYWORD" />
        <button>
          <FaSearch />
        </button>
      </div>

      {/* Nav Links with Router */}
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/shop">SHOP</Link></li>
        <li><Link to="/product/1">PRODUCT</Link></li> 
        <li><Link to="/service">SERVICE</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
      </ul>

      <div className="navbar-icons">
        <div className="icon-circle"><FaUser /></div>
        <div className="icon-circle"><FaRegHeart /><span className="badge">0</span></div>
        <div className="icon-circle black"><FaShoppingBag /><span className="badge yellow">0</span></div>
      </div>
    </nav>
  );
}

export default Navbar;
