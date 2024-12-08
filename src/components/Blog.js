import React from "react";
import "./Blog.css";

const Blog = () => {
  const importAll = (requireContext) => {
    return requireContext.keys().map(requireContext);
  };

  let year = 2016;

  const images = importAll(require.context("../Assets/blog", false, /\.(png|jpe?g|svg)$/));

  const blogPosts = images.map((image, index) => ({
    id: index + 1,
    date: "20 APR", // Add quotes around the date
    title: `The Covid-19 Epidemic in ${year + index} Is Back`, // Use backticks for template literals
    image,
    randomHeight: index % 3 === 0 ? 'tall' : index % 3 === 1 ? 'medium' : 'short', // Assign height classes dynamically
  }));

  return (
    <div className="blog-container">
      <h2 className="blog-header">Our Blog</h2>
      <h3 className="latest-news-header">Latest News</h3>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className={`blog-card ${post.randomHeight}`}> {/* Fixed the className syntax */}
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-overlay">
              <span className="blog-date">{post.date}</span>
              <p className="blog-title">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
</div>
  );
};

export default Blog; // Fixed the export statement
