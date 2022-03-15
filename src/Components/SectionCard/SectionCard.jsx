import React from "react";
import "./SectionCard.css";

const SectionCard = (props) => {
  let { nature } = props;
  return (
    <div>
      <h2>{nature.description}</h2>
      <img src={nature.image} alt="natures" className="nature-image" />
    </div>
  );
};

export default SectionCard;
