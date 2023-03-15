import React from "react";

const Button = ({ onClick, text, styles }) => {
  return (
    <button onClick={onClick} className={styles}>
      {text}
    </button>
  );
};

export default Button;
