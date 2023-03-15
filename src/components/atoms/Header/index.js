import React from "react";
import icon from "../../../assets/images/boltIcon.svg";

import "./header.m.css";

const Header = ({ type }) => {
  return (
    <div className={`header ${type}`}>
      {type === "automated" && <img className="icon" src={icon} alt="icon" />}
      <span>{type} Origin</span>
    </div>
  );
};

export default Header;
