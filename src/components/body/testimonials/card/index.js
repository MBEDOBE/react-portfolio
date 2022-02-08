import React from "react";
import "./card.css";

function Card() {
  return (
    <section id="slider-container">
      <div id="testimonials">
        <figure class="single-testimonial">
          <blockquote>
            <p>This is the first testimonial</p>
            <footer>
              - <cite>Joe Schmo</cite>
            </footer>
          </blockquote>
          <blockquote>
            <p>This is the second testimonial</p>
            <footer>
              - <cite>Joe Schmo</cite>
            </footer>
          </blockquote>
          <blockquote>
            <p>This is the third testimonial</p>
            <footer>
              - <cite>Joe Schmo</cite>
            </footer>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}

export default Card;
