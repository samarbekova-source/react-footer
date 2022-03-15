import React from "react";
import SectionCard from "../SectionCard/SectionCard";
import "./SectionList.css";

const SectionList = (props) => {
  let { nature } = props;
  console.log("This is props fom SectionList", nature);
  return (
    <div className="nature-list">
      {nature.map((item) => (
        <SectionCard nature={item} key={item.id} />
      ))}
    </div>
  );
};

export default SectionList;
