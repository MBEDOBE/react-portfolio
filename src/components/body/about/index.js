import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import SocialContacts from "../../common/social-contact";
import "./about.css";

function About() {
  // ityped initialized
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Software Developer", "UI Designer"],
    });
  }, []);

  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h2>
            Hi There<span className="wave">👋🏾</span>, I'm
          </h2>
          <h1>Daniel Mbedobe</h1>
          <h3>
            Freelance <span className="ityped-text" ref={textRef}></span>
          </h3>
        </div>
        <div className="about-photo">
          <img className="profImage" src={require('../../../assets/profImage.png')} alt="profile" />
        </div>
      </div>
      <SocialContacts/>
    </div>
  );
}

export default About;
