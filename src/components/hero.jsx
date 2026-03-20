import React from "react";
import "./style.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <h2>my name is Dhanasingh</h2>
        <h3>I'M A DEVELOPER</h3>

        <div className="vertical-line"></div>

        <div className="icons">
          <img src="src/assets/at.png" width="40px" height="40px"/>
          <img src="src/assets/github.png" width="40px" height="40px"/>
          <img src="src/assets/linkedin.png" width="40px" height="40px" />
        </div>
      </div>

      <div className="hero-main-content">
        <div className="hero-content">
          <h3>Hi,I am</h3>
          <h1>Dhanasingh R</h1>
          <h2>Frontend Developer, React Developer</h2>

          <div className="hero-button">
            <br />
            <button>
              <a href="mailto:dhanasinghrajan007@gmail.com" target="_blank">
                <img src="src/assets/at.png" />
              </a>
            </button>
            <button>
              <a
                href="https://github.com/DhanasinghRajan13 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/github.png" />
              </a>
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/dhanasinghrajan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/linkedin.png" />
              </a>
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
