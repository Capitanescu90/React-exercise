import React from "react";
import "./PersonDescription.css";

export default function PersonDescription() {
  return (
    <div className="card__description__wrapper">
      <div className="card__description">
        <h4 className="card__description--title">About</h4>
        <p className="card__description--text">
          I'm a Frontend web developer with a passion for building beautiful
          things from scratch. I've been building websites and landing pages
          since 2019 and also have a degree in Engineering.
        </p>
      </div>
      <div className="card__description">
        <h4 className="card__description--title">Interests</h4>
        <p className="card__description--text">
          I am interested in developing and building different projects from
          scratch. HTML, CSS/SASS (SCSS), Bootstrap, Javascript, JQuery,
          Wordpress, React, are part of my educational learning.
        </p>
      </div>
    </div>
  );
}
