import React, { useState } from "react";
import "./style.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1>DSR</h1>

        <ul className="nav-links">
          <li>
            <a href="#description">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#hero">portfolio</a>
          </li>
        </ul>
        <button>Contact me</button>

        {/* <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div> */}
      </nav>
      <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>

      {open && (
        <div className="mobile-menu">
          <span className="close" onClick={() => setOpen(false)}>
            ✕
          </span>

          <ul className="menu-links">
            <li>
              <a href="#description" onClick={() => setOpen(false)}>About me</a>
            </li>
            
            <li>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#project" onClick={() => setOpen(false)}>Project</a>
            </li>
            <li>
              <a href="#hero" onClick={() => setOpen(false)}>portfolio</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
