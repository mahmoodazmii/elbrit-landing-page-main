import React from "react";
import "./Ingredients.css";

const Ingredients = () => {
  const ingredients = [
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      imageClass: "vitamin-c",
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      imageClass: "vitamin-b3",
    },
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      imageClass: "magnesium",
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      imageClass: "hyaluronic-acid",
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      imageClass: "lactobacillus",
    },
  ];

  return (
    <div className="ingredients">
      <div className="ingredients-grid">
        {/* Intro card */}
        <div className="ingredient-card intro-card">
          <p>INGREDIENTS</p>
          <h2>Better Ingredients</h2>
          <p id="intro-head">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high-quality products!
          </p>
        </div>

        {ingredients.map((ingredient, index) => (
          <div className={`ingredient-card blocks`} key={index}>
            <div
              className={`ingredient-image ${ingredient.imageClass}`}
            ></div>
            <div className="card-content">
              <h3>{ingredient.title}</h3>
              <p>{ingredient.description}</p>
              <button className="see-more">SEE MORE</button>
            </div>
          </div>
        ))}
        <div className={`ingredient-last-card`}></div>
      </div>
    </div>
  );
};

export default Ingredients;
