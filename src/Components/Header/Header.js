import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={props.logoNature} width="200px" alt="logo" />
      <Navbar nature={props.nature} />
    </div>
  );
};

export default Header;
