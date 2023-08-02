/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Exclude } from "../../icons/Exclude";
import "./style.css";

export const Logo = ({ className }) => {
  return (
    <div className={`logo ${className}`}>
      <div className="div">
        <Exclude className="exclude-1" />
        <div className="tradingjoe">TradingJoe</div>
      </div>
    </div>
  );
};
