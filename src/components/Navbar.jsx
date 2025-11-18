import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaUser, FaRegHeart, FaShoppingBag, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import mylogo from "../assets/living-room.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  const categories = [
    "Living Room",
    "Bedroom",
    "Office Furniture",
    "Outdoor",
    "Kitchen Furniture",
    "Storage"
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const toggleMobileCategories = () => {
    setMobileCategoriesOpen(!mobileCategoriesOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileCategoriesOpen(false);
  };

  const handleCategoryClick = () => {
    setCategoriesOpen(false);
    setMobileCategoriesOpen(false);
    closeMobileMenu();
  };

  return (
    <>
      <nav className="navbar">
        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <FaBars />
        </div>

        {/* Logo */}
        <div className="navbar-logo">
          <img src={mylogo} alt="Logo Icon" className="logo-icon" />
          <p className="logo-text">
            Furneo
            <br />
            <span className="logo-subtext">WHERE HOMES BEGIN.</span>
          </p>
        </div>

        {/* Categories - Hidden on mobile */}
        <div className="categories-wrapper desktop-only">
          <div className="categories" onClick={toggleCategories}>
            <FaBars className="menu-icon" />
            <span>ALL CATEGORIES</span>
            <FaChevronDown className={`chevron ${categoriesOpen ? 'rotate' : ''}`} />
          </div>
          
          {/* Desktop Dropdown */}
          {categoriesOpen && (
            <div className="categories-dropdown">
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setCategoriesOpen(false)}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Search Bar - Desktop */}
        <div className="search-bar desktop-only">
          <input type="text" placeholder="ENTER YOUR KEYWORD" />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <ul className="navbar-links desktop-only">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/product/1">PRODUCT</Link></li>
          <li><Link to="/service">SERVICE</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
        </ul>

        {/* Icons */}
        <div className="navbar-icons">
          <div className="icon-circle mobile-search" onClick={toggleSearch}>
            <FaSearch />
          </div>
          <div className="icon-circle desktop-only">
            <FaUser />
          </div>
          <div className="icon-circle desktop-only">
            <FaRegHeart />
            <span className="badge">0</span>
          </div>
          <div className="icon-circle black">
            <FaShoppingBag />
            <span className="badge yellow">0</span>
          </div>
        </div>
      </nav>

      {/* Categories Dropdown Overlay for Desktop */}
      {categoriesOpen && (
        <div className="categories-backdrop" onClick={() => setCategoriesOpen(false)}></div>
      )}

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="mobile-search-bar">
          <input type="text" placeholder="ENTER YOUR KEYWORD" autoFocus />
          <button onClick={toggleSearch}>
            <FaTimes />
          </button>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <img src={mylogo} alt="Logo Icon" />
            <span>Furneo</span>
          </div>
          <FaTimes className="close-menu" onClick={toggleMobileMenu} />
        </div>

        <ul className="mobile-menu-links">
          <li><Link to="/" onClick={closeMobileMenu}>HOME</Link></li>
          <li><Link to="/shop" onClick={closeMobileMenu}>SHOP</Link></li>
          <li><Link to="/product/1" onClick={closeMobileMenu}>PRODUCT</Link></li>
          <li><Link to="/service" onClick={closeMobileMenu}>SERVICE</Link></li>
          <li><Link to="/blog" onClick={closeMobileMenu}>BLOG</Link></li>
        </ul>

        <div className="mobile-menu-bottom">
          <button className="mobile-categories" onClick={toggleMobileCategories}>
            <FaBars />
            <span>ALL CATEGORIES</span>
            <FaChevronDown className={`chevron ${mobileCategoriesOpen ? 'rotate' : ''}`} />
          </button>
          
          {/* Mobile Categories Dropdown */}
          {mobileCategoriesOpen && (
            <div className="mobile-categories-dropdown">
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} onClick={handleCategoryClick}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mobile-menu-icons">
            <Link to="/account" onClick={closeMobileMenu}>
              <FaUser />
              <span>Account</span>
            </Link>
            <Link to="/wishlist" onClick={closeMobileMenu}>
              <FaRegHeart />
              <span>Wishlist</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay Background */}
      {mobileMenuOpen && (
        <div className="overlay-backdrop" onClick={toggleMobileMenu}></div>
      )}
    </>
  );
}

export default Navbar;