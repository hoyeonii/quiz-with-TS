import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-left">
          <Link to="/">GWAJA</Link>
        </div>
        <div className="nav-right">
          <Link to="/about">About</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/order">Order</Link>
          <Link to="/myorder">My Order</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
