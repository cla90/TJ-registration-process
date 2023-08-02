/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { IcChevronDown } from "../../icons/IcChevronDown";
import { IcEye2 } from "../../icons/IcEye2";
import { Vector93 } from "../../icons/Vector93";
import "./style.css";

export const Form = ({
  type,
  state,
  className,
  frameClassName,
  text = "0",
  text1 = "Password",
  text2 = "example@e-mail.com",
  to,
  href,
}) => {
  return (
    <Link className={`form ${type} ${className}`} to={to}>
      {type === "textfiled" && (
        <a className={`exapmle-e-mail-com ${state}`} href={href} rel="noopener noreferrer" target="_blank">
          {state === "filled" && <>{text2}</>}

          {state === "default" && <>E-mail</>}
        </a>
      )}

      {type === "password" && (
        <>
          <div className={`frame state-${state} ${frameClassName}`}>
            {state === "filled" && (
              <>
                <div className="ellipse-2" />
                <div className="ellipse-2" />
                <div className="ellipse-2" />
                <div className="ellipse-2" />
                <div className="ellipse-2" />
                <div className="ellipse-2" />
              </>
            )}

            {state === "default" && <>{text1}</>}
          </div>
          <IcEye2 className="instance-node" />
        </>
      )}

      {type === "select" && (
        <>
          <div className={`choose state-0-${state} ${frameClassName}`}>Choose</div>
          <IcChevronDown className="instance-node" />
        </>
      )}

      {type === "code" && (
        <>
          <div className={`element-2 state-1-${state} ${frameClassName}`}>{text}</div>
          <Vector93 className="vector" />
        </>
      )}
    </Link>
  );
};

Form.propTypes = {
  type: PropTypes.oneOf(["code", "textfiled", "password", "select"]),
  state: PropTypes.oneOf(["filled", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};
