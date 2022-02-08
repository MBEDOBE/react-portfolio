import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Testimonials from "./testimonials/index";
import Contact from "./contact/index";
import Skills from "../skills";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section>
        <Skills/>
      </section>
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
