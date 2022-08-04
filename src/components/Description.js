import React from "react";
import "./Description.css";
import PersonInfo from "./PersonInfo";
import PersonDescription from "./PersonDescription";

export default function Description() {
  return (
    <div className="description">
      <PersonInfo />
      <PersonDescription />
    </div>
  );
}
