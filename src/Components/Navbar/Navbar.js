import React from "react";

const Navbar = ({ nature }) => {
  return (
    <div>
      {nature.map((item) => (
        <strong style={{ margin: "10px", cursor: "pointer" }} key={item.id}>
          {item.description}
        </strong>
      ))}
    </div>
  );
};

export default Navbar;
