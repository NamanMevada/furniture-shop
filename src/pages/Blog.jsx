import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Latest Blogs</h1>
      <div className="blog-container">

        <div className="blog-card">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
            alt="Blog 1"
          />
          <h2>Modern Furniture Trends</h2>
          <p>
            Discover the latest styles in furniture design that bring comfort and elegance to your home.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Blog 2"
          />
          <h2>Choosing the Right Sofa</h2>
          <p>
            Learn how to choose the perfect sofa that matches your space and lifestyle.
          </p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
            alt="Blog 3"
          />
          <h2>Wooden Furniture Care</h2>
          <p>
            Tips and tricks for maintaining your wooden furniture and keeping it new for years.
          </p>
          <button>Read More</button>
        </div>

      </div>
    </div>
  );
};

export default Blog;
