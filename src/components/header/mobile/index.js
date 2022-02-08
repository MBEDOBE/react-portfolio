import React from "react";
import "./mobile.css";

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="ti ti-x"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#about">About</a>
        </div>
        <div className="mobile-option">
          <a href="#projects">Projects</a>
        </div>
        <div className="mobile-option">
          <a href="#testimonials">Testimonials</a>
        </div>
        <div className="mobile-option">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
