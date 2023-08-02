/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ButtonPtimary = ({ className, cancelClassName, text = "Cancel", to, to1 }) => {
  return (
    <Link className={`button-ptimary ${className}`} to={to}>
      <Link className={`cancel ${cancelClassName}`} to={to1}>
        {text}
      </Link>
    </Link>
  );
};

ButtonPtimary.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
};
