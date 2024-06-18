import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/slider1">
        <button>Slider1</button>
      </Link>
      <Link to="/slider2">
        <button>Slider2</button>
      </Link>
      <Link to="/slider3">
        <button>Slider3</button>
      </Link>
    </div>
  );
};

export default Home;
