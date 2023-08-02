/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { VerticalContainer5 } from "../../icons/VerticalContainer5";
import "./style.css";

export const ButtonOutline = ({ className }) => {
  return (
    <div className={`button-outline ${className}`}>
      <VerticalContainer5 className="flat-color-icons" />
      <div className="with-google">With Google</div>
    </div>
  );
};
