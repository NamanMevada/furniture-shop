import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart, FaEye } from "react-icons/fa";
import product1 from "../assets/pink-armchair-modern-living-room.jpg";
import product7 from "../assets/comfortable-pillow-sofa.jpg";
import product8 from "../assets/minimal-living-room-interior-design-with-leaf-shadow-wall.jpg"
import product9 from "../assets/interior-design-with-photoframes-plants.jpg";
import product10 from "../assets/color-year-interior-design-space-with-furniture-decor.jpg"


import product2 from "../assets/stylish-cabinet-with-artwork-decor.jpg";
import product3 from "../assets/stylish-mid-century-modern-dresser-with-green-drawers.jpg";
import product4 from "../assets/vertical-shot-wooden-chair-white.jpg";
import product5 from "../assets/four-person-table-front-window-restaurant.jpg";
import product6 from "../assets/mid-century-modern-sideboard-with-coral-drawers.jpg";

 // Assuming this is a new product image


const Shop = () => {
  const categories = [
    {
      name: "🛋️ Sofas & Seating",
      description: "Relax in style with our premium sofas and armchairs",
      products: [
        { id: 1, name: "Luxury Armchair", price: "$120", image: product1, badge: "Sale", discount: "-15%" },
        { id: 2, name: "Comfort Sofa", price: "$450", image: product7, rating: 4.5 },
        { id: 3, name: "Modern Recliner", price: "$350", image: product8, rating: 4 },
        { id: 4, name: "Soft Sofa", price: "$200", image: product9 },
        { id: 5, name: "Comfort siting", price: "$400", image: product10 },
      ],
    },
    {
      name: "📦 Storage & Cabinets",
      description: "Organize your home with stylish storage solutions",
      products: [
        { id: 6, name: "Wooden Cabinet", price: "$180", image: product2 },
        { id: 7, name: "Mid-Century Dresser", price: "$300", image: product3, rating: 5 },
        { id: 8, name: "Sideboard with Coral Drawers", price: "$220", image: product6, badge: "New" },
        { id: 9, name: "Minimalist Shelf", price: "$150", image: product2 },
        { id: 10, name: "Storage Unit", price: "$250", image: product3 },
      ],
    },
    {
      name: "🍽️ Tables & Dining",
      description: "Perfect tables for every dining experience",
      products: [
        { id: 11, name: "Classic Wooden Chair", price: "$90", image: product4 },
        { id: 12, name: "Dining Table", price: "$250", image: product5, rating: 4.8 },
        { id: 13, name: "Coffee Table", price: "$120", image: product5 },
        { id: 14, name: "Side Table", price: "$80", image: product4 },
        { id: 15, name: "Bar Stool", price: "$70", image: product5 },
      ],
    },
  ];

  return (
    <div className="shop-wrapper">
      <h1 className="shop-header">✨ Explore Our Shop</h1>
      <p className="shop-description">
        Discover furniture that blends <strong>comfort</strong>, <strong>style</strong>, and <strong>functionality</strong>.
        Upgrade your home with our curated collection.
      </p>

      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <div className="category-intro">
            <h2 className="category-header">{category.name}</h2>
            <p className="category-desc">{category.description}</p>
          </div>

          <div className="product-grid">
            {category.products.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                  {item.badge && <span className="product-badge">{item.badge}</span>}
                  {item.discount && <span className="discount-badge">{item.discount}</span>}

                  {/* Hover icons */}
                  <div className="hover-icons">
                    <FaRegHeart className="icon" title="Add to Wishlist" />
                    <FaEye className="icon" title="Quick View" />
                  </div>
                </div>

                <h3 className="product-title">{item.name}</h3>
                <p className="product-price">{item.price}</p>

                {/* Product rating */}
                {item.rating && (
                  <div className="product-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} className={i < Math.round(item.rating) ? "star filled" : "star"} />
                    ))}
                    <span className="rating-text">{item.rating}</span>
                  </div>
                )}

                <div className="product-actions">
                  <Link to={`/product/${item.id}`} className="btn details-btn">
                    Details
                  </Link>
                  <button className="btn add-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
