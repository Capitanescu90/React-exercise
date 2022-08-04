import React from "react";
import "./PersonInfo.css";

export default function PersonInfo() {
  return (
    <div className="card__info">
      <h3 className="card__info--name">Capitanescu Radu</h3>
      <div className="card__info--job">Frontend Developer</div>
      <a
        href="https://capitanescu-radu.com/"
        className="card__info--website"
        target="_blank"
      >
        capitanescu-radu.com
      </a>
      <div className="card__info--buttons">
        <a href="mailto:raducapitanescu90@gmail.com" target="_blank">
          <i class="fa-solid fa-envelope"></i>
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/radu-capitanescu-7135611b9/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
          <span class="linkedin">Linkedin</span>
        </a>
      </div>
    </div>
  );
}
