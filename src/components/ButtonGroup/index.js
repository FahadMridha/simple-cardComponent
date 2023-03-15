import React from "react";
import Button from "../atoms/Button/Index";

import "./button-group.m.css";

const ButtonGroup = () => {
  const onClick = () => {
    console.log("licked");
  };
  return (
    <div className="base">
      <Button onClick={onClick} styles="view-btn" text="View" />
      <Button onClick={onClick} styles="remove-btn" text="Remove" />
    </div>
  );
};

export default ButtonGroup;
