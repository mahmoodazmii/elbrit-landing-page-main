import React from "react";
import feature1 from "../Assets/feature1.png"; // Example image import
import feature2 from "../Assets/feature2.png"; // Example image import
import feature3 from "../Assets/feature3.png"; // Example image import
import feature4 from "../Assets/feature4.png"; // Example image import
import feature5 from "../Assets/feature5.png"; // Example image import
import feature6 from "../Assets/feature6.png"; // Example image import
import "./Features.css";

function Features() {
  return (
    <div className="features-section">
      <div className="custom-product-icons-container">
        <div className="product-icons">
          <div className="icon-item">
            <div className="icon">
              <img src={feature1} alt="Clinically Studied Icon" />
            </div>
            <div className="icon-text">
              <h3>Clinically Studied</h3>
              <p>All products that we offer have</p>
              <p> undergone lab and safety tests.</p>
            </div>
          </div>
          <div className="icon-item">
            <div className="icon">
              <img src={feature2} alt="Vegetarian Friendly Icon" />
            </div>
            <div className="icon-text">
              <h3>Vegetarian Friendly</h3>
              <p>We have a wide selection of vegetarian </p><p> products to meet your needs.</p>
            </div>
          </div>
          <div className="icon-item">
            <div className="icon">
              <img src={feature3} alt="Made in India Icon" />
            </div>
            <div className="icon-text">
              <h3>Made in India</h3>
              <p>Shop local and explore health products</p><p> made right here in India.</p>
            </div>
          </div>
          <div className="icon-item">
            <div className="icon">
              <img src={feature4} alt="Free Shipping Icon" />
            </div>
            <div className="icon-text">
              <h3>Free Shipping</h3>
              <p>We deliver to your door with no </p>
              <p>shipping costs on your orders.</p>
            </div>
          </div>
          <div className="icon-item">
            <div className="icon">
              <img src={feature5} alt="No Risk Icon" />
            </div>
            <div className="icon-text">
              <h3>No Risk</h3>
              <p>We ensure that all products are safe </p>
              <p>and within their usable date.</p>
            </div>
          </div>
          <div className="icon-item">
            <div className="icon">
              <img src={feature6} alt="GMO Free Icon" />
            </div>
            <div className="icon-text">
              <h3>GMO Free</h3>
              <p>Natural, no modified products and </p><p>derivatives for those who need it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
