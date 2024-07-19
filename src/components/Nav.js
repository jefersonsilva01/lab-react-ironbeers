import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>
        <i className="bi bi-house-door-fill"></i>
      </Link>
    </nav>
  );
}

export default Nav;