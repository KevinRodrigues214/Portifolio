import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my work and services.</p>
      <Link to="/about">Learn More About Me</Link>
    </div>
  );
}

export default Home;
