/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IcChevronLeft4 } from "../../icons/IcChevronLeft4";
import { IcClose1 } from "../../icons/IcClose1";
import { Line } from "../../icons/Line";
import { Right } from "../../icons/Right";
import { Logo } from "../Logo";
import "./style.css";

export const Navbar = ({
  type,
  className,
  icClose1Color = "black",
  logoLogoClassName,
  icChevronLeft4Color = "black",
  logoLogoClassNameOverride,
  icChevronLeft = "/img/ic-chevron-left-1.png",
}) => {
  return (
    <div className={`navbar ${type} ${className}`}>
      {["centered-logo-with-search-back", "logo-centered-with-back"].includes(type) && (
        <IcChevronLeft4
          className={`${type === "logo-centered-with-back" ? "ic-chevron-left" : "class"}`}
          color={icChevronLeft4Color}
        />
      )}

      {type === "close" && <IcClose1 className="ic-chevron-left" color={icClose1Color} />}

      {[
        "centered-logo-with-search-back",
        "close",
        "default-header",
        "logo-ceneterd-with-search",
        "logo-centered-with-back",
      ].includes(type) && (
        <Logo
          className={`${
            type === "close"
              ? logoLogoClassName
              : type === "default-header"
              ? "class-2"
              : type === "logo-ceneterd-with-search"
              ? "class-3"
              : logoLogoClassNameOverride
          }`}
        />
      )}

      {["centered-logo-with-search-back", "default-header", "logo-ceneterd-with-search"].includes(type) && (
        <div className="ic-search">
          <div className="overlap-group">
            <div className="ellipse" />
            <Line className="line-2" />
          </div>
        </div>
      )}

      {["back-right-icons", "back-title"].includes(type) && (
        <div className="left">
          <IcChevronLeft4 className="ic-chevron-left" color="black" />
          {type === "back-title" && <div className="text-wrapper">Back Title</div>}
        </div>
      )}

      {type === "back-right-icons" && <Right className="right-instance" />}

      {type === "logo-centered-with-back" && (
        <img className="ic-chevron-left" alt="Ic chevron left" src={icChevronLeft} />
      )}
    </div>
  );
};

Navbar.propTypes = {
  type: PropTypes.oneOf([
    "back-title",
    "logo-centered-with-back",
    "default-header",
    "close",
    "centered-logo-with-search-back",
    "back-right-icons",
    "logo-ceneterd-with-search",
  ]),
  icClose1Color: PropTypes.string,
  icChevronLeft4Color: PropTypes.string,
  icChevronLeft: PropTypes.string,
};
