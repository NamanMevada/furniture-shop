import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import favicon128 from "./assets/living-room.png"; // your high-res PNG

// Function to set favicon dynamically
const setFavicon = (url, size = 32) => {
  const head = document.getElementsByTagName("head")[0];

  // Remove existing favicons
  const existingIcons = document.querySelectorAll("link[rel~='icon']");
  existingIcons.forEach(icon => head.removeChild(icon));

  // Create new favicon
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.sizes = `${size}x${size}`;
  link.href = url;
  head.appendChild(link);
};

// Set favicon for standard and retina screens
setFavicon(favicon128, 32);
setFavicon(favicon128, 128);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
