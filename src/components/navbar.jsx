import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
        <h1>DSR</h1>
      <ul>
        <li><a href="#">About me</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">portfolio</a></li>
      </ul>
      <button>Contact me</button>
    </nav>
  );
}

export default Navbar;
