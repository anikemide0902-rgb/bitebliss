import "./HeroComponent.css";
import React from 'react'
import heroimage from "../assets/heroimage.jpg"

function HeroComponent() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <h1>Discover Delicious Recipes</h1>

        <p>
          Explore simple, tasty recipes you can cook anytime.
          From quick meals to sweet desserts.
        </p>

        <div className="hero-search">
          <input type="text" placeholder="Search recipes..." />
          <button>Search</button>
        </div>

      </div>

      <div className="hero-image">
        <img src={heroimage} alt="Hero Image" />
      </div>

    </section>
  );
}

export default HeroComponent