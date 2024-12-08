import React from "react";
import "./Header.css";

import f2Icon from "../Assets/f2-1.png.png"; // Ensure file name is correct
import aIcon from "../Assets/a.PNG"
import bIcon from "../Assets/b.PNG"
import cIcon from "../Assets/c.PNG"
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Essential Vitamins</h1>
        <div className="header-grid">
          {/* First Column: Description */}
          <div className="header-description">
            <p className="subheading">Online Medical Supplies</p>
            <p className="description" style={{ color: "#193f51" }}>
              Get Your Vitamins & Minerals
            </p>

            
            <button className="cta-button">Explore</button>
          </div>

          {/* Second Column: Image */}
          <div className="header-image">
            <img
              src={f2Icon}
              alt="Probiotics Bottle"
              className="main-product"
            />
          </div>

          {/* Third Column: Icons */}
          <div className="product-icons">
            <div className="icon-item">
              <div className="icon">
                <img src={aIcon} alt="Vitamins Icon" />
              </div>
              <div className="icon-text">
                <h3>Vitamins</h3>
                <p>Increased vitamins and minerals in your diet</p>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon">
                <img src={bIcon} alt="Weight Loss Icon" />
              </div>
              <div className="icon-text">
                <h3>Weight Loss</h3>
                <p>Find scientifically proven solutions</p>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon">
                <img src={cIcon} alt="Functional Foods Icon" />
              </div>
              <div className="icon-text">
                <h3>Functional Foods</h3>
                <p>Functional foods</p>
                <p>From protein powders to baby formula</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
