import React from "react";
import "../styles/Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-left"> GWAJA</div>
        <div className="nav-right">
          <a>Reviews</a>
          <a>Gwaja Box</a>
          <a>Gallery</a>
          <a>About</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
