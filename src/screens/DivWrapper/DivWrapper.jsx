import React from "react";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/ButtonOutline";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonPtimary } from "../../components/ButtonPtimary";
import { Form } from "../../components/Form";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="registration-3">
        <Link className="frame-10" to="/registration-2">
          <h1 className="text-wrapper-23">Sign Up</h1>
          <div className="input-form-4">
            <div className="form-9">
              <div className="e-mail-3">
                <span className="text-wrapper-24">|</span>
                <span className="text-wrapper-25">Email</span>
              </div>
            </div>
            <div className="text-input-3">
              <Form className="form-10" frameClassName="form-11" state="default" type="password" />
              <p className="text-wrapper-26">Maximum of 6 characters with numbers</p>
            </div>
            <div className="text-input-3">
              <Form
                className="form-10"
                frameClassName="form-11"
                state="default"
                text1="Confirm Password"
                type="password"
              />
              <p className="text-wrapper-27">Maximum of 6 characters with numbers</p>
            </div>
            <ButtonPrimary className="button-primary-9" text="Register" />
            <ButtonOutline className="button-outline-google" />
            <div className="text-input-4">
              <div className="text-wrapper-28">Already have an account?</div>
              <ButtonPtimary className="button-ptimary-outline-instance" text="Login" to="/login" />
            </div>
          </div>
        </Link>
        <Navbar
          className="navbar-6"
          icChevronLeft="/img/ic-chevron-left-5.png"
          icChevronLeft4Color="#2E3032"
          logoLogoClassNameOverride="navbar-7"
          type="logo-centered-with-back"
        />
      </div>
    </div>
  );
};
