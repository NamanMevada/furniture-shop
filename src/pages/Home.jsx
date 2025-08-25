import React, { useEffect, useRef, useState } from "react";

import product1 from "../assets/pink-armchair-modern-living-room.jpg";
import product2 from "../assets/stylish-cabinet-with-artwork-decor.jpg";
import product3 from "../assets/stylish-mid-century-modern-dresser-with-green-drawers.jpg";
import product4 from "../assets/vertical-shot-wooden-chair-white.jpg";
import product5 from "../assets/four-person-table-front-window-restaurant.jpg";
import product6 from "../assets/mid-century-modern-sideboard-with-coral-drawers.jpg";
import product7 from "../assets/comfortable-pillow-sofa.jpg";

import "./Home.css";

import { FaLeaf, FaPuzzlePiece, FaHeart, FaLightbulb, FaStar } from "react-icons/fa";

const Home = () => {
  const imagesRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.4,
    });

    if (imagesRef.current) observer.observe(imagesRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imagesRef.current) observer.unobserve(imagesRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      observer.disconnect();
    };
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-31T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;
    timerComponents.push(
      <span key={interval} className="timer-unit">
        <span className="timer-value">{timeLeft[interval]}</span>
        <span className="timer-label">{interval}</span>
      </span>
    );
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span>- New Collection</span>
          <h1>Luxury Furniture for Your Dream Home</h1>
          <p>
            Explore our handpicked selection of timeless pieces that blend
            elegance, comfort, and quality. Designed to transform every corner
            of your home into a luxury space.
          </p>
          <div className="hero-buttons">
            <a href="#shop" className="primary">
              Shop Now
            </a>
            <a href="#about" className="secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-cards-container">
          <div className="info-card">
            <div className="info-icon">
              <FaLeaf />
            </div>
            <h3>NATURAL BEAUTY</h3>
            <p>
              Our designs celebrate the inherent elegance of wood, showcasing
              its unique grain and texture in every piece.
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <FaPuzzlePiece />
            </div>
            <h3>SIMPLE SETUP</h3>
            <p>
              Enjoy your new furniture quickly with our intuitive assembly
              process, designed for ease and convenience.
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <FaHeart />
            </div>
            <h3>CRAFTED WITH CARE</h3>
            <p>
              Each piece is made with meticulous attention to detail, ensuring
              lasting quality and enduring style for your home.
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <FaLightbulb />
            </div>
            <h3>INNOVATIVE DESIGN</h3>
            <p>
              We blend modern aesthetics with practical functionality to create
              furniture that truly enhances your living space.
            </p>
          </div>
        </div>
        <p className="info-extra">
          ✅ Free Worldwide Shipping | ✅ 24/7 Customer Support | ✅ 10-Year Warranty on All Products
        </p>
      </section>

      {/* Discount Section */}
      <section className="running-discount">
        <div className="marquee">
          <span>🔥 Big Season Sale – Flat 50% OFF on Modern Furniture 🔥</span>
          <span>🔥 Limited Time – Extra 10% OFF for New Customers 🔥</span>
          <span>🔥 Free Delivery on Orders Above $100 🔥</span>
        </div>
        <div className="discount-timer">
          {timerComponents.length ? (
            <>
              <h4>⏳ Hurry! Offer Ends In:</h4>
              {timerComponents}
            </>
          ) : (
            <p>Sale has ended!</p>
          )}
        </div>
      </section>

      {/* Modern Interior Section */}
      <section className="interior-section">
        <div className="interior-container">
          <div className="interior-images" ref={imagesRef}>
            <img src={product1} alt="Living Room" className="img-large" />
            <img src={product2} alt="Office" className="img-small" />
            <div className="img-medium-wrapper">
              <img src={product3} alt="Stool" className="img-medium" />
            </div>
          </div>
          <div className="interior-text" ref={textRef}>
            <h2>We Help You Make Modern Interior Design</h2>
            <p>
              Discover furniture that combines comfort, durability, and modern
              design. From living rooms to bedrooms, we bring elegance to every
              space.
            </p>
            <div className="interior-list">
              <ul>
                <li>Premium quality materials with lasting durability</li>
                <li>Elegant designs that fit every lifestyle</li>
                <li>Eco-friendly wood & fabrics</li>
              </ul>
              <ul>
                <li>Affordable luxury for your dream home</li>
                <li>Furniture crafted for comfort and style</li>
                <li>Designed by award-winning designers</li>
              </ul>
            </div>
            <button className="interior-btn">Explore</button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section" id="shop">
        <h2 className="featured-title">Featured Products</h2>
        <p className="featured-subtitle">
          Handpicked favorites to style your dream home
        </p>
        <div className="featured-container">
          <div className="product-details">
            <img src={product4} alt="Modern Chair" />
            <h3 className="product-name">Modern Armchair</h3>
            <p className="product-price">$120</p>
            <p className="product-desc">Ergonomic design with premium cushioning.</p>
            <p className="product-stock">In Stock</p>
            <div className="product-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <button className="product-btn">View Details</button>
          </div>
          <div className="product-details">
            <img src={product5} alt="Cabinet" />
            <h3 className="product-name">Dining Table</h3>
            <p className="product-price">$250</p>
            <p className="product-desc">Solid oak wood with a modern finish.</p>
            <p className="product-stock">Limited Stock</p>
            <div className="product-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <button className="product-btn">View Details</button>
          </div>
          <div className="product-details">
            <img src={product6} alt="Dresser" />
            <h3 className="product-name">Mid-Century Dresser</h3>
            <p className="product-price">$300</p>
            <p className="product-desc">Vintage-inspired with spacious drawers.</p>
            <p className="product-stock">In Stock</p>
            <div className="product-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <button className="product-btn">View Details</button>
          </div>
          <div className="product-details">
            <img src={product7} alt="Luxury Sofa" />
            <h3 className="product-name">Luxury Sofa</h3>
            <p className="product-price">$450</p>
            <p className="product-desc">Comfort redefined with premium fabric.</p>
            <p className="product-stock">Pre-Order</p>
            <div className="product-rating"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <button className="product-btn">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
