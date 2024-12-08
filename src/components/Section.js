import React from "react";
// import "./Section.css";

const features = [
  { title: "Clinically Studied", description: "All products are safe and tested." },
  { title: "Vegetarian Friendly", description: "Wide selection for vegetarians." },
  { title: "Made in India", description: "Proudly made in India." },
  { title: "Free Shipping", description: "Free shipping on all orders." },
  { title: "No Risk", description: "Use safely until expiry date." },
  { title: "GMO Free", description: "No harmful modifications." },
];

const Section = () => (
  <section className="section">
    <div className="features">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Section;
