import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const Screen10 = () => {
  return (
    <div className="screen-10">
      <div className="registration-6">
        <div className="frame-15">
          <h1 className="text-wrapper-38">Phone Number</h1>
          <div className="input-form-6">
            <div className="form-16">
              <div className="e-mail-4">
                <span className="text-wrapper-39">|</span>
                <span className="text-wrapper-40">Ex. 082 897 869</span>
              </div>
            </div>
            <ButtonPrimary className="button-primary-12" text="Send OTP" />
          </div>
        </div>
        <Navbar
          className="navbar-12"
          icChevronLeft="/img/ic-chevron-left-5.png"
          icChevronLeft4Color="#2E3032"
          logoLogoClassNameOverride="navbar-13"
          type="logo-centered-with-back"
        />
      </div>
    </div>
  );
};
