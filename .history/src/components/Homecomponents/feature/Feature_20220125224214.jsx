import React from "react";
import "./feature.css";

const Feature = ({ title, text, more }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>
        {title}
        <span className="gpt3_see_more">{more}</span>
      </h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
