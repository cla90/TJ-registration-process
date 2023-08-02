import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <div className="div-5">
        <div className="frame-7">
          <div className="paragraph-container-4">
            <h1 className="text-wrapper-14">Forgot Password</h1>
            <p className="text-wrapper-15">Enter your registered email below to receive password reset instruction.</p>
          </div>
          <div className="input-form-2">
            <Link className="form-5" to="/forgot-password-2">
              <div className="e-mail-2">
                <span className="text-wrapper-16">|</span>
                <span className="text-wrapper-17">Email</span>
              </div>
            </Link>
            <ButtonPrimary className="button-primary-6" text="Send" />
          </div>
        </div>
        <Navbar
          className="navbar-4"
          icChevronLeft="/img/ic-chevron-left-5.png"
          icChevronLeft4Color="#2E3032"
          logoLogoClassNameOverride="navbar-5"
          type="logo-centered-with-back"
        />
      </div>
    </div>
  );
};
