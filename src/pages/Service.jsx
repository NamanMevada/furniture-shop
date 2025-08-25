import React from "react";
import "./Service.css";
import { FaCouch, FaTruck, FaTools, FaSmile } from "react-icons/fa";

const Service = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Our Services</h1>
          <p>
            From design to delivery – we provide premium services to make your
            home beautiful, functional, and comfortable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="service-card">
          <FaCouch className="service-icon" />
          <h3>Custom Furniture</h3>
          <p>
            Tailored designs crafted to match your style, space, and
            personality. Build your dream furniture with us.
          </p>
        </div>
        <div className="service-card">
          <FaTruck className="service-icon" />
          <h3>Fast Delivery</h3>
          <p>
            Get your orders delivered safely and quickly to your doorstep with
            hassle-free tracking.
          </p>
        </div>
        <div className="service-card">
          <FaTools className="service-icon" />
          <h3>Assembly Support</h3>
          <p>
            We offer easy installation and on-demand assembly services to make
            setup smooth and stress-free.
          </p>
        </div>
        <div className="service-card">
          <FaSmile className="service-icon" />
          <h3>Customer Care</h3>
          <p>
            Our support team is available 24/7 to assist you with queries,
            replacements, or guidance.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="why-content">
          <h2>Why Choose Us?</h2>
          <p>
            With a focus on craftsmanship, durability, and design, we bring you
            furniture that transforms houses into homes. Our services are
            designed to ensure a seamless experience, from shopping to setup.
          </p>
          <ul>
            <li>✅ Premium materials with a quality guarantee</li>
            <li>✅ Free design consultation</li>
            <li>✅ Easy returns and replacements</li>
            <li>✅ Affordable luxury for every budget</li>
          </ul>
        </div>
        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a2e60"
            alt="Modern interior service"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="service-cta">
        <h2>Ready to Transform Your Home?</h2>
        <p>
          Discover comfort and style with our premium services – crafted for
          modern living.
        </p>
        <button className="cta-btn">Get Started</button>
      </section>
    </div>
  );
};

export default Service;
