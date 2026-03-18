import React from "react";
import "./style.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-main-nav">
        <div className="hero-nav">
          <nav className="hero-nav-links">
            <ul>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">portfolio</a>
              </li>
            </ul>
            <button>Contact me</button>
          </nav>
        </div>
      </div>

      <div className="hero-main-content">
        <div className="hero-content">
          <h3>Hi,I am</h3><br/>
          <h1>Dhanasingh R</h1>
          <h2>Frontend Developer, React Developer</h2>

          <div className="hero-button">
            <br/>
            <button >
              <a  href="mailto:dhanasinghrajan007@gmail.com" target="_blank"><img src="src/assets/at.png" /></a>
            </button>
            <button>
              <a href="https:github.com/DhanasinghRajan13 "  target="_blank" rel="noopener noreferrer"><img src="src/assets/github.png" /></a>
            </button>
            <button>
              <a href="https:www.linkedin.com/in/dhanasinghrajan" target="_blank" rel="noopener noreferrer"><img src="src/assets/linkedin.png" /></a>
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src="src/assets/me.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
