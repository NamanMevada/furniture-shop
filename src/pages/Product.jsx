import React from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import product1 from "../assets/pink-armchair-modern-living-room.jpg";
import product2 from "../assets/stylish-cabinet-with-artwork-decor.jpg";
import product3 from "../assets/stylish-mid-century-modern-dresser-with-green-drawers.jpg";
import product4 from "../assets/vertical-shot-wooden-chair-white.jpg";
import product5 from "../assets/four-person-table-front-window-restaurant.jpg";
import product6 from "../assets/mid-century-modern-sideboard-with-coral-drawers.jpg";
import product7 from "../assets/comfortable-pillow-sofa.jpg";
import product8 from "../assets/minimal-living-room-interior-design-with-leaf-shadow-wall.jpg";
import product9 from "../assets/interior-design-with-photoframes-plants.jpg"; 
import product10 from "../assets/color-year-interior-design-space-with-furniture-decor.jpg"

const products = [
  { id: 1, name: "Luxury Armchair", price: "$120", image: product1, description: "A comfy luxury armchair perfect for your living room." },
  { id: 2, name: "Comfort Sofa", price: "$450", image: product7, description: "Spacious and soft sofa for ultimate relaxation." },
  { id: 3, name: "Modern Recliner", price: "$350", image: product8, description: "Stylish recliner with ergonomic design." },
  { id: 4, name: "Soft Sofa", price: "$200", image: product9, description: "Compact siting that fits any corner." },
  { id: 5, name: "Comfort siting", price: "$400", image: product10, description: "Soft sofa with elegant design." },
  { id: 6, name: "Wooden Cabinet", price: "$180", image: product2, description: "Classic wooden cabinet with multiple shelves." },
  { id: 7, name: "Mid-Century Dresser", price: "$300", image: product3, description: "Vintage style dresser for storage and decor." },
  { id: 8, name: "Sideboard with Coral Drawers", price: "$220", image: product6, description: "Modern sideboard with colorful drawers." },
  { id: 9, name: "Minimalist Shelf", price: "$150", image: product2, description: "Simple shelf to organize your space." },
  { id: 10, name: "Storage Unit", price: "$250", image: product3, description: "Functional storage unit with drawers." },
  { id: 11, name: "Classic Wooden Chair", price: "$90", image: product4, description: "Elegant wooden chair for dining or office." },
  { id: 12, name: "Dining Table", price: "$250", image: product5, description: "Sturdy dining table for family meals." },
  { id: 13, name: "Coffee Table", price: "$120", image: product5, description: "Stylish coffee table for living rooms." },
  { id: 14, name: "Side Table", price: "$80", image: product4, description: "Compact side table for small spaces." },
  { id: 15, name: "Bar Stool", price: "$70", image: product5, description: "Modern bar stool for kitchen or bar." },
];

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found!</h2>;
  }

  return (
    <div className="single-product-wrapper">
      <div className="single-product-card">
        <img className="single-product-image" src={product.image} alt={product.name} />
        <div className="single-product-info">
          <h1 className="single-product-name">{product.name}</h1>
          <p className="single-product-price">{product.price}</p>
          <p className="single-product-desc">{product.description}</p>
          <div className="single-product-buttons">
            <button className="single-btn add-to-cart-btn">Add to Cart</button>
            <button className="single-btn buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
