import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Ingredients from "./components/Ingredients";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
       <Features />
    <Ingredients />
    <Blog />
      <Footer /> 
    </div>
  );
}

export default App;
