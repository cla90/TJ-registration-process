/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ButtonPrimary = ({ className, text = "Button", buttonClassName, to }) => {
  return (
    <Link className={`button-primary ${className}`} to={to}>
      <div className={`button ${buttonClassName}`}>{text}</div>
    </Link>
  );
};

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
};
