import React from "react";

import "./footer.m.css";

const Footer = ({ number }) => {
  return (
    <div className="footer">
      <span className="footer-text">
        Last Updated:
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(number)}
      </span>
    </div>
  );
};

export default Footer;
