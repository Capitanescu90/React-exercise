import React from "react";
import image from "../images/person.jpg";
import "./CardOne.css";
import Description from "./Description";
import SocialMedia from "./SocialMedia";
export default function CardOne() {
  return (
    <div className="card-wrapper">
      <div class="card">
        <div className="card__image">
          <img src={image} alt="person image" />
        </div>
        <Description />
        <SocialMedia />
      </div>
    </div>
  );
}
