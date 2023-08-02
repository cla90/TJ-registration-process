/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Item = ({
  className,
  googlePng = "/img/google-png-0.png",
  text = "GOOGL",
  elementClassName,
  text1 = "+10.68%",
}) => {
  return (
    <div className={`item ${className}`}>
      <img className="google-png" alt="Google png" src={googlePng} />
      <div className="paragraph-container">
        <div className="GOOGL">{text}</div>
        <div className={`element ${elementClassName}`}>{text1}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  googlePng: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
