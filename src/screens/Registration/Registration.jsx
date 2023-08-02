import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const Registration = () => {
  return (
    <div className="registration">
      <div className="div-2">
        <div className="text">
          <div className="frame-2">
            <img className="element-success" alt="Element success" src="/img/68994-success-1.gif" />
            <div className="frame-3">
              <h1 className="h-1">Registration Successful.</h1>
              <p className="your-account-has">
                Your account has been created, let&#39;s start investing in stocks and own your favorite companies.
              </p>
            </div>
          </div>
          <div className="button-primary-wrapper">
            <ButtonPrimary className="button-primary-instance" text="Go to Dashboard" />
          </div>
        </div>
        <Navbar
          className="navbar-instance"
          icClose1Color="#2E3032"
          logoLogoClassName="design-component-instance-node"
          type="close"
        />
      </div>
    </div>
  );
};
